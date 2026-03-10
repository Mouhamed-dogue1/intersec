# 🚀 Démarrage Rapide - INTERSEC Website

## 5 minutes pour démarrer

### 1️⃣ Installation des dépendances
```bash
cd intersec-group-website
npm install
```

### 2️⃣ Démarrer le serveur de développement
```bash
npm run dev
```
Le site s'ouvrira automatiquement sur `http://localhost:3000`

### 3️⃣ Configuration PocketBase (optionnel mais recommandé)
```bash
# Télécharger depuis: https://pocketbase.io
./pocketbase serve
# Admin UI: http://localhost:8090/_/
```

Puis créer les collections comme indiqué dans `SETUP_GUIDE.md`

---

## 📁 Structure Rapide

```
src/
├── components/      # 7 composants réutilisables
├── pages/          # 7 pages du site
├── services/       # Services API & PocketBase
├── layout/         # Layout principal
└── App.jsx         # Routeur principal
```

---

## 📄 Fichiers Importants

| Fichier | Description |
|---------|-------------|
| `SETUP_GUIDE.md` | Guide complet d'installation |
| `IMPROVEMENTS.md` | Feuille de route et améliorations |
| `POCKETBASE_CONFIG.js` | Schémas et config PocketBase |
| `PROJECT_SUMMARY.md` | Résumé complet du projet |
| `README.md` | Documentation principale |

---

## 🎨 Personnalisation

### Modifier les couleurs
Éditer `tailwind.config.js`, section `colors`

### Modifier le contenu
Chercher les arrays `services`, `filiales`, etc. dans les pages

### Ajouter des images
1. Placer dans `src/assets/images/`
2. Importer: `import img from '../assets/images/...'`
3. Utiliser dans le JSX

---

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev          # Serveur local (port 3000)

# Production
npm run build        # Build optimisé
npm run preview      # Aperçu production

# Linting
npm run lint         # Vérifier la qualité du code
```

---

## 📱 Responsive Design

Le site est 100% responsive:
- ✅ Mobile (< 640px)
- ✅ Tablet (640px - 1024px)
- ✅ Desktop (> 1024px)

Testez avec F12 (DevTools) → Responsive Design Mode

---

## 🎯 Pages du Site

1. **/** - Accueil
2. **/about** - À propos
3. **/services** - Services
4. **/filiales** - Filiales
5. **/projects** - Projets
6. **/partnership** - Partenariat
7. **/contact** - Contact

---

## 🌟 Caractéristiques Principales

✅ **Design moderne** avec Tailwind CSS
✅ **Animations fluides** avec Framer Motion
✅ **Navigation fluide** avec React Router
✅ **Formulaires smartes** avec validation
✅ **Intégration PocketBase** pour données
✅ **Icônes modernes** avec Lucide React
✅ **100% Responsive** mobile-first
✅ **Dark-mode ready** (à ajouter)

---

## 🐛 Troubleshooting

### "Module not found" error?
```bash
# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### PocketBase ne répond pas?
```bash
# Vérifier que PocketBase est lancé et sur le bon port
# http://localhost:8090
# Vérifier les variables d'env dans .env.local
```

### Port 3000 déjà utilisé?
```bash
# Vite utilisera le port suivant automatiquement
# Ou modifier dans vite.config.js: port: 3001
```

---

## 📚 Documentation Complète

Pour plus de détails:
- 📖 `README.md` - Documentation complète
- 🛠️ `SETUP_GUIDE.md` - Guide installation complet
- 📋 `POCKETBASE_CONFIG.js` - Configuration base de données
- 🚀 `IMPROVEMENTS.md` - Feuille de route futures
- 📊 `PROJECT_SUMMARY.md` - Résumé complet du projet

---

## 🚀 Déploiement Rapide

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Push sur GitHub
2. Connecter à Netlify
3. Build: `npm run build`
4. Folder: `dist`

---

## ⚙️ Fichiers de Configuration

- `vite.config.js` - Build tool
- `tailwind.config.js` - Thème & couleurs
- `package.json` - Dépendances
- `.eslintrc.cjs` - Linting rules
- `.env.example` - Variables d'env

---

## 💡 Tips & Tricks

### Hot Module Replacement
Vite recharge automatiquement le code modifié pendant le dev

### Console Logs
Les erreurs s'affichent en temps réel dans la console du navigateur

### Device Testing
Tester sur mobile: `http://[YOUR_IP]:3000` depuis un autre appareil

### Performance
DevTools → Lighthouse pour tester la performance

---

## 🤝 Support

- Consultez la documentation fournie
- Vérifiez les erreurs dans la console
- Relisez les fichiers d'aide
- Google est votre ami ! 😄

---

## ✨ Prochaines Étapes Recommandées

1. [ ] Installer et tester le projet
2. [ ] Configurer PocketBase
3. [ ] Tester les formulaires
4. [ ] Ajouter vos images et logos
5. [ ] Personnaliser le contenu
6. [ ] Tester sur mobile
7. [ ] Optimiser pour SEO
8. [ ] Déployer en production

---

**Besoin d'aide?**
Consultez `SETUP_GUIDE.md` ou `PROJECT_SUMMARY.md`

**Bon développement! 🎉**

---
Créé le: 5 mars 2026
Version: 1.0.0
