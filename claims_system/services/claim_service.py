from datetime import datetime
from typing import List, Optional
from sqlalchemy.orm import Session
from models.claim import Claim
from models.base import get_engine

class ClaimService:
    """Service layer for handling claim-related business logic"""
    
    @staticmethod
    def create_claim(
        insurance_company: str,
        policy_number: str,
        date_of_loss: datetime,
        incident_location: str,
        incident_description: str,
        status: str = "New"
    ) -> Claim:
        """Create a new claim with validation"""
        # Validate required fields
        if not all([insurance_company, policy_number, date_of_loss, incident_location]):
            raise ValueError("All required fields must be filled")
            
        # Validate date_of_loss is not in future
        if date_of_loss > datetime.now():
            raise ValueError("Date of loss cannot be in the future")
        
        # Generate claim number
        claim_number = f"CLM-{int(datetime.now().timestamp())}"
        
        # Create claim object
        claim = Claim(
            claim_number=claim_number,
            insurance_company=insurance_company,
            policy_number=policy_number,
            date_of_loss=date_of_loss,
            incident_location=incident_location,
            incident_description=incident_description,
            status=status
        )
        
        # Save to database
        engine = get_engine()
        with Session(engine) as session:
            session.add(claim)
            session.commit()
            session.refresh(claim)
        
        return claim
    
    @staticmethod
    def get_claims(
        status: Optional[str] = None,
        search_text: Optional[str] = None
    ) -> List[Claim]:
        """Get claims with optional filtering"""
        engine = get_engine()
        with Session(engine) as session:
            query = session.query(Claim)
            
            if status and status != "All Status":
                query = query.filter(Claim.status == status)
            
            if search_text:
                search_text = f"%{search_text}%"
                query = query.filter(
                    (Claim.claim_number.ilike(search_text)) |
                    (Claim.insurance_company.ilike(search_text)) |
                    (Claim.policy_number.ilike(search_text)) |
                    (Claim.incident_location.ilike(search_text))
                )
            
            return query.order_by(Claim.date_created.desc()).all()
    
    @staticmethod
    def get_claim_by_number(claim_number: str) -> Optional[Claim]:
        """Get a specific claim by its claim number"""
        engine = get_engine()
        with Session(engine) as session:
            return session.query(Claim).filter(
                Claim.claim_number == claim_number
            ).first()
    
    @staticmethod
    def update_claim(
        claim_number: str,
        **updates
    ) -> Optional[Claim]:
        """Update a claim with validation"""
        engine = get_engine()
        with Session(engine) as session:
            claim = session.query(Claim).filter(
                Claim.claim_number == claim_number
            ).first()
            
            if not claim:
                return None
            
            # Validate date_of_loss if it's being updated
            if 'date_of_loss' in updates:
                if updates['date_of_loss'] > datetime.now():
                    raise ValueError("Date of loss cannot be in the future")
            
            # Update fields
            for key, value in updates.items():
                if hasattr(claim, key):
                    setattr(claim, key, value)
            
            claim.date_modified = datetime.utcnow()
            session.commit()
            session.refresh(claim)
            
            return claim
    
    @staticmethod
    def get_claim_stats():
        """Get statistics about claims"""
        engine = get_engine()
        with Session(engine) as session:
            total_claims = session.query(Claim).count()
            new_claims = session.query(Claim).filter(Claim.status == "New").count()
            in_progress = session.query(Claim).filter(Claim.status == "In Progress").count()
            closed = session.query(Claim).filter(Claim.status == "Closed").count()
            
            return {
                "total_claims": total_claims,
                "new_claims": new_claims,
                "in_progress": in_progress,
                "closed": closed
            }
