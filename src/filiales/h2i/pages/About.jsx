import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Heart, TrendingUp, Zap } from 'lucide-react';

export default function H2iAbout() {
  const values = [
    {
      icon: Users,
      title: "Expertise Humaine",
      description: "Comprendre et développer le potentiel de chaque personne"
    },
    {
      icon: Heart,
      title: "Engagement",
      description: "Dédication envers la réussite de nos clients et partenaires"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Solutions créatives aux défis RH contemporains"
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "Résultats mesurables et impact tangible sur l'organisation"
    },
    {
      icon: Zap,
      title: "Agilité",
      description: "Adaptabilité rapide aux besoins changeants du marché"
    },
    {
      icon: Target,
      title: "Alignement",
      description: "Stratégie RH alignée avec les objectifs d'affaires"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ y: [0, 80, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ y: [0, -80, 0] }}
          transition={{ duration: 14, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 16, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            À propos de H2i
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full" />
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-12 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Notre Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Transformer la gestion des ressources humaines en créant des solutions innovantes qui connectent les talents aux bonnes opportunités et transforment les organisations en lieux où le capital humain prospère.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-12 shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mb-6">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Notre Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Être le partenaire RH de référence en Afrique, reconnu pour notre expertise, notre innovation et notre impact positif sur la vie professionnelle et personnelle des talents que nous plaçons.
              </p>
            </motion.div>
          </div>

          {/* Core Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Notre Histoire</h3>
            <p className="mb-4 leading-relaxed opacity-95">
              H2i est née d'une vision simple mais puissante: transformer le secteur des ressources humaines par la technologie et l'expertise. Pendant des années, nous avons pratiqué et perfectionné nos services de recrutement, d'intérim, de conseil RH et d'audit organisationnel.
            </p>
            <p className="leading-relaxed opacity-95">
              Aujourd'hui, H2i est le partenaire de confiance de centaines d'organisations cherchant des talents exceptionnels et des solutions RH stratégiques pour leur croissance. Notre engagement envers l'excellence et l'innovation continue nous pousse à évoluer constamment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl" />
                    
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                        <IconComponent className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why H2i */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir H2i?
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Expertise Reconnue",
                description: "Des années d'expérience dans le recrutement, l'intérim et le conseil RH",
                icon: Zap
              },
              {
                title: "Solutions Intégrées",
                description: "Une approche 360° pour tous vos besoins en ressources humaines",
                icon: Users
              },
              {
                title: "Équipe Dédiée",
                description: "Des consultants RH passionnés et hautement qualifiés",
                icon: Users
              },
              {
                title: "Résultats Mesurables",
                description: "Des placements réussis avec taux de rétention élevé",
                icon: TrendingUp
              }
            ].map((reason, idx) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-indigo-600 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex-shrink-0">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Découvrez la différence H2i
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Transformez votre approche RH avec nos solutions éprouvées et innovantes
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                Contactez-nous
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                Consultation gratuite
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
