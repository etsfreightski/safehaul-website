from PyQt6.QtWidgets import QWidget, QVBoxLayout, QLabel

class ReportsWidget(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout(self)
        layout.addWidget(QLabel("Reports View - Coming Soon"))
