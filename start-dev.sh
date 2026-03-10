#!/bin/bash
# Script de démarrage pour le développement local

echo ""
echo "========================================"
echo "INTERSEC Website - Démarrage développement"
echo "========================================"
echo ""

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "Installation des dépendances..."
    npm install
    echo "Dépendances installées."
fi

echo ""
echo "Assurez-vous que PocketBase est installé et démarré:"
echo "  - Télécharger depuis: https://pocketbase.io"
echo "  - Lancer: ./pocketbase serve"
echo "  - Admin UI: http://localhost:8090/_/"
echo ""

echo "Démarrage du serveur de développement..."
echo "Le site s'ouvrira à: http://localhost:3000"
echo ""

npm run dev
