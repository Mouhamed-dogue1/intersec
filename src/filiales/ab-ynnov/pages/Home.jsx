import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ABYnniovHome() {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ 
              x: [0, 50, 0],
              y: [0, 100, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ 
              x: [0, -50, 0],
              y: [0, -100, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img src="/ab'ynnov.png" alt="AB'YNNOV" className="h-40 mx-auto drop-shadow-lg" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            AB'YNNOV
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-700 mb-4 font-light"
          >
            Leader multisectoriel
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Diversifiée, innovante et tournée vers le développement durable
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <button 
              onClick={() => navigate('/filiales/ab-ynnov/about')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Découvrir <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button 
              onClick={() => navigate('/filiales/ab-ynnov/contact')}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300"
            >
              Contact
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex items-start justify-center p-2">
            <motion.div className="w-1 h-2 bg-blue-600 rounded-full" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Zap, label: '8 Secteurs', desc: 'd\'activités diversifiées' },
              { icon: Target, label: 'Stratégique', desc: 'Positionnement innovant' },
              { icon: TrendingUp, label: 'Croissance', desc: 'Projection ambitieuse' }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.label}</h3>
                  <p className="text-gray-600">{stat.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl blur-2xl opacity-30" />
              <motion.img
                src="/ab'ynnov.png"
                alt="AB'YNNOV Brand"
                className="relative w-full max-w-sm mx-auto object-cover rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl font-black mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              >
                Qui sommes-nous ?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-gray-700 mb-6 leading-relaxed"
              >
                AB'YNNOV est une entreprise multisectorielle innovante, créée comme membre stratégique du Groupe INTERSEC.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Nous opérons dans plusieurs domaines complémentaires pour créer une valeur ajoutée unique et durable. Notre positionnement stratégique nous permet de proposer des solutions intégrées et synergiques.
              </motion.p>

              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                onClick={() => navigate('/filiales/ab-ynnov/about')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold hover:shadow-xl transition-all hover:scale-105"
              >
                Voir plus d'infos
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectors Preview */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Nos pôles d'activités
            </h2>
            <p className="text-xl text-gray-600">Diversifiés et complémentaires pour votre succès</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              'BTP & Immobilier',
              'Agrobusiness',
              'Événementiel',
              'Commerce général',
              'Import & Export',
              'Négoce',
              'Transport',
              'Distribution pétrolière'
            ].map((sector, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 text-white h-full flex items-center justify-center text-center">
                  <motion.p
                    className="font-bold text-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {sector}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => navigate('/filiales/ab-ynnov/activities')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all inline-flex items-center gap-2"
            >
              Découvrir tous les secteurs <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Animated elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4">Notre Vision Stratégique</h2>
            <p className="text-xl text-blue-100">Créer de la valeur durable et de l'impact</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Innovant', desc: 'Solutions avant-gardistes' },
              { title: 'Durable', desc: 'Impact à long terme' },
              { title: 'Intégré', desc: 'Synergies multisectorielles' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-white/50 transition"
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Prêt à collaborer ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez les opportunités de partenariat avec AB'YNNOV
            </p>
            <motion.button 
              onClick={() => navigate('/filiales/ab-ynnov/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              Contacter AB'YNNOV <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
