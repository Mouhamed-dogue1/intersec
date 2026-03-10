import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Sprout, Palette, ShoppingCart, Package, TrendingUp, Truck, Droplet } from 'lucide-react';

export default function ABYnniovActivities() {
  const activities = [
    {
      name: 'BTP & Immobilier',
      description: 'Construction et développement immobilier de qualité',
      icon: Building2,
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'Agrobusiness',
      description: 'Solutions agricoles modernes et durables',
      icon: Sprout,
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'Événementiel',
      description: 'Organisation d\'événements professionnels et corporate',
      icon: Palette,
      color: 'from-pink-400 to-pink-600'
    },
    {
      name: 'Commerce général',
      description: 'Distribution et négoce de produits variés',
      icon: ShoppingCart,
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Import & Export',
      description: 'Commerce international et logistique',
      icon: Package,
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Négoce',
      description: 'Négoce de produits et marchandises diverses',
      icon: TrendingUp,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'Transport',
      description: 'Services de transport et logistique',
      icon: Truck,
      color: 'from-red-400 to-red-600'
    },
    {
      name: 'Distribution pétrolière',
      description: 'Distribution et négoce de produits pétroliers',
      icon: Droplet,
      color: 'from-gray-600 to-gray-800'
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
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-black mb-6">Nos pôles d'activités</h1>
            <p className="text-xl text-blue-100">
              Découvrez notre portfolio diversifié et complémentaire
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {activities.map((activity, idx) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -15, scale: 1.05 }}
                  className="group cursor-pointer relative h-full"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className={`relative bg-gradient-to-br ${activity.color} p-8 rounded-2xl text-white h-full hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <motion.div
                        className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/30 transition"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Icon size={28} />
                      </motion.div>
                      
                      <h3 className="text-xl font-black mb-3 group-hover:text-white transition">{activity.name}</h3>
                      <p className="text-sm opacity-90 group-hover:opacity-100 transition flex-grow">{activity.description}</p>
                      
                      <motion.div
                        className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <span className="text-sm font-semibold">Découvrir</span>
                        <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>→</motion.span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Synergies Section */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Synergies & Complémentarité
            </h2>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white border-l-4 border-blue-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-3">BTP + Agrobusiness</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nous créons des projets intégrés d'aménagement territorial et de développement rural. Les capacités en construction conjuguées avec nos solutions agricoles générèrent des synergies uniques.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white border-l-4 border-purple-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-purple-600 mb-3">Commerce + Logistique</h3>
                <p className="text-gray-700 leading-relaxed">
                  Notre structure en import-export, négoce et transport crée une chaîne de valeur complète. Nous offrons des solutions logistiques intégrées à nos clients commerciaux.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white border-l-4 border-pink-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-pink-600 mb-3">Événementiel + Tous Secteurs</h3>
                <p className="text-gray-700 leading-relaxed">
                  Notre activité événementielle transversale nous permet de créer des expériences uniques pour valoriser tous nos secteurs et renforcer nos relations partenaires.
                </p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 text-lg text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-gray-200"
            >
              Notre structure transversale favorise les collaborations internes et la création de solutions innovantes pour nos partenaires. C'est cette approche intégrée qui nous distingue.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            {[
              { number: '8', label: 'Secteurs' },
              { number: '100%', label: 'Complémentarité' },
              { number: '∞', label: 'Opportunités' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <motion.div
                  className="text-5xl font-black mb-2 bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.2 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-xl text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
