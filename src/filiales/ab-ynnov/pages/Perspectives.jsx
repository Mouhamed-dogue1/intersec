import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Lightbulb, Target, CheckCircle } from 'lucide-react';

export default function ABYnniovPerspectives() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-black mb-6">Perspectives & Développement</h1>
            <p className="text-xl text-blue-100">Notre stratégie de croissance et nos projets futurs</p>
          </motion.div>
        </div>
      </section>

      {/* Projets en cours */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Rocket size={32} />
              </motion.div>
              <h2 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Projets en cours d'étude
              </h2>
            </div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-8 rounded-xl"
              whileHover={{ boxShadow: '0 20px 40px rgba(37, 99, 235, 0.2)' }}
            >
              <ul className="space-y-4">
                {[
                  'Lancement opérationnel de nos activités immobilières',
                  'Développement de partenariats stratégiques en agrobusiness',
                  'Expansion de notre activité événementielle',
                  'Structuration de nos opérations import-export'
                ].map((project, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">{project}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stratégie de croissance */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-16">
              <motion.div
                className="p-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <TrendingUp size={32} />
              </motion.div>
              <h2 className="text-4xl font-black bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Stratégie de croissance
              </h2>
            </div>

            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Notre stratégie repose sur trois piliers fondamentaux qui nous guident vers une croissance durable et équilibrée.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Target,
                  title: 'Diversification',
                  description: 'Renforcer nos positions dans les secteurs existants et explorer de nouveaux marchés'
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation',
                  description: 'Intégrer de nouvelles technologies et modèles comerciaux avant-gardistes'
                },
                {
                  icon: Rocket,
                  title: 'Partenariats',
                  description: 'Développer des alliances stratégiques durables et mutuellement bénéfiques'
                }
              ].map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -15 }}
                    className="group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition" />
                    <div className="relative bg-white border-2 border-green-100 group-hover:border-green-300 rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-all">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg flex items-center justify-center mb-4"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <Icon size={32} />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Opportunités */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-16">
              <motion.div
                className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-lg"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Lightbulb size={32} />
              </motion.div>
              <h2 className="text-4xl font-black bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
                Opportunités de partenariat
              </h2>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              AB'YNNOV recherche activement des partenaires stratégiques pour co-créer de la valeur et accélérer son développement.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  color: 'from-purple-500 to-purple-600',
                  borderColor: 'border-purple-300',
                  title: 'Investisseurs',
                  description: 'Participer au financement de nos projets de développement stratégiques'
                },
                {
                  color: 'from-blue-500 to-blue-600',
                  borderColor: 'border-blue-300',
                  title: 'Opérateurs',
                  description: 'Collaborer à la mise en œuvre des activités et des projets'
                },
                {
                  color: 'from-green-500 to-green-600',
                  borderColor: 'border-green-300',
                  title: 'Fournisseurs',
                  description: 'Établir des partenariats commerciaux durables et mutuellement avantageux'
                },
                {
                  color: 'from-orange-500 to-orange-600',
                  borderColor: 'border-orange-300',
                  title: 'Clients',
                  description: 'Développer des relations commerciales stratégiques et innovantes'
                }
              ].map((opp, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`group bg-gradient-to-br ${opp.color} p-8 rounded-2xl text-white border-2 ${opp.borderColor} shadow-lg hover:shadow-2xl transition-all`}
                >
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-white transition">{opp.title}</h4>
                  <p className="text-white/90 leading-relaxed">{opp.description}</p>
                  <motion.div
                    className="mt-4 text-sm font-semibold opacity-0 group-hover:opacity-100 transition flex items-center gap-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <span>En savoir plus</span>
                    <span>→</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black mb-6">Intéressé par une collaboration ?</h2>
            <p className="text-xl text-blue-100 mb-12">
              Contactez-nous pour discuter de vos projets et opportunités de partenariat
            </p>
            <motion.a 
              href="/filiales/ab-ynnov/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl"
            >
              Prendre contact maintenant
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
