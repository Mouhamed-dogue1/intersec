# Guide de Configuration - INTERSEC Website

## 1. Installation et démarrage rapide

### Étape 1: Installer les dépendances
```bash
cd intersec-group-website
npm install
```

### Étape 2: Démarrer le serveur de développement
```bash
npm run dev
```
Le site s'ouvrira automatiquement à `http://localhost:3000`

### Étape 3: Build pour la production
```bash
npm run build
npm run preview
```

## 2. Configuration PocketBase

### Installation de PocketBase

1. Télécharger PocketBase depuis [pocketbase.io](https://pocketbase.io)
2. Extraire l'archive
3. Lancer le serveur: `./pocketbase serve`
4. Accéder à l'Admin UI: `http://localhost:8090/_/`

### Créer les Collections

#### Collection: contacts

1. Dans l'Admin UI, cliquer sur "Collections"
2. Créer une nouvelle collection "contacts"
3. Ajouter les champs suivants:

| Field Name | Type | Settings |
|-----------|------|----------|
| name | Text | Required |
| email | Email | Required |
| subject | Text | Required |
| message | Text | Required |
| created | DateTime | Auto (système) |

#### Collection: partnership_requests

1. Créer une nouvelle collection "partnership_requests"
2. Ajouter les champs suivants:

| Field Name | Type | Settings |
|-----------|------|----------|
| name | Text | Required |
| company | Text | Required |
| email | Email | Required |
| phone | Text | Required |
| partnership_type | Select | Options: investor, supplier, distributor, collaborator, other |
| message | Text | Required |
| created | DateTime | Auto (système) |

## 3. Variables d'Environnement

Créer un fichier `.env.local` à la racine:

```env
VITE_APP_API_URL=http://localhost:8090/api
VITE_APP_POCKETBASE_URL=http://localhost:8090
```

## 4. Architecture du Projet

### Composants Principaux

**Navbar.jsx**
- Navigation fixe en haut
- Menu responsive
- Changement de style au scroll

**HeroSection.jsx**
- Section principale avec animations
- Call-to-action buttons
- Scroll indicator

**ServicesSection.jsx**
- Grille de 8 services
- Cartes avec animation hover
- Icônes Lucide React

**FilialesSection.jsx**
- Présentation des deux filiales
- Colors distinctes
- Domaines d'activités

**ContactForm.jsx**
- Formulaire réutilisable
- Gestion d'erreurs
- Intégration PocketBase
- Messages de succès/erreur

### Pages

- **Home.jsx** - Page d'accueil complète
- **About.jsx** - À propos du groupe
- **Services.jsx** - Détail de chaque service
- **Filiales.jsx** - Détails des filiales
- **Projects.jsx** - Projets stratégiques
- **Partnership.jsx** - Opportunités de partenariat
- **Contact.jsx** - Page de contact

## 5. Personnalisation

### Modifier les Couleurs

Éditer `tailwind.config.js`:

```javascript
colors: {
  intersec: {
    dark: '#1a472a',    // Modifier ici
    green: '#228b22',   // Et ici
    light: '#f0f4f0'    // Et ici
  }
}
```

### Modifier le Contenu

Tous les textes et contenu sont directement dans les composants React.

Exemples:
- Services: `src/pages/Services.jsx` (array `services`)
- Filiales: `src/pages/Filiales.jsx` (array `filiales`)
- Contact info: `src/pages/Contact.jsx` (array `contactInfo`)

### Ajouter des Images

Placer les images dans `src/assets/images/` et les importer:

```javascript
import logo from '../assets/images/logo.png'
```

## 6. Animations

Le site utilise **Framer Motion** pour les animations.

Exemples:
```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Contenu
</motion.div>
```

### Types d'animations utilisées:

- `fadeIn` - Fondu d'apparition
- `slideUp` - Glissement vers le haut
- `scaleIn` - Agrandissement depuis petit
- `whileHover` - Animation au survol
- `whileInView` - Animation à l'entrée en vue

## 7. Responsive Design

Le site est 100% responsive avec Tailwind:

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

Utiliser les préfixes Tailwind:
```html
<!-- Mobile: flex-col, Tablet+: flex-row -->
<div class="flex flex-col md:flex-row">
```

## 8. SEO - Optimisations

### Méta Tags
Éditer dans `index.html`:
```html
<meta name="description" content="Description pour les moteurs de recherche" />
<meta name="keywords" content="mot-clé1, mot-clé2" />
```

### Structure Heading
S'assurer que les `<h1>`, `<h2>`, `<h3>` sont correctement hiérarchisés.

### URLs et Sitemap
Considérer d'ajouter un `sitemap.xml` et `robots.txt`.

## 9. Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Netlify

1. Pousser le code sur GitHub
2. Connecter le repo à Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 10. Performance

### Optimisations intégrées:

- Code splitting automatique par Vite
- Tree-shaking des dépendances inutilisées
- Minification CSS/JS
- Lazy loading des images (avec suspense)

### Améliorer la performance:

1. Optimiser les images (WebP, compression)
2. Utiliser React.lazy() pour code splitting
3. Configurer cache headers sur le serveur
4. Utiliser un CDN pour les assets statiques

## 11. Troubleshooting

### Le site ne se charge pas
- Vérifier que `npm run dev` fonctionne
- Vérifier les erreurs dans la console
- Vérifier les imports de chemins

### PocketBase ne répond pas
- S'assurer que PocketBase est démarré: `./pocketbase serve`
- Vérifier l'URL: `http://localhost:8090`
- Vérifier les données VITE_APP_* dans `.env.local`

### Erreurs de style
- Vérifier que Tailwind CSS est chargé
- Vérifier que le `index.css` est importé dans `main.jsx`
- Faire un rebuild: `npm run build`

## 12. Support et Améliorations Futures

### Fonctionnalités recommandées:

- [ ] Authentification utilisateur avec PocketBase
- [ ] Système de blog/actualités
- [ ] Galerie photos dynamique
- [ ] Intégration analytics (Google Analytics)
- [ ] Email automatiques pour les formulaires
- [ ] Dashboard admin pour gérer le contenu
- [ ] Multi-langue (i18n)
- [ ] Dark mode
- [ ] Newsletter subscription

---

**Questions ou problèmes?**
Consulter la documentation:
- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- PocketBase: https://pocketbase.io
