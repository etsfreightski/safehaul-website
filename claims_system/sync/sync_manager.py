import dropbox
import os
import json
import time
from datetime import datetime
import sqlite3
import threading
from pathlib import Path
from cryptography.fernet import Fernet

class SyncManager:
    def __init__(self, dropbox_token=None):
        self.dropbox_token = dropbox_token or os.getenv('DROPBOX_TOKEN')
        self.dbx = dropbox.Dropbox(self.dropbox_token)
        self.local_db_path = Path('data/claims.db')
        self.remote_db_path = '/claims.db'
        self.lock_file = Path('data/db.lock')
        self.sync_interval = 30  # seconds
        self.encryption_key = self._get_or_create_key()
        self.fernet = Fernet(self.encryption_key)
        self._setup_directories()
        
    def _setup_directories(self):
        """Create necessary directories if they don't exist."""
        self.local_db_path.parent.mkdir(parents=True, exist_ok=True)
        
    def _get_or_create_key(self):
        """Get existing encryption key or create new one."""
        key_path = Path('data/encryption.key')
        if key_path.exists():
            return key_path.read_bytes()
        else:
            key = Fernet.generate_key()
            key_path.parent.mkdir(parents=True, exist_ok=True)
            key_path.write_bytes(key)
            return key

    def acquire_lock(self):
        """Try to acquire the database lock."""
        if self.lock_file.exists():
            lock_data = json.loads(self.lock_file.read_text())
            if time.time() - lock_data['timestamp'] < 300:  # 5-minute timeout
                return False
        
        self.lock_file.write_text(json.dumps({
            'user': os.getenv('USERNAME'),
            'timestamp': time.time()
        }))
        return True

    def release_lock(self):
        """Release the database lock."""
        if self.lock_file.exists():
            self.lock_file.unlink()

    def _encrypt_file(self, file_path):
        """Encrypt a file before uploading."""
        with open(file_path, 'rb') as f:
            data = f.read()
        return self.fernet.encrypt(data)

    def _decrypt_file(self, encrypted_data):
        """Decrypt downloaded file data."""
        return self.fernet.decrypt(encrypted_data)

    def upload_database(self):
        """Upload the local database to Dropbox."""
        if not self.acquire_lock():
            raise Exception("Could not acquire lock for upload")
        
        try:
            encrypted_data = self._encrypt_file(self.local_db_path)
            self.dbx.files_upload(
                encrypted_data,
                self.remote_db_path,
                mode=dropbox.files.WriteMode.overwrite
            )
        finally:
            self.release_lock()

    def download_database(self):
        """Download the database from Dropbox."""
        if not self.acquire_lock():
            raise Exception("Could not acquire lock for download")
        
        try:
            metadata, response = self.dbx.files_download(self.remote_db_path)
            decrypted_data = self._decrypt_file(response.content)
            
            with open(self.local_db_path, 'wb') as f:
                f.write(decrypted_data)
        finally:
            self.release_lock()

    def start_sync_service(self):
        """Start the background sync service."""
        def sync_loop():
            while True:
                try:
                    # Check for remote changes
                    metadata = self.dbx.files_get_metadata(self.remote_db_path)
                    if not hasattr(self, 'last_sync') or metadata.server_modified > self.last_sync:
                        self.download_database()
                        self.last_sync = metadata.server_modified

                    # Upload local changes if needed
                    local_modified = datetime.fromtimestamp(os.path.getmtime(self.local_db_path))
                    if not hasattr(self, 'last_upload') or local_modified > self.last_upload:
                        self.upload_database()
                        self.last_upload = local_modified

                except Exception as e:
                    print(f"Sync error: {e}")
                
                time.sleep(self.sync_interval)

        sync_thread = threading.Thread(target=sync_loop, daemon=True)
        sync_thread.start()

    def force_sync(self):
        """Force an immediate sync."""
        self.download_database()
        self.upload_database()
