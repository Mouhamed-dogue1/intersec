import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Truck, Home, Zap, Globe, TrendingUp, Award, Users } from 'lucide-react';
import OptimizedImage from '../../../components/OptimizedImage';

export default function ABYnniovActivities() {
  const activities = [
    {
      id: 1,
      category: "Agrobusiness",
      image: "/img_service_ab'ynnov/Agrobusiness.jpg",
      description: "Solutions innovantes pour le secteur agricole",
      icon: Zap,
      highlight: "Durabilité & Innovation"
    },
    {
      id: 2,
      category: "BTP & Immobilier",
      image: "/img_service_ab'ynnov/BTP & Immobilier.jpg",
      description: "Expertise dans la construction et l'immobilier",
      icon: Home,
      highlight: "Qualité & Conformité"
    },
    {
      id: 3,
      category: "Commerce général",
      image: "/img_service_ab'ynnov/Commerce général.jpg",
      description: "Services commerciaux diversifiés",
      icon: ShoppingCart,
      highlight: "Performance & Rentabilité"
    },
    {
      id: 4,
      category: "Distribution pétrolière",
      image: "/img_service_ab'ynnov/Distribution pétrolière.jpg",
      description: "Partenaire fiable en distribution énergétique",
      icon: TrendingUp,
      highlight: "Sécurité & Efficacité"
    },
    {
      id: 5,
      category: "Import & Export",
      image: "/img_service_ab'ynnov/Import & Export.jpg",
      description: "Commerce international optimisé",
      icon: Globe,
      highlight: "Expertise Mondiale"
    },
    {
      id: 6,
      category: "Négoce",
      image: "/img_service_ab'ynnov/Négoce.jpg",
      description: "Négoce de produits et matériaux",
      icon: Users,
      highlight: "Partenariats Stratégiques"
    },
    {
      id: 7,
      category: "Transport",
      image: "/img_service_ab'ynnov/Transport.jpg",
      description: "Solutions logistiques intégrées",
      icon: Truck,
      highlight: "Fiabilité & Ponctualité"
    },
    {
      id: 8,
      category: "Événementiel",
      image: "/img_service_ab'ynnov/Événementiel.jpg",
      description: "Gestion d'événements professionnels",
      icon: Award,
      highlight: "Excellence & Créativité"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
            Nos Activités
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos domaines d'expertise multisectoriels
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {activities.map((activity) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={activity.id}
                  variants={itemVariants}
                  className="group relative cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                  
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Image Container avec OptimizedImage */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <OptimizedImage
                        src={activity.image}
                        alt={activity.category}
                        className="w-full h-full group-hover:scale-110"
                        containerClassName="w-full h-full"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                        <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {activity.highlight}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {activity.category}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {activity.description}
                      </p>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                      <span className="text-blue-600 group-hover:text-white transition-colors text-lg">→</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Prêt à collaborer?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contactez-nous pour discuter de vos besoins spécifiques
            </p>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              Nous contacter
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
