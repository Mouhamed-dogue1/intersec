import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Tag, Share2, Bookmark, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getFileUrl, postsService } from '../services/pocketbase';

const blogPosts = [
  {
    id: 1,
    title: "IPM et conformité : checklist performante pour 2026",
    excerpt: "Comment structurer votre rapport de conformité avant audit ministériel IPM. Guide complet avec modèles téléchargeables.",
    content: `
      <h2>Introduction à la conformité IPM</h2>
      <p>La conformité IPM est un pilier essentiel pour toute entreprise souhaitant offrir une protection sociale de qualité à ses salariés. Dans ce guide complet, nous vous proposons une checklist performante pour 2026.</p>

      <h3>1. Documents réglementaires obligatoires</h3>
      <ul>
        <li>Statuts de l'institut de prévoyance maladie</li>
        <li>Règlement intérieur approuvé par le ministère</li>
        <li>Convention collective applicable</li>
        <li>Accords d'entreprise spécifiques</li>
      </ul>

      <h3>2. Aspects financiers et comptables</h3>
      <p>La gestion financière doit être transparente avec des rapports trimestriels détaillés incluant :</p>
      <ul>
        <li>États des cotisations collectées</li>
        <li>Décompte des prestations versées</li>
        <li>Réserves constituées</li>
        <li>Rapports actuariels</li>
      </ul>

      <h3>3. Gouvernance et administration</h3>
      <p>Une gouvernance solide est garante de la pérennité du système IPM.</p>
    `,
    date: '10 avril 2026',
    readTime: '8 min',
    author: 'Dr. Marie KONE',
    category: 'IPM',
    tags: ['conformité', 'réglementation', 'audit'],
    image: '/api/placeholder/600/400',
    views: 1247
  },
  {
    id: 2,
    title: "Gestion des risques santé : 5 stratégies éprouvées",
    excerpt: "Stratégies pour réduire les jours d'arrêt et améliorer la prévention en entreprise. Cas pratiques et retours d'expérience.",
    content: `
      <h2>Comprendre les risques santé en entreprise</h2>
      <p>Les risques santé représentent un défi majeur pour les entreprises africaines. Notre analyse révèle que 65% des arrêts maladie sont liés à des pathologies évitables.</p>

      <h3>Stratégie 1 : La prévention primaire</h3>
      <p>Investir dans la prévention avant l'apparition des maladies :</p>
      <ul>
        <li>Campagnes de vaccination systématiques</li>
        <li>Dépistages précoces des pathologies chroniques</li>
        <li>Éducation nutritionnelle du personnel</li>
        <li>Aménagements ergonomiques des postes de travail</li>
      </ul>

      <h3>Stratégie 2 : Le suivi médical personnalisé</h3>
      <p>Chaque salarié doit bénéficier d'un suivi médical adapté à son profil :</p>
      <ul>
        <li>Bilans de santé annuels complets</li>
        <li>Suivi des facteurs de risque individuels</li>
        <li>Accompagnement des pathologies chroniques</li>
        <li>Conseils personnalisés de prévention</li>
      </ul>
    `,
    date: '28 mars 2026',
    readTime: '12 min',
    author: 'Pr. Amadou DIOP',
    category: 'Santé',
    tags: ['prévention', 'risques', 'santé'],
    image: '/api/placeholder/600/400',
    views: 892
  },
  {
    id: 3,
    title: "Économies de masse : optimisation de la cotisation IPM",
    excerpt: "Méthode pour faire 12% de gains grâce à une grille de cotisation adaptative. Étude de cas détaillée.",
    content: `
      <h2>Optimiser les cotisations IPM : une nécessité économique</h2>
      <p>Face à la pression concurrentielle et aux contraintes budgétaires, l'optimisation des cotisations IPM devient un levier stratégique essentiel.</p>

      <h3>Analyse des coûts actuels</h3>
      <p>Notre étude révèle que 35% des entreprises paient des cotisations supérieures de 15 à 20% à leur besoin réel.</p>

      <h3>Méthodologie d'optimisation</h3>
      <ol>
        <li><strong>Audit des prestations</strong> : Analyse des 24 derniers mois</li>
        <li><strong>Segmentation du personnel</strong> : Profils de risque différenciés</li>
        <li><strong>Négociation avec les prestataires</strong> : Mise en concurrence</li>
        <li><strong>Paramétrage adaptatif</strong> : Cotisations variables selon l'âge et les risques</li>
      </ol>

      <h3>Résultats obtenus</h3>
      <p>Nos clients ont réalisé en moyenne 12% d'économies sur leurs cotisations IPM tout en maintenant une couverture optimale.</p>
    `,
    date: '15 mars 2026',
    readTime: '10 min',
    author: 'Mme Fatou SALL',
    category: 'Finance',
    tags: ['économies', 'cotisations', 'optimisation'],
    image: '/api/placeholder/600/400',
    views: 654
  },
  {
    id: 4,
    title: "Transformation digitale des RH : l'IPM 2.0",
    excerpt: "Comment la digitalisation révolutionne la gestion des instituts de prévoyance maladie. Tendances 2026.",
    content: `
      <h2>L'ère digitale dans la protection sociale</h2>
      <p>La transformation digitale redéfinit complètement le paysage de la protection sociale en Afrique de l'Ouest.</p>

      <h3>Applications mobiles pour les adhérents</h3>
      <ul>
        <li>Consultation des droits en temps réel</li>
        <li>Déclarations de sinistres instantanées</li>
        <li>Suivi des remboursements</li>
        <li>Téléconsultations intégrées</li>
      </ul>

      <h3>Intelligence artificielle et prédiction</h3>
      <p>L'IA permet d'anticiper les risques et d'optimiser les prestations.</p>
    `,
    date: '05 mars 2026',
    readTime: '15 min',
    author: 'M. Cheikh NDIAYE',
    category: 'Digital',
    tags: ['digital', 'innovation', 'RH'],
    image: '/api/placeholder/600/400',
    views: 423
  },
  {
    id: 5,
    title: "RSE et protection sociale : créer de la valeur partagée",
    excerpt: "Comment l'IPM contribue à votre stratégie RSE. Guide pratique pour les directions générales.",
    content: `
      <h2>L'IPM comme levier de responsabilité sociale</h2>
      <p>Un système IPM performant est un formidable outil de RSE qui bénéficie à tous les stakeholders.</p>

      <h3>Impact sur les salariés</h3>
      <p>Une couverture santé de qualité améliore significativement :</p>
      <ul>
        <li>La motivation et l'engagement des équipes</li>
        <li>La productivité globale</li>
        <li>La fidélisation du personnel</li>
        <li>La marque employeur</li>
      </ul>
    `,
    date: '20 février 2026',
    readTime: '9 min',
    author: 'Dr. Aïssatou GUEYE',
    category: 'RSE',
    tags: ['RSE', 'responsabilité', 'impact'],
    image: '/api/placeholder/600/400',
    views: 387
  },
  {
    id: 6,
    title: "Audit IPM : méthodologie et bonnes pratiques",
    excerpt: "Guide complet pour auditer efficacement votre système IPM. Checklist et outils pratiques.",
    content: `
      <h2>L'importance de l'audit IPM</h2>
      <p>Régulièrement auditer son système IPM est essentiel pour garantir sa conformité et son efficacité.</p>

      <h3>Fréquence des audits</h3>
      <ul>
        <li>Audit annuel complet obligatoire</li>
        <li>Audits trimestriels de conformité</li>
        <li>Audits ponctuels post-incident</li>
      </ul>
    `,
    date: '12 février 2026',
    readTime: '11 min',
    author: 'M. Babacar FALL',
    category: 'Audit',
    tags: ['audit', 'conformité', 'méthodologie'],
    image: '/api/placeholder/600/400',
    views: 298
  }
];

const categories = ['Tous', 'IPM', 'Santé', 'Finance', 'Digital', 'RSE', 'Audit'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedPost, setSelectedPost] = useState(null);
  const [dynamicPosts, setDynamicPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      setLoadingPosts(true);
      setFetchError(null);
      try {
        const fetchedPosts = await postsService.getPublished();
        const normalizedPosts = fetchedPosts.map((post) => ({
          id: post.id,
          title: post.title || 'Article sans titre',
          excerpt: post.excerpt || '',
          content: post.content || '',
          author: post.author || 'Équipe Intersec',
          date: post.date || (post.created ? new Date(post.created).toLocaleDateString('fr-FR') : ''),
          readTime: post.readTime || post.read_time || '5 min',
          category: post.category || 'Actualité',
          tags: typeof post.tags === 'string'
            ? post.tags.split(',').map(tag => tag.trim()).filter(Boolean)
            : Array.isArray(post.tags)
              ? post.tags
              : [],
          image: getFileUrl(post, 'image_file') || getFileUrl(post, 'image') || '/api/placeholder/600/400',
          views: post.views || post.views_count || 0
        }));
        setDynamicPosts(normalizedPosts);
      } catch (error) {
        setFetchError('Impossible de charger les articles depuis la base de données.');
        setDynamicPosts([]);
      } finally {
        setLoadingPosts(false);
      }
    };

    loadPosts();
  }, []);

  const allPosts = [...blogPosts, ...dynamicPosts];
  const filteredPosts = selectedCategory === 'Tous'
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

  const handlePostOpen = async (post) => {
    setSelectedPost(post);
    // Incrémenter les vues si c'est un article PocketBase
    if (post.id && post.id.length > 1) {
      const updated = await postsService.incrementViews(post.id);
      if (updated) {
        // Mettre à jour l'affichage avec le nouveau compteur
        setSelectedPost(prev => ({
          ...prev,
          views: updated.views || prev.views
        }));
      }
    }
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <motion.button
            onClick={() => setSelectedPost(null)}
            className="mb-6 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Retour au blog
          </motion.button>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="h-64 bg-gradient-to-r from-emerald-600 to-teal-600 relative">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-4 mb-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">{selectedPost.category}</span>
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    <span className="text-sm">{selectedPost.views} vues</span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-2">{selectedPost.title}</h1>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    {selectedPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {selectedPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {selectedPost.readTime}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                      <Bookmark size={16} />
                      Sauvegarder
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                      <Share2 size={16} />
                      Partager
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    Article mis à jour le {selectedPost.date}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-semibold mb-4"
          >
            <Tag size={16} />
            Centre de connaissances INTERSEC
          </motion.div>
          <h1 className="text-5xl font-black mb-4">Blog & Expertises</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analyses approfondies, études de cas et conseils d'experts en protection sociale,
            ressources humaines et management d'entreprise.
          </p>
          {fetchError && (
            <div className="max-w-3xl mx-auto mt-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {fetchError}
            </div>
          )}
          {loadingPosts && (
            <div className="max-w-3xl mx-auto mt-6 text-sm text-gray-500">
              Chargement des articles depuis la base de données...
            </div>
          )}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map(post => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              onClick={() => handlePostOpen(post)}
            >
              <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-emerald-700">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                    <Eye size={14} />
                    {post.views}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <User size={14} className="text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{post.author}</span>
                  </div>

                  <motion.div
                    className="flex items-center gap-1 text-emerald-600 font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    Lire l'article
                    <ArrowRight size={16} />
                  </motion.div>
                </div>

                <div className="flex flex-wrap gap-1 mt-4">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Aucun article trouvé</h3>
            <p className="text-gray-500">Essayez une autre catégorie.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}