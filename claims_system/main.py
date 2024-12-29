import sys
from PyQt6.QtWidgets import QApplication
from gui.main_window import MainWindow
from db.connection import DatabaseConnection
from models.base import Base, get_engine

def initialize_database():
    """Create database tables if they don't exist."""
    engine = get_engine()
    Base.metadata.create_all(engine)

def main():
    # Initialize database
    initialize_database()
    
    # Create Qt application
    app = QApplication(sys.argv)
    
    # Set application style
    app.setStyle('Fusion')
    
    # Create and show main window
    window = MainWindow()
    window.show()
    
    # Start sync service
    db = DatabaseConnection()
    db.start_sync_service()
    
    # Run application
    sys.exit(app.exec())

if __name__ == '__main__':
    main()
