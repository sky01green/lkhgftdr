@echo off
echo ========================================================
echo   Push Apology Experience for Suu to GitHub
echo ========================================================
echo.
set /p REPO_URL="Paste your GitHub repository URL (e.g. https://github.com/USERNAME/REPO.git): "
if "%REPO_URL%"=="" (
    echo Error: No repository URL entered.
    pause
    exit /b 1
)

echo.
echo Adding remote origin: %REPO_URL%
"C:\Users\HP\.gemini\antigravity-ide\scratch\mingit\cmd\git.exe" remote remove origin 2>nul
"C:\Users\HP\.gemini\antigravity-ide\scratch\mingit\cmd\git.exe" remote add origin %REPO_URL%
"C:\Users\HP\.gemini\antigravity-ide\scratch\mingit\cmd\git.exe" branch -M main

echo.
echo Pushing to GitHub...
"C:\Users\HP\.gemini\antigravity-ide\scratch\mingit\cmd\git.exe" push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================================
    echo  SUCCESS! Your code is now on GitHub!
    echo.
    echo  To enable GitHub Pages:
    echo  1. Go to your repo on GitHub: Settings -> Pages
    echo  2. Under 'Build and deployment' -> 'Source', select 'GitHub Actions'
    echo  3. Within 1-2 minutes, your website will be LIVE on the internet!
    echo ========================================================
) else (
    echo.
    echo Push failed. Please check your GitHub permissions or credentials.
)
echo.
pause
