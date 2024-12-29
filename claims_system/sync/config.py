import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class Config:
    # Base paths
    BASE_DIR = Path(__file__).parent.parent
    DATA_DIR = BASE_DIR / 'data'
    TEMP_DIR = DATA_DIR / 'temp'
    
    # Database
    DB_PATH = DATA_DIR / 'claims.db'
    DB_BACKUP_DIR = DATA_DIR / 'backups'
    
    # Sync settings
    SYNC_INTERVAL = 30  # seconds
    LOCK_TIMEOUT = 300  # seconds
    
    # Dropbox settings
    DROPBOX_TOKEN = os.getenv('DROPBOX_TOKEN')
    
    # Create necessary directories
    @classmethod
    def setup(cls):
        cls.DATA_DIR.mkdir(parents=True, exist_ok=True)
        cls.TEMP_DIR.mkdir(parents=True, exist_ok=True)
        cls.DB_BACKUP_DIR.mkdir(parents=True, exist_ok=True)
        
        # Create .env file if it doesn't exist
        env_file = cls.BASE_DIR / '.env'
        if not env_file.exists():
            with open(env_file, 'w') as f:
                f.write("DROPBOX_TOKEN=your_token_here\n")
