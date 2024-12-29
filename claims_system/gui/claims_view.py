from PyQt6.QtWidgets import (QWidget, QVBoxLayout, QHBoxLayout, QTableWidget,
                               QTableWidgetItem, QPushButton, QLineEdit, QComboBox,
                               QLabel, QFrame, QDialog, QFormLayout, QDateEdit,
                               QTextEdit, QSpinBox, QDoubleSpinBox, QMessageBox)
from PyQt6.QtCore import Qt, QDate
from PyQt6.QtGui import QColor
from ..db.connection import DatabaseConnection
from ..models.claim import Claim
from datetime import datetime

class ClaimsWidget(QWidget):
    def __init__(self):
        super().__init__()
        self.db = DatabaseConnection()
        self.setup_ui()
        
    def setup_ui(self):
        """Set up the claims view UI."""
        layout = QVBoxLayout(self)
        layout.setSpacing(10)
        
        # Header area
        header = QFrame()
        header.setStyleSheet("background-color: white; border-radius: 5px;")
        header_layout = QHBoxLayout(header)
        
        # Search bar
        self.search_bar = QLineEdit()
        self.search_bar.setPlaceholderText("Search claims...")
        self.search_bar.setStyleSheet("""
            QLineEdit {
                padding: 8px;
                border: 1px solid #BDBDBD;
                border-radius: 4px;
                background-color: #F5F5F5;
            }
        """)
        header_layout.addWidget(self.search_bar)
        
        # Filters
        self.status_filter = QComboBox()
        self.status_filter.addItems(["All Status", "New", "In Progress", "Pending", "Closed"])
        self.status_filter.setStyleSheet("""
            QComboBox {
                padding: 8px;
                border: 1px solid #BDBDBD;
                border-radius: 4px;
                background-color: white;
            }
        """)
        header_layout.addWidget(self.status_filter)
        
        # New Claim button
        new_claim_btn = QPushButton("New Claim")
        new_claim_btn.setStyleSheet("""
            QPushButton {
                background-color: #1976D2;
                color: white;
                padding: 8px 16px;
                border-radius: 4px;
                font-weight: bold;
            }
            QPushButton:hover {
                background-color: #1565C0;
            }
        """)
        new_claim_btn.clicked.connect(self.show_new_claim_dialog)
        header_layout.addWidget(new_claim_btn)
        
        layout.addWidget(header)
        
        # Claims table
        self.claims_table = QTableWidget()
        self.claims_table.setColumnCount(7)
        self.claims_table.setHorizontalHeaderLabels([
            "Claim Number", "Date of Loss", "Status", "Claimant",
            "Insurance Company", "Reserve", "Last Updated"
        ])
        self.claims_table.setStyleSheet("""
            QTableWidget {
                background-color: white;
                border: none;
                border-radius: 5px;
            }
            QHeaderView::section {
                background-color: #E3F2FD;
                padding: 8px;
                border: none;
                font-weight: bold;
            }
        """)
        self.claims_table.horizontalHeader().setStretchLastSection(True)
        self.claims_table.verticalHeader().setVisible(False)
        self.claims_table.setSelectionBehavior(QTableWidget.SelectionBehavior.SelectRows)
        self.claims_table.doubleClicked.connect(self.open_claim_details)
        
        layout.addWidget(self.claims_table)
        
        # Connect signals
        self.search_bar.textChanged.connect(self.filter_claims)
        self.status_filter.currentTextChanged.connect(self.filter_claims)
        
        # Initial load
        self.load_claims()
        
    def load_claims(self):
        """Load claims from database into table."""
        with self.db.get_session() as session:
            claims = session.query(Claim).all()
            self.claims_table.setRowCount(len(claims))
            
            for row, claim in enumerate(claims):
                self.claims_table.setItem(row, 0, QTableWidgetItem(claim.claim_number))
                self.claims_table.setItem(row, 1, QTableWidgetItem(claim.date_of_loss.strftime("%Y-%m-%d")))
                self.claims_table.setItem(row, 2, QTableWidgetItem(claim.status))
                self.claims_table.setItem(row, 3, QTableWidgetItem(claim.claimant.name if claim.claimant else ""))
                self.claims_table.setItem(row, 4, QTableWidgetItem(claim.insurance_company))
                self.claims_table.setItem(row, 5, QTableWidgetItem(f"${claim.reserve_amount:,.2f}"))
                self.claims_table.setItem(row, 6, QTableWidgetItem(claim.date_modified.strftime("%Y-%m-%d %H:%M")))
                
                # Color coding based on status
                status_colors = {
                    "New": "#E3F2FD",
                    "In Progress": "#FFF3E0",
                    "Pending": "#FCE4EC",
                    "Closed": "#E8F5E9"
                }
                if claim.status in status_colors:
                    color = QColor(status_colors[claim.status])
                    for col in range(self.claims_table.columnCount()):
                        self.claims_table.item(row, col).setBackground(color)
    
    def filter_claims(self):
        """Filter claims based on search text and status."""
        search_text = self.search_bar.text().lower()
        status_filter = self.status_filter.currentText()
        
        for row in range(self.claims_table.rowCount()):
            show_row = True
            
            # Check if row matches search text
            if search_text:
                row_text = " ".join(
                    self.claims_table.item(row, col).text().lower()
                    for col in range(self.claims_table.columnCount())
                )
                show_row = search_text in row_text
            
            # Check if row matches status filter
            if status_filter != "All Status":
                status = self.claims_table.item(row, 2).text()
                show_row = show_row and status == status_filter
            
            self.claims_table.setRowHidden(row, not show_row)
    
    def show_new_claim_dialog(self):
        """Show dialog for creating a new claim."""
        dialog = NewClaimDialog(self)
        if dialog.exec() == QDialog.DialogCode.Accepted:
            self.load_claims()
    
    def open_claim_details(self, index):
        """Open detailed view of selected claim."""
        claim_number = self.claims_table.item(index.row(), 0).text()
        dialog = ClaimDetailsDialog(claim_number, self)
        if dialog.exec() == QDialog.DialogCode.Accepted:
            self.load_claims()

class NewClaimDialog(QDialog):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.db = DatabaseConnection()
        self.setup_ui()
        
    def setup_ui(self):
        """Set up the new claim dialog UI."""
        self.setWindowTitle("New Claim")
        self.setMinimumWidth(500)
        
        layout = QFormLayout(self)
        layout.setSpacing(10)
        
        # Date of Loss
        self.date_of_loss = QDateEdit()
        self.date_of_loss.setCalendarPopup(True)
        self.date_of_loss.setDate(QDate.currentDate())
        layout.addRow("Date of Loss:", self.date_of_loss)
        
        # Insurance Company
        self.insurance_company = QLineEdit()
        layout.addRow("Insurance Company:", self.insurance_company)
        
        # Policy Number
        self.policy_number = QLineEdit()
        layout.addRow("Policy Number:", self.policy_number)
        
        # Claimant Name
        self.claimant_name = QLineEdit()
        layout.addRow("Claimant Name:", self.claimant_name)
        
        # Incident Description
        self.description = QTextEdit()
        layout.addRow("Description:", self.description)
        
        # Buttons
        button_box = QHBoxLayout()
        save_btn = QPushButton("Save")
        save_btn.clicked.connect(self.save_claim)
        cancel_btn = QPushButton("Cancel")
        cancel_btn.clicked.connect(self.reject)
        
        button_box.addWidget(save_btn)
        button_box.addWidget(cancel_btn)
        layout.addRow("", button_box)
        
    def save_claim(self):
        """Save the new claim to database."""
        try:
            with self.db.get_session() as session:
                claim = Claim(
                    date_of_loss=self.date_of_loss.date().toPyDate(),
                    insurance_company=self.insurance_company.text(),
                    policy_number=self.policy_number.text(),
                    incident_description=self.description.toPlainText(),
                    status="New"
                )
                session.add(claim)
                session.commit()
            
            self.accept()
            
        except Exception as e:
            QMessageBox.critical(self, "Error", f"Failed to save claim: {str(e)}")

class ClaimDetailsDialog(QDialog):
    def __init__(self, claim_number, parent=None):
        super().__init__(parent)
        self.db = DatabaseConnection()
        self.claim_number = claim_number
        self.setup_ui()
        self.load_claim_data()
        
    def setup_ui(self):
        """Set up the claim details dialog UI."""
        # Implementation of detailed claim view
        pass
