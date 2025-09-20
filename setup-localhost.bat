@echo off
echo ================================================
echo    PAKAR GEARBOX SHAH ALAM - LOCALHOST SETUP
echo ================================================
echo.

echo Checking if XAMPP is installed...
if exist "C:\xampp\xampp-control.exe" (
    echo ✓ XAMPP found at C:\xampp\
    set XAMPP_PATH=C:\xampp
) else if exist "C:\Program Files\XAMPP\xampp-control.exe" (
    echo ✓ XAMPP found at C:\Program Files\XAMPP\
    set XAMPP_PATH=C:\Program Files\XAMPP
) else (
    echo ✗ XAMPP not found. Please install XAMPP first.
    echo Download from: https://www.apachefriends.org/
    pause
    exit /b 1
)

echo.
echo Starting XAMPP services...
start "" "%XAMPP_PATH%\xampp-control.exe"

echo.
echo Waiting for services to start...
timeout /t 5 /nobreak >nul

echo.
echo ================================================
echo Creating project directory...
echo ================================================

set PROJECT_DIR=%XAMPP_PATH%\htdocs\pakar-gearbox
if not exist "%PROJECT_DIR%" (
    mkdir "%PROJECT_DIR%"
    echo ✓ Created directory: %PROJECT_DIR%
) else (
    echo ✓ Directory already exists: %PROJECT_DIR%
)

echo.
echo ================================================
echo NEXT STEPS:
echo ================================================
echo.
echo 1. Download WordPress from https://wordpress.org/download/
echo 2. Extract WordPress files to: %PROJECT_DIR%
echo 3. Copy our theme files to: %PROJECT_DIR%\wp-content\themes\pakar-gearbox\
echo 4. Copy shah-alam-config.json to: %PROJECT_DIR%\
echo.
echo 5. Open your browser and go to: http://localhost/pakar-gearbox
echo 6. Follow WordPress installation wizard:
echo    - Database Name: pakar_gearbox_db
echo    - Username: root
echo    - Password: (leave blank)
echo    - Database Host: localhost
echo.
echo 7. After installation, activate the Pakar Gearbox theme
echo.

echo Opening browser in 3 seconds...
timeout /t 3 /nobreak >nul

start "" "http://localhost/pakar-gearbox"

echo.
echo Setup helper completed!
echo Check LOCALHOST_SETUP.md for detailed instructions.
echo.
pause
