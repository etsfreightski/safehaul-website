from PyQt6.QtWidgets import QWidget, QVBoxLayout, QLabel

class ContactsWidget(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout(self)
        layout.addWidget(QLabel("Contacts View - Coming Soon"))
