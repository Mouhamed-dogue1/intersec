import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap, CheckCircle } from 'lucide-react';

export default function ABYnniovAbout() {
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
            <h1 className="text-6xl md:text-7xl font-black mb-6">À propos</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Découvrez notre histoire, nos valeurs et notre vision stratégique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Présentation
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                AB'YNNOV est une entreprise multisectorielle innovante, créée comme membre stratégique du Groupe INTERSEC. Nous opérons dans plusieurs domaines complémentaires pour créer une valeur ajoutée unique et durable.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Notre positionnement stratégique nous permet de proposer des solutions intégrées et synergiques à nos partenaires et clients, en tirant profit des complémentarités entre nos secteurs d'activité.
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
            className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            Nos Fondamentaux
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-white border-2 border-blue-200 group-hover:border-transparent rounded-2xl shadow-lg group-hover:shadow-2xl p-8 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg"
                    whileHover={{ rotate: 10 }}
                  >
                    <Target size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Créer de la valeur durable à travers une approche multisectorielle innovante, en mettant les partenariats et l'excellence opérationnelle au cœur de nos activités.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-white border-2 border-blue-200 group-hover:border-transparent rounded-2xl shadow-lg group-hover:shadow-2xl p-8 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg"
                    whileHover={{ rotate: 10 }}
                  >
                    <Eye size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Devenir un acteur multisectoriel de référence, reconnu pour notre capacité à générer de l'impact économique et social dans nos domaines d'intervention.
                </p>
              </div>
            </motion.div>

            {/* Valeurs */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-white border-2 border-blue-200 group-hover:border-transparent rounded-2xl shadow-lg group-hover:shadow-2xl p-8 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg"
                    whileHover={{ rotate: 10 }}
                  >
                    <Heart size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">Valeurs</h3>
                </div>
                <ul className="text-gray-700 space-y-3">
                  {['Excellence opérationnelle', 'Innovation continue', 'Intégrité et transparence', 'Responsabilité durable'].map((val, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Membre du Groupe INTERSEC */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="p-3 bg-white/20 rounded-lg"
                whileHover={{ scale: 1.1 }}
              >
                <Zap size={32} />
              </motion.div>
              <h2 className="text-4xl font-black">Membre du Groupe INTERSEC</h2>
            </div>
            
            <p className="text-xl text-blue-100 leading-relaxed mb-6">
              AB'YNNOV est une filiale stratégique du Groupe INTERSEC, bénéficiant de la synergie d'un groupe diversifié et expérimenté. Cette appartenance renforce notre crédibilité et nos capacités de déploiement.
            </p>

            <p className="text-xl text-blue-100 leading-relaxed">
              Nous travaillons en étroite coordination avec INTERSEC et H2i pour créer des synergies et offrir des solutions intégrées à nos partenaires.
            </p>

            <motion.div
              className="mt-8 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <button className="px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-all">
                Découvrir le groupe INTERSEC
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
