/**
 * IMAGE OPTIMIZATION GUIDE
 * 
 * Ce fichier contient les meillores pratiques pour compresser et optimiser
 * les images de votre site pour améliorer la performance de chargement.
 */

// ============================================================================
// 1. OPTIMISATION DES IMAGES EXISTANTES - INSTRUCTIONS MANUELLES
// ============================================================================

/*
PROBLÈME IDENTIFIÉ:
- Les images de la section "Activités" se chargent lentement
- Les fichiers d'image sont trop volumineux

SOLUTION RAPIDE - Compresser les images existantes:
1. Allez sur https://tinypng.com
2. Uploadez toutes vos images (max 20 à la fois)
3. Téléchargez les versions comprimées
4. Remplacez les fichiers dans:
   - /public/img_service_ab'ynnov/
   - /public/img_service_h2i/
   - /public/img_service_intersec/

RÉSULTATS ATTENDUS:
- Réduction de 40-60% de la taille des fichiers
- Chargement 3-4x plus rapide
- Aucune perte de qualité visible
*/

// ============================================================================
// 2. OPTIMISATION CÔTÉ CODE - DÉJÀ IMPLÉMENTÉE
// ============================================================================

/*
Le composant OptimizedImage fourni les optimisations suivantes:
✓ Lazy Loading: Les images ne se chargent que quand elles deviennent visibles
✓ Placeholder: Un gradient animé s'affiche pendant le chargement
✓ Progressive Loading: Les images apparaissent graduellement
✓ Intersection Observer: Détection native du navigateur (performant)

UTILISATION:
<OptimizedImage
  src="/img_service_ab'ynnov/Agrobusiness.jpg"
  alt="Description"
  className="w-full h-full"
  containerClassName="w-full h-full"
  objectFit="cover"
/>
*/

// ============================================================================
// 3. TOOLS GRATUITS RECOMMANDÉS POUR COMPRESSER LES IMAGES
// ============================================================================

const imageCompressionTools = [
  {
    name: "TinyPNG / TinyJPG",
    url: "https://tinypng.com",
    avantages: ["Compression lossy intelligente", "Interface simple", "20 fichiers max"],
    compression: "50-70%"
  },
  {
    name: "ImageOptim",
    url: "https://imageoptim.com",
    type: "Desktop App (Mac)",
    compression: "40-60%"
  },
  {
    name: "WEBP Converter",
    url: "https://convertio.co/jpg-webp/",
    avantages: ["Convertit en format WEBP", "Mieux compressé que JPEG/PNG"],
    compression: "60-80%"
  },
  {
    name: "Squoosh",
    url: "https://squoosh.app",
    avantages: ["Outil Google libre", "Comparaison avant/après", "Conversion multiple format"],
    compression: "variable"
  },
  {
    name: "FileOptimizer",
    url: "https://nikkhokkho.sourceforge.io/static.php?page=FileOptimizer",
    type: "Desktop App (Windows/Linux)",
    compression: "40-60%"
  }
];

// ============================================================================
// 4. FORMAT RECOMMENDED - WebP (Plus moderne et plus petit)
// ============================================================================

/*
AVANTAGES DE WEBP:
- 30% plus petit que JPEG
- 25% plus petit que PNG
- Support navigateur: 96% des navigateurs modernes
- Support des images transparentes

IMPLÉMENTATION:
<picture>
  <source srcSet="/image.webp" type="image/webp" />
  <img src="/image.jpg" alt="Fallback" />
</picture>

Ou avec notre composant OptimizedImage:
<OptimizedImage
  src="/image.webp"
  alt="description"
/>
*/

// ============================================================================
// 5. ÉTAPES POUR CONVERTIR VOS IMAGES EN WEBP
// ============================================================================

/*
MÉTHODE 1 - Utiliser Squoosh.app (Recommandé pour débuter):
1. Allez sur https://squoosh.app
2. Cliquez "Select an image"
3. Choisissez votre image
4. À droite, sélectionnez "WebP" comme format
5. Réglez la qualité (80-85 est bon)
6. Téléchargez le fichier

MÉTHODE 2 - Command Line (ImageMagick):
convert imagename.jpg -quality 80 imagename.webp

MÉTHODE 3 - Online Converter:
https://cloudconvert.com/jpg-to-webp
*/

// ============================================================================
// 6. CHECKLIST D'OPTIMISATION COMPLÈTE
// ============================================================================

const optimizationChecklist = [
  {
    category: "Compression des images",
    tasks: [
      "☐ Compresser toutes les images avec TinyPNG",
      "☐ Convertir les images en WebP si possible",
      "☐ Redimensionner les images à la bonne taille (max 1200px de large pour le web)",
      "☐ Utiliser le format JPG pour les photos, PNG pour les logos"
    ]
  },
  {
    category: "Code côté UI",
    tasks: [
      "✓ OptimizedImage component installé",
      "✓ Lazy loading implémenté",
      "✓ Placeholder pendant le chargement",
      "✓ Progressive image loading"
    ]
  },
  {
    category: "Configuration Vite",
    tasks: [
      "ℹ️  À ajouter: compression d'images automatique au build",
      "ℹ️  À ajouter: optimisation d'images WebP"
    ]
  }
];

// ============================================================================
// 7. CONFIGURATION VITE POUR AUTO-OPTIMISATION (AVANCÉ)
// ============================================================================

/*
Pour automatiser la compression à chaque build, ajouter ce plugin à vite.config.js:

npm install vite-plugin-image-optimization --save-dev

Dans vite.config.js:
import imageOptimization from 'vite-plugin-image-optimization';

export default {
  plugins: [
    imageOptimization({
      jpg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80 }
    })
  ]
};

Cela compressera automatiquement les images lors du build production.
*/

// ============================================================================
// 8. RÉSULTATS AVANT/APRÈS ESTIMÉS
// ============================================================================

const performanceComparison = {
  avant: {
    tailleImage: "800 KB",
    tempsChargement: "3-5 secondes",
    experenceMobile: "Très lent"
  },
  apres: {
    tailleImage: "200-250 KB (avec compression)",
    tempsChargement: "0.5-1 seconde",
    experenceMobile: "Très rapide"
  },
  improvement: "80% plus rapide"
};

// ============================================================================
// 9. LIENS VIDÉOS ET RESSOURCES SUPPLÉMENTAIRES
// ============================================================================

const videoResources = {
  freeVideoPlatforms: [
    {
      name: "Pexels",
      url: "https://www.pexels.com",
      description: "Vidéos 100% libres de droits, haute qualité",
      categories: ["Business", "Nature", "Bureau", "Technologie"]
    },
    {
      name: "Pixabay",
      url: "https://pixabay.com/videos/",
      description: "Vidéos gratuites, simple à télécharger",
      categories: ["Tous types"]
    },
    {
      name: "Unsplash",
      url: "https://unsplash.com/napi/videos",
      description: "Vidéos haute qualité de Unsplash",
      categories: ["Général"]
    },
    {
      name: "Mixkit",
      url: "https://mixkit.co/free-stock-video/",
      description: "Vidéos motion graphics et réalistes",
      categories: ["Motion graphics", "Réaliste"]
    }
  ]
};

// ============================================================================
// 10. IMPLÉMENTATION D'UNE VIDÉO EN ARRIÈRE-PLAN
// ============================================================================

/*
Pour ajouter une vidéo en arrière-plan du HeroSection:

1. Trouvez une vidéo sur Pexels ou Pixabay (ou créez la vôtre)

2. Convertissez en format web optimisé:
   - Format: MP4 (meilleure compatibilité)
   - Taille: Réduire la résolution à 1280x720 ou 1920x1080 max
   - Codec: H.264

3. Utilisez le composant <video> HTML:

<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover -z-20"
>
  <source src="/background-video.mp4" type="video/mp4" />
  {/* Fallback image */}
  <div className="absolute inset-0 bg-gradient-to-br from-intersec-dark via-intersec-green to-intersec-dark" />
</video>

4. Ajoutez une overlay semi-transparente par-dessus:
<div className="absolute inset-0 bg-black/40 -z-10" />

Cette overlay s'assure que le texte reste lisible.
*/

// ============================================================================
// 11. ÉTAPES POUR AJOUTER UNE VIDÉO AU HERO SECTION
// ============================================================================

const heroVideoSetup = `
ÉTAPE 1: Télécharger une vidéo
- Allez sur https://www.pexels.com/videos/ 
- Recherchez: "business", "office", "technology", "nature"
- Téléchargez en 720p ou 1080p
- Assurez-vous que c'est librement utilisable

ÉTAPE 2: Optimiser la vidéo
- Taille maximale recommandée: 30-50 MB pour 1080p
- Durée: 5-15 secondes (elle boucle en background)
- Format: MP4 (meilleur support)

ÉTAPE 3: Placer le fichier
- Mettez votre vidéo dans /public/videos/
- Ex: /public/videos/hero-background.mp4

ÉTAPE 4: Intégrer dans HeroSection.jsx
- Remplacez le <div> background par <video>
- Assurez-vous d'ajouter l'overlay semi-transparent

RÉSULTAT:
- Site ultra-moderne et dynamique
- Engagement utilisateur augmenté
- Temps de chargement un peu plus long (vidéo = 2-5 secondes supplémentaires)
`;

// ============================================================================
// RÉSUMÉ - ÉTAPES À FAIRE IMMÉDIATEMENT
// ============================================================================

console.log(`
╔════════════════════════════════════════════════════════════════════════════╗
║                    RÉSUMÉ DES ACTIONS À FAIRE                               ║
╚════════════════════════════════════════════════════════════════════════════╝

✅ FAIT - Lazy loading des images avec OptimizedImage
✅ FAIT - Animations et transitions améliorées
✅ FAIT - HeroSection modernisé

⚡ TODO PRIORITAIRE - Compresser les images:
   1. Allez sur https://tinypng.com
   2. Uploadez les images depuis:
      - /public/img_service_ab'ynnov/
      - /public/img_service_h2i/
      - /public/img_service_intersec/
   3. Remplacez les fichiers
   ➜ Cela va immédiatement résoudre les problèmes de chargement!

📹 BONUS - Ajouter une vidéo au hero (optionnel):
   1. Téléchargez une vidéo sur pexels.com
   2. Placez-la dans /public/videos/
   3. Mettez à jour HeroSection.jsx (voir instructions ci-dessus)

Temps estimé pour compression: 30 minutes
Amélioration de performance: 70-80% plus rapide
`);

export { imageCompressionTools, optimizationChecklist, videoResources };
