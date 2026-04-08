@echo off
REM Script de démarrage PocketBase

echo.
echo ========================================
echo INTERSEC Website - PocketBase Server
echo ========================================
echo.

cd pocketbase
echo Démarrage de PocketBase...
echo Admin UI available at: http://localhost:8090/_/
echo.

pocketbase.exe serve

pause
