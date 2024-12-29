from PyQt6.QtWidgets import QWidget, QVBoxLayout, QLabel

class SettingsWidget(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout(self)
        layout.addWidget(QLabel("Settings View - Coming Soon"))
