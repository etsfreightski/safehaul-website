from PyQt6.QtWidgets import (QWidget, QVBoxLayout, QHBoxLayout, QLabel, 
                               QFrame, QTableWidget, QTableWidgetItem)
from PyQt6.QtCore import Qt
from PyQt6.QtGui import QPainter, QColor, QPen
from ..db.connection import DatabaseConnection
import pandas as pd

class StatCard(QFrame):
    def __init__(self, title, value, color="#1976D2"):
        super().__init__()
        self.setStyleSheet(f"""
            QFrame {{
                background-color: white;
                border-radius: 8px;
                padding: 15px;
                min-width: 200px;
            }}
            QLabel {{
                color: {color};
            }}
        """)
        
        layout = QVBoxLayout(self)
        
        value_label = QLabel(str(value))
        value_label.setStyleSheet("font-size: 24px; font-weight: bold;")
        layout.addWidget(value_label)
        
        title_label = QLabel(title)
        title_label.setStyleSheet("font-size: 14px;")
        layout.addWidget(title_label)

class DashboardWidget(QWidget):
    def __init__(self):
        super().__init__()
        self.db = DatabaseConnection()
        self.setup_ui()
        
    def setup_ui(self):
        """Set up the dashboard UI."""
        layout = QVBoxLayout(self)
        layout.setSpacing(20)
        
        # Stats cards
        stats_layout = QHBoxLayout()
        stats_layout.setSpacing(15)
        
        self.active_claims_card = StatCard("Active Claims", "0")
        self.total_reserves_card = StatCard("Total Reserves", "$0", "#4CAF50")
        self.pending_tasks_card = StatCard("Pending Tasks", "0", "#FF9800")
        self.overdue_tasks_card = StatCard("Overdue Tasks", "0", "#F44336")
        
        stats_layout.addWidget(self.active_claims_card)
        stats_layout.addWidget(self.total_reserves_card)
        stats_layout.addWidget(self.pending_tasks_card)
        stats_layout.addWidget(self.overdue_tasks_card)
        stats_layout.addStretch()
        
        layout.addLayout(stats_layout)
        
        # Recent claims and tasks
        bottom_layout = QHBoxLayout()
        
        # Recent claims
        recent_claims_frame = QFrame()
        recent_claims_frame.setStyleSheet("""
            QFrame {
                background-color: white;
                border-radius: 8px;
                padding: 15px;
            }
            QLabel {
                font-size: 16px;
                font-weight: bold;
            }
        """)
        recent_claims_layout = QVBoxLayout(recent_claims_frame)
        recent_claims_layout.addWidget(QLabel("Recent Claims"))
        
        self.recent_claims_table = QTableWidget()
        self.recent_claims_table.setColumnCount(4)
        self.recent_claims_table.setHorizontalHeaderLabels([
            "Claim Number", "Date", "Status", "Description"
        ])
        self.recent_claims_table.horizontalHeader().setStretchLastSection(True)
        self.recent_claims_table.setStyleSheet("""
            QTableWidget {
                border: none;
            }
            QHeaderView::section {
                background-color: #E3F2FD;
                padding: 8px;
                border: none;
                font-weight: bold;
            }
        """)
        recent_claims_layout.addWidget(self.recent_claims_table)
        
        # Recent tasks
        recent_tasks_frame = QFrame()
        recent_tasks_frame.setStyleSheet("""
            QFrame {
                background-color: white;
                border-radius: 8px;
                padding: 15px;
            }
            QLabel {
                font-size: 16px;
                font-weight: bold;
            }
        """)
        recent_tasks_layout = QVBoxLayout(recent_tasks_frame)
        recent_tasks_layout.addWidget(QLabel("Pending Tasks"))
        
        self.recent_tasks_table = QTableWidget()
        self.recent_tasks_table.setColumnCount(4)
        self.recent_tasks_table.setHorizontalHeaderLabels([
            "Task", "Due Date", "Claim", "Priority"
        ])
        self.recent_tasks_table.horizontalHeader().setStretchLastSection(True)
        self.recent_tasks_table.setStyleSheet("""
            QTableWidget {
                border: none;
            }
            QHeaderView::section {
                background-color: #E3F2FD;
                padding: 8px;
                border: none;
                font-weight: bold;
            }
        """)
        recent_tasks_layout.addWidget(self.recent_tasks_table)
        
        bottom_layout.addWidget(recent_claims_frame)
        bottom_layout.addWidget(recent_tasks_frame)
        
        layout.addLayout(bottom_layout)
        
        # Initial load
        self.load_dashboard_data()
        
    def load_dashboard_data(self):
        """Load data for dashboard display."""
        with self.db.get_session() as session:
            # Load stats
            active_claims = session.query(Claim).filter(
                Claim.status.in_(['New', 'In Progress', 'Pending'])
            ).count()
            
            total_reserves = session.query(func.sum(Claim.reserve_amount)).scalar() or 0
            
            # Update stat cards
            self.active_claims_card.findChild(QLabel).setText(str(active_claims))
            self.total_reserves_card.findChild(QLabel).setText(f"${total_reserves:,.2f}")
            
            # Load recent claims
            recent_claims = session.query(Claim).order_by(Claim.date_created.desc()).limit(5).all()
            self.recent_claims_table.setRowCount(len(recent_claims))
            
            for row, claim in enumerate(recent_claims):
                self.recent_claims_table.setItem(row, 0, QTableWidgetItem(claim.claim_number))
                self.recent_claims_table.setItem(row, 1, QTableWidgetItem(
                    claim.date_created.strftime("%Y-%m-%d")))
                self.recent_claims_table.setItem(row, 2, QTableWidgetItem(claim.status))
                self.recent_claims_table.setItem(row, 3, QTableWidgetItem(
                    claim.incident_description[:50] + "..." if claim.incident_description else ""))
                
            # TODO: Load tasks when task system is implemented
