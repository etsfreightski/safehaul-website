from sqlalchemy import Column, Integer, String, DateTime, Float, ForeignKey, Boolean, Text
from sqlalchemy.orm import relationship
from datetime import datetime
from .base import Base
import uuid

class Claim(Base):
    __tablename__ = 'claims'
    
    id = Column(Integer, primary_key=True)
    claim_number = Column(String(50), unique=True, nullable=False)
    status = Column(String(50), nullable=False, default='New')
    date_of_loss = Column(DateTime, nullable=False)
    date_reported = Column(DateTime, default=datetime.utcnow)
    date_created = Column(DateTime, default=datetime.utcnow)
    date_modified = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Policy Information
    policy_number = Column(String(50))
    insurance_company = Column(String(100))
    coverage_type = Column(String(50))
    deductible = Column(Float)
    
    # Incident Details
    incident_description = Column(Text)
    incident_location = Column(String(200))
    incident_state = Column(String(2))
    police_report_number = Column(String(50))
    
    # Vehicle Information
    vehicle_year = Column(Integer)
    vehicle_make = Column(String(50))
    vehicle_model = Column(String(50))
    vin = Column(String(17))
    dot_number = Column(String(20))
    
    # Financial
    reserve_amount = Column(Float, default=0.0)
    total_paid = Column(Float, default=0.0)
    
    # Relationships
    claimant_id = Column(Integer, ForeignKey('claimants.id'))
    claimant = relationship("Claimant", back_populates="claims")
    
    notes = relationship("ClaimNote", back_populates="claim")
    documents = relationship("Document", back_populates="claim")
    payments = relationship("Payment", back_populates="claim")
    
    # Timestamps and Tracking
    assigned_to = Column(String(100))
    last_activity = Column(DateTime)
    next_action_date = Column(DateTime)
    next_action_description = Column(Text)
    
    def __init__(self, **kwargs):
        super(Claim, self).__init__(**kwargs)
        if not self.claim_number:
            self.claim_number = f"SH-{datetime.utcnow().strftime('%Y%m')}-{str(uuid.uuid4())[:8]}"

class ClaimNote(Base):
    __tablename__ = 'claim_notes'
    
    id = Column(Integer, primary_key=True)
    claim_id = Column(Integer, ForeignKey('claims.id'))
    date_created = Column(DateTime, default=datetime.utcnow)
    created_by = Column(String(100))
    note_type = Column(String(50))
    content = Column(Text)
    is_private = Column(Boolean, default=False)
    
    claim = relationship("Claim", back_populates="notes")

class Claimant(Base):
    __tablename__ = 'claimants'
    
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    contact_type = Column(String(50))  # insured, claimant, witness, etc.
    phone = Column(String(20))
    email = Column(String(100))
    address = Column(String(200))
    city = Column(String(100))
    state = Column(String(2))
    zip_code = Column(String(10))
    
    claims = relationship("Claim", back_populates="claimant")

class Document(Base):
    __tablename__ = 'documents'
    
    id = Column(Integer, primary_key=True)
    claim_id = Column(Integer, ForeignKey('claims.id'))
    filename = Column(String(255))
    file_path = Column(String(500))
    document_type = Column(String(50))
    upload_date = Column(DateTime, default=datetime.utcnow)
    uploaded_by = Column(String(100))
    description = Column(Text)
    
    claim = relationship("Claim", back_populates="documents")

class Payment(Base):
    __tablename__ = 'payments'
    
    id = Column(Integer, primary_key=True)
    claim_id = Column(Integer, ForeignKey('claims.id'))
    payment_date = Column(DateTime)
    amount = Column(Float)
    payment_type = Column(String(50))
    payee = Column(String(100))
    check_number = Column(String(50))
    description = Column(Text)
    created_date = Column(DateTime, default=datetime.utcnow)
    created_by = Column(String(100))
    
    claim = relationship("Claim", back_populates="payments")
