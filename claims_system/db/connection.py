from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from contextlib import contextmanager
from ..sync.sync_manager import SyncManager
from ..sync.config import Config
import threading
import logging

logger = logging.getLogger(__name__)

class DatabaseConnection:
    _instance = None
    _lock = threading.Lock()
    
    def __new__(cls):
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:
                    cls._instance = super(DatabaseConnection, cls).__new__(cls)
                    cls._instance._initialize()
        return cls._instance
    
    def _initialize(self):
        """Initialize the database connection."""
        self.engine = create_engine(f'sqlite:///{Config.DB_PATH}')
        self.Session = scoped_session(sessionmaker(bind=self.engine))
        self.sync_manager = SyncManager()
        
    @contextmanager
    def get_session(self):
        """Get a database session with sync management."""
        session = self.Session()
        try:
            # Try to sync before operations
            try:
                self.sync_manager.download_database()
            except Exception as e:
                logger.warning(f"Failed to sync before operation: {e}")
            
            yield session
            
            # Commit and sync
            session.commit()
            try:
                self.sync_manager.upload_database()
            except Exception as e:
                logger.warning(f"Failed to sync after operation: {e}")
                
        except Exception as e:
            session.rollback()
            raise e
        finally:
            session.close()
    
    def initialize_database(self):
        """Create all database tables."""
        from ..models.base import Base
        Base.metadata.create_all(self.engine)
        
    def backup_database(self):
        """Create a backup of the database."""
        import shutil
        from datetime import datetime
        
        backup_path = Config.DB_BACKUP_DIR / f"claims_backup_{datetime.now().strftime('%Y%m%d_%H%M%S')}.db"
        shutil.copy2(Config.DB_PATH, backup_path)
        return backup_path
    
    def start_sync_service(self):
        """Start the background sync service."""
        self.sync_manager.start_sync_service()
        
    def force_sync(self):
        """Force an immediate sync."""
        self.sync_manager.force_sync()
