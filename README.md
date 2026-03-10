# INTERSEC Group Website

Site web institutionnel moderne et professionnel pour le Groupe INTERSEC.

## 🚀 Caractéristiques

- **Design Modern & Responsive** - Optimisé pour desktop, tablette et mobile
- **React 18** avec Vite pour un développement rapide
- **Tailwind CSS** pour un styling élégant et maintainable
- **Framer Motion** pour des animations fluides et modernes
- **Lucide React** pour des icônes modernes
- **PocketBase** pour la gestion des données (contacts, partenariats)

## 📋 Pages

- **Accueil** - Présentation du groupe avec sections animées
- **À propos** - Historique, mission, vision et valeurs
- **Services** - Liste complète des 8 services principaux
- **Filiales** - Détails sur AB'YNNOV et H2i
- **Projets** - Vision stratégique (immobilier, commerce, agrobusiness, transport)
- **Partenariats** - Formulaire et opportunités de partenariat
- **Contact** - Formulaire de contact et informations

## 🛠️ Installation

### Prérequis
- Node.js 16+
- npm ou yarn

### Étapes

```bash
# Cloner ou extraire le projet
cd intersec-group-website

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Aperçu de la production
npm run preview
```

## 📦 Dépendances principales

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "framer-motion": "^10.16.16",
  "lucide-react": "^0.292.0",
  "axios": "^1.6.2",
  "pocketbase": "^0.20.3",
  "tailwindcss": "^3.4.1"
}
```

## 🎨 Couleurs du Thème

- **INTERSEC Green**: #228b22 (Couleur principale)
- **INTERSEC Dark**: #1a472a (Couleur sombre)
- **INTERSEC Light**: #f0f4f0 (Couleur claire)
- **AB'YNNOV Blue**: #3498db
- **H2i Dark**: #2c3e50

## 📱 Responsive Design

Le site est complètement responsive grâce à Tailwind CSS:
- **Mobile** - Optimisé pour écrans < 640px
- **Tablet** - Optimisé pour écrans 640px - 1024px
- **Desktop** - Optimisé pour écrans > 1024px

## 🗄️ Configuration PocketBase

### Collections requis

#### contacts
```
- name (text)
- email (email)
- subject (text)
- message (text)
- created (datetime)
```

#### partnership_requests
```
- name (text)
- company (text)
- email (email)
- phone (text)
- partnership_type (select)
- message (text)
- created (datetime)
```

## 📝 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── ServicesSection.jsx
│   ├── FilialesSection.jsx
│   ├── PartnersSection.jsx
│   └── ContactForm.jsx
├── pages/              # Pages principales
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Filiales.jsx
│   ├── Projects.jsx
│   ├── Partnership.jsx
│   └── Contact.jsx
├── layout/             # Layouts
│   └── MainLayout.jsx
├── services/           # Services API
│   ├── pocketbase.js
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css

public/                 # Assets statiques
```

## 🚀 Déploiement

### Préparation
1. Build la production: `npm run build`
2. Vérifier le dossier `dist/`

### Options de déploiement

- **Vercel** - Recommandé pour React
- **Netlify** - Alternative populaire
- **GitHub Pages** - Pour projets simples
- **Docker** - Pour déploiement serveur custom

## ⚙️ Configuration Vite

Le projet utilise Vite pour une compilation rapide:
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

## 🎯 Optimisations

- Lazy loading des images
- Code splitting automatique
- Minification du CSS/JS
- Compression des assets
- Caching optimisé

## 📧 Contact

Pour des questions sur le site:
- Email: info@intersec.ml
- Localisation: Mali, Afrique

## 📄 Licence

Tous droits réservés © 2026 INTERSEC Group

---

**Version**: 1.0.0
**Créé**: 2026
**Dernière mise à jour**: 5 mars 2026
