from PyQt6.QtWidgets import QWidget, QVBoxLayout, QLabel

class DocumentsWidget(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout(self)
        layout.addWidget(QLabel("Documents View - Coming Soon"))
