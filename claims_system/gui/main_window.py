from PyQt6.QtWidgets import (QMainWindow, QWidget, QVBoxLayout, QHBoxLayout, 
                               QStackedWidget, QPushButton, QLabel, QFrame)
from PyQt6.QtCore import Qt, QSize
from PyQt6.QtGui import QFont, QIcon, QPalette, QColor
import os

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Safe Haul Claims Management System")
        self.setMinimumSize(1200, 800)
        
        # Set the color scheme
        self.setup_theme()
        
        # Create the main layout
        main_widget = QWidget()
        self.setCentralWidget(main_widget)
        main_layout = QHBoxLayout(main_widget)
        main_layout.setSpacing(0)
        main_layout.setContentsMargins(0, 0, 0, 0)
        
        # Create sidebar
        self.sidebar = self.create_sidebar()
        main_layout.addWidget(self.sidebar)
        
        # Create main content area
        self.content_stack = QStackedWidget()
        main_layout.addWidget(self.content_stack)
        main_layout.setStretchFactor(self.content_stack, 4)
        
        # Initialize the UI components
        self.setup_ui()
        
    def setup_theme(self):
        """Set up the application theme and styling."""
        palette = self.palette()
        palette.setColor(QPalette.ColorRole.Window, QColor("#F5F5F5"))
        palette.setColor(QPalette.ColorRole.WindowText, QColor("#333333"))
        palette.setColor(QPalette.ColorRole.Base, QColor("#FFFFFF"))
        palette.setColor(QPalette.ColorRole.AlternateBase, QColor("#E3F2FD"))
        palette.setColor(QPalette.ColorRole.Button, QColor("#1976D2"))
        palette.setColor(QPalette.ColorRole.ButtonText, QColor("#FFFFFF"))
        self.setPalette(palette)
        
        # Set default font
        font = QFont("Segoe UI", 10)
        self.setFont(font)
        
    def create_sidebar(self):
        """Create the sidebar with navigation buttons."""
        sidebar = QFrame()
        sidebar.setObjectName("sidebar")
        sidebar.setStyleSheet("""
            #sidebar {
                background-color: #1976D2;
                min-width: 200px;
                max-width: 200px;
                padding: 10px;
            }
            QPushButton {
                background-color: transparent;
                border: none;
                color: white;
                text-align: left;
                padding: 10px;
                font-size: 14px;
            }
            QPushButton:hover {
                background-color: #1565C0;
            }
            QPushButton:checked {
                background-color: #0D47A1;
            }
        """)
        
        layout = QVBoxLayout(sidebar)
        layout.setSpacing(5)
        layout.setContentsMargins(0, 0, 0, 0)
        
        # Logo/Title area
        logo_label = QLabel("Safe Haul Claims")
        logo_label.setStyleSheet("color: white; font-size: 18px; font-weight: bold; padding: 20px;")
        layout.addWidget(logo_label)
        
        # Navigation buttons
        nav_buttons = [
            ("Dashboard", "dashboard.png"),
            ("Claims", "claims.png"),
            ("Documents", "documents.png"),
            ("Contacts", "contacts.png"),
            ("Reports", "reports.png"),
            ("Settings", "settings.png")
        ]
        
        self.nav_button_group = []
        for text, icon in nav_buttons:
            btn = QPushButton(text)
            btn.setCheckable(True)
            btn.setIconSize(QSize(20, 20))
            if os.path.exists(f"icons/{icon}"):
                btn.setIcon(QIcon(f"icons/{icon}"))
            self.nav_button_group.append(btn)
            layout.addWidget(btn)
            
        layout.addStretch()
        
        # Sync status
        self.sync_status = QLabel("✓ Synced")
        self.sync_status.setStyleSheet("color: #A5D6A7; padding: 10px;")
        layout.addWidget(self.sync_status)
        
        return sidebar
        
    def setup_ui(self):
        """Initialize and set up all UI components."""
        from .dashboard import DashboardWidget
        from .claims_view import ClaimsWidget
        from .documents_view import DocumentsWidget
        from .contacts_view import ContactsWidget
        from .reports_view import ReportsWidget
        from .settings_view import SettingsWidget
        
        # Create and add all main views
        self.views = {
            "dashboard": DashboardWidget(),
            "claims": ClaimsWidget(),
            "documents": DocumentsWidget(),
            "contacts": ContactsWidget(),
            "reports": ReportsWidget(),
            "settings": SettingsWidget()
        }
        
        # Add views to stack
        for view in self.views.values():
            self.content_stack.addWidget(view)
            
        # Connect navigation buttons
        for btn, (view_name, view) in zip(self.nav_button_group, self.views.items()):
            btn.clicked.connect(lambda checked, v=view_name: self.switch_view(v))
            
        # Start with dashboard
        self.nav_button_group[0].setChecked(True)
        self.content_stack.setCurrentWidget(self.views["dashboard"])
        
    def switch_view(self, view_name):
        """Switch the main content view."""
        self.content_stack.setCurrentWidget(self.views[view_name])
        
    def update_sync_status(self, is_synced):
        """Update the sync status indicator."""
        if is_synced:
            self.sync_status.setText("✓ Synced")
            self.sync_status.setStyleSheet("color: #A5D6A7; padding: 10px;")
        else:
            self.sync_status.setText("⟳ Syncing...")
            self.sync_status.setStyleSheet("color: #FFE082; padding: 10px;")
