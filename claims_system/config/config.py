import os
import json
from typing import Dict, Any, Optional

class ConfigManager:
    """Manages application configuration"""
    
    _instance = None
    _config: Dict[str, Any] = {}
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(ConfigManager, cls).__new__(cls)
            cls._instance._load_config()
        return cls._instance
    
    def _load_config(self):
        """Load configuration from file or set defaults"""
        config_path = os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            'data',
            'config.json'
        )
        
        # Default configuration
        self._config = {
            "insurance_companies": [
                "Progressive",
                "Travelers",
                "Liberty Mutual",
                "State Farm",
                "GEICO",
                "Other"
            ],
            "claim_statuses": [
                "New",
                "In Progress",
                "Pending Review",
                "Closed"
            ],
            "document_types": [
                "Police Report",
                "Photos",
                "Estimates",
                "Invoices",
                "Correspondence",
                "Other"
            ],
            "sync": {
                "enabled": True,
                "interval_seconds": 30
            },
            "ui": {
                "theme": "litera",
                "window_size": "1200x800"
            }
        }
        
        # Load from file if exists
        if os.path.exists(config_path):
            try:
                with open(config_path, 'r') as f:
                    saved_config = json.load(f)
                    self._config.update(saved_config)
            except Exception:
                pass  # Use defaults if file can't be read
    
    def save_config(self):
        """Save current configuration to file"""
        config_path = os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            'data',
            'config.json'
        )
        
        os.makedirs(os.path.dirname(config_path), exist_ok=True)
        
        with open(config_path, 'w') as f:
            json.dump(self._config, f, indent=4)
    
    def get(self, key: str, default: Any = None) -> Any:
        """Get a configuration value"""
        return self._config.get(key, default)
    
    def set(self, key: str, value: Any):
        """Set a configuration value"""
        self._config[key] = value
        self.save_config()
    
    @property
    def insurance_companies(self) -> list:
        return self._config["insurance_companies"]
    
    @property
    def claim_statuses(self) -> list:
        return self._config["claim_statuses"]
    
    @property
    def document_types(self) -> list:
        return self._config["document_types"]
    
    @property
    def sync_enabled(self) -> bool:
        return self._config["sync"]["enabled"]
    
    @property
    def sync_interval(self) -> int:
        return self._config["sync"]["interval_seconds"]
    
    @property
    def theme(self) -> str:
        return self._config["ui"]["theme"]
    
    @property
    def window_size(self) -> str:
        return self._config["ui"]["window_size"]
