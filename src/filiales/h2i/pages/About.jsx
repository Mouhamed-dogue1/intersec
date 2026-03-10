import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, CheckCircle } from 'lucide-react';

export default function H2iAbout() {
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
      <section className="relative py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-600 via-green-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-black mb-6">À propos de H2i</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Leader en solutions de gestion des ressources humaines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Présentation
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                H2i est une filiale du Groupe INTERSEC spécialisée dans les solutions de gestion des ressources humaines et les services d'accompagnement des entreprises.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                L'objectif de H2i est d'accompagner les entreprises dans la gestion efficace de leur capital humain en leur proposant des solutions adaptées à leurs besoins stratégiques.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"
          >
            Notre engagement
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-white border-2 border-green-200 group-hover:border-transparent rounded-2xl shadow-lg group-hover:shadow-2xl p-8 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg"
                    whileHover={{ rotate: 10 }}
                  >
                    <Target size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Accompagner chaque entreprise vers le succès par le recrutement des bons talents, l'optimisation RH et le conseil stratégique.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-white border-2 border-green-200 group-hover:border-transparent rounded-2xl shadow-lg group-hover:shadow-2xl p-8 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg"
                    whileHover={{ rotate: 10 }}
                  >
                    <Users size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Être le partenaire de confiance numéro un en gestion des talents pour les entreprises en quête d'excellence.
                </p>
              </div>
            </motion.div>

            {/* Valeurs */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-white border-2 border-green-200 group-hover:border-transparent rounded-2xl shadow-lg group-hover:shadow-2xl p-8 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg"
                    whileHover={{ rotate: 10 }}
                  >
                    <Lightbulb size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">Valeurs</h3>
                </div>
                <ul className="text-gray-700 space-y-3">
                  {['Professionnalisme', 'Réactivité', 'Confidentialité', 'Excellence'].map((val, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-green-900 via-green-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black mb-8">Notre expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Recrutement spécialisé et généraliste',
                'Gestion de missions d\'intérim',
                'Audit et diagnostic organisationnel',
                'Conseil stratégique RH',
                'Formation et développement',
                'Accompagnement du changement'
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={24} className="text-green-400 flex-shrink-0" />
                  <span className="text-lg">{exp}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <button className="px-8 py-3 bg-white text-green-900 rounded-full font-bold hover:bg-green-50 transition-all">
                Découvrir le groupe INTERSEC
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
