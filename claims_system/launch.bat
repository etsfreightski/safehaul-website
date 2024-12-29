@echo off
echo Starting Safe Haul Claims Management...
python simple_app.py
if errorlevel 1 (
    echo.
    echo Error running the application. Here's the full error message:
    python simple_app.py
    echo.
    echo Press any key to exit...
    pause >nul
)
