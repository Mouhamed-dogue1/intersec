import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Users, Shield, TrendingUp, Clock, Target, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 'ipm',
    title: 'Institut de Prévoyance Maladie (IPM)',
    description: 'Solution complète de protection sociale pour vos salariés',
    icon: Shield,
    features: [
      'Couverture santé complète',
      'Gestion des risques professionnels',
      'Prévention et dépistage',
      'Suivi médical personnalisé',
      'Réseau de soins partenaires',
      'Rapports de conformité'
    ],
    benefits: [
      'Réduction des coûts de santé',
      'Amélioration de la productivité',
      'Fidélisation des talents',
      'Conformité réglementaire',
      'Image employeur renforcée'
    ],
    process: [
      'Audit initial de vos besoins',
      'Conception de la solution adaptée',
      'Mise en place opérationnelle',
      'Formation des équipes',
      'Suivi et optimisation continue'
    ],
    stats: {
      clients: '500+',
      satisfaction: '98%',
      economies: '15%',
      couverture: '360°'
    }
  },
  {
    id: 'consulting',
    title: 'Conseil RH & Organisation',
    description: 'Accompagnement stratégique pour optimiser vos ressources humaines',
    icon: Users,
    features: [
      'Audit RH complet',
      'Stratégie de recrutement',
      'Gestion des talents',
      'Formation et développement',
      'Culture d\'entreprise',
      'Transformation digitale RH'
    ],
    benefits: [
      'Performance RH optimisée',
      'Réduction du turnover',
      'Développement des compétences',
      'Innovation organisationnelle',
      'Engagement employé accru'
    ],
    process: [
      'Diagnostic approfondi',
      'Définition des objectifs',
      'Plan d\'action personnalisé',
      'Accompagnement au changement',
      'Mesure des résultats'
    ],
    stats: {
      clients: '300+',
      satisfaction: '96%',
      performance: '+25%',
      retention: '85%'
    }
  },
  {
    id: 'risk-management',
    title: 'Gestion des Risques',
    description: 'Protection globale contre les risques professionnels et opérationnels',
    icon: Target,
    features: [
      'Évaluation des risques',
      'Plans de prévention',
      'Assurance adaptée',
      'Gestion des sinistres',
      'Formation sécurité',
      'Reporting réglementaire'
    ],
    benefits: [
      'Réduction des accidents',
      'Couverture assurantielle optimale',
      'Conformité sécurité',
      'Continuité d\'activité',
      'Maîtrise des coûts'
    ],
    process: [
      'Cartographie des risques',
      'Analyse des vulnérabilités',
      'Mise en place des mesures',
      'Formation et sensibilisation',
      'Contrôle et ajustement'
    ],
    stats: {
      clients: '400+',
      satisfaction: '97%',
      accidents: '-40%',
      couverture: '100%'
    }
  },
  {
    id: 'performance',
    title: 'Optimisation Performance',
    description: 'Boostez l\'efficacité et la rentabilité de votre entreprise',
    icon: TrendingUp,
    features: [
      'Analyse de performance',
      'Optimisation des processus',
      'Lean management',
      'KPIs et tableaux de bord',
      'Transformation digitale',
      'Coaching managérial'
    ],
    benefits: [
      'Productivité améliorée',
      'Réduction des coûts',
      'Qualité supérieure',
      'Innovation accélérée',
      'Croissance durable'
    ],
    process: [
      'Audit de performance',
      'Identification des leviers',
      'Déploiement des solutions',
      'Formation des équipes',
      'Suivi des améliorations'
    ],
    stats: {
      clients: '250+',
      satisfaction: '95%',
      productivite: '+30%',
      qualite: '+45%'
    }
  }
];

export default function ServiceDetail({ serviceId }) {
  const navigate = useNavigate();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Service non trouvé</h1>
          <button
            onClick={() => navigate('/services')}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
          >
            Retour aux services
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <motion.button
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 mb-8 text-emerald-100 hover:text-white transition"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} />
            Retour aux services
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
            >
              <IconComponent size={40} />
            </motion.div>
            <h1 className="text-5xl font-black mb-4">{service.title}</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              {service.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {Object.entries(service.stats).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="text-3xl font-black text-emerald-600 mb-2">{value}</div>
              <div className="text-sm text-gray-600 capitalize">
                {key === 'clients' ? 'Clients' :
                 key === 'satisfaction' ? 'Satisfaction' :
                 key === 'economies' ? 'Économies' :
                 key === 'couverture' ? 'Couverture' :
                 key === 'performance' ? 'Performance' :
                 key === 'retention' ? 'Rétention' :
                 key === 'accidents' ? 'Réduction accidents' :
                 key === 'productivite' ? 'Productivité' :
                 key === 'qualite' ? 'Qualité' : key}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="text-emerald-600" size={32} />
              Fonctionnalités clés
            </h2>
            <div className="space-y-4">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-emerald-600" size={32} />
              Bénéfices
            </h2>
            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <Award className="text-emerald-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Clock className="text-emerald-600" size={32} />
            Notre processus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center h-full">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-medium">{step}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-emerald-300 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Prêt à transformer votre entreprise ?</h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Contactez nos experts pour une consultation gratuite et découvrez comment nous pouvons vous aider.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander une consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}