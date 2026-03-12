import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Globe, TrendingUp, Award, Users } from 'lucide-react';

export default function ABYnniovAbout() {
  const values = [
    {
      icon: Target,
      title: "Objectifs Clairs",
      description: "Des buts stratégiques bien définis pour chaque secteur"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Recherche constante de solutions novatrices et durables"
    },
    {
      icon: Globe,
      title: "Diversité",
      description: "Un portefeuille multisectoriel fort et complémentaire"
    },
    {
      icon: TrendingUp,
      title: "Croissance",
      description: "Développement continu et rentabilité durable"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Standards de qualité élevés dans tous nos domaines"
    },
    {
      icon: Users,
      title: "Partenariat",
      description: "Relations durables avec nos clients et fournisseurs"
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
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ y: [0, 80, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ y: [0, -80, 0] }}
          transition={{ duration: 14, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            À propos d'AB'YNNOV
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6 rounded-full" />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border border-blue-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              AB'YNNOV est un conglomérat multisectoriel leader, diversifié et innovant. Notre mission est de créer de la valeur durable en opérant efficacement dans plusieurs secteurs clés de l'économie.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous nous engageons à maintenir les plus hauts standards de qualité, d'éthique et de durabilité dans toutes nos activités commerciales, tout en contribuant au développement économique et social.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-12 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Lightbulb className="text-blue-600" size={28} />
                Notre Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Devenir un référent continental en matière d'excellence managériale, d'innovation durable et de création de valeur économique. Nous aspirons à être reconnus comme un partenaire de confiance et un moteur de développement dans chaque secteur où nous opérons.
              </p>
            </motion.div>

            {/* Strategy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-12 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Target className="text-blue-600" size={28} />
                Notre Stratégie
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Une approche holistique combinant performance opérationnelle, innovation continue et durabilité. Nous investissons dans le capital humain, la technologie et l'innovation pour maintenir notre leadership et créer une valeur à long terme pour nos stakeholders.
              </p>
            </motion.div>
          </div>

          {/* Core Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
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
                  className="group cursor-pointer"
                >
                  <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl" />
                    
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-600 transition-colors duration-300">
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

      {/* Key Statistics */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 md:p-16 text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "8+", label: "Secteurs d'activité" },
                { number: "10K+", label: "Employés" },
                { number: "3", label: "Décennies d'avance" },
                { number: "Continental", label: "Présence" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                >
                  <p className="text-4xl md:text-5xl font-black mb-2">
                    {stat.number}
                  </p>
                  <p className="text-blue-100 text-sm md:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Intéressé par une collaboration?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Découvrez comment AB'YNNOV peut créer de la valeur pour votre entreprise
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 hover:shadow-lg">
              Nous Contacter
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-2xl transition-all duration-300">
              En Savoir Plus
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
