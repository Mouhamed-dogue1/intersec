import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Briefcase, Search, Zap, CheckCircle, Award } from 'lucide-react';
import OptimizedImage from '../../../components/OptimizedImage';

export default function H2iServices() {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "Recrutement",
      image: "/img_service_h2i/Recrutement.jpg",
      description: "Recrutement de talents qualifiés adaptés à votre organisation",
      details: [
        "Sourcing de candidats qualifiés",
        "Tri et présélection des profils",
        "Entretiens et évaluations",
        "Suivi post-embauche"
      ],
      icon: Search,
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Conseil RH",
      image: "/img_service_h2i/Conseil RH.jpg",
      description: "Stratégies et solutions en ressources humaines",
      details: [
        "Audit organisationnel",
        "Gestion du changement",
        "Développement des compétences",
        "Culture d'entreprise"
      ],
      icon: Briefcase,
      color: "from-indigo-600 to-blue-600"
    },
    {
      id: 3,
      title: "Intérim",
      image: "/img_service_h2i/Intérim.jpg",
      description: "Solutions d'intérim flexibles et réactives",
      details: [
        "Missions courte/long terme",
        "Substitution et renfort d'équipes",
        "Formation continues",
        "Gestion administrative"
      ],
      icon: Users,
      color: "from-purple-600 to-indigo-600"
    },
    {
      id: 4,
      title: "Audit Organisationnel",
      image: "/img_service_h2i/Audit Organisationnel.jpg",
      description: "Diagnostic complet de votre structure organisationnelle",
      details: [
        "Analyse des processus",
        "Évaluation des compétences",
        "Recommandations stratégiques",
        "Plans d'amélioration"
      ],
      icon: CheckCircle,
      color: "from-teal-600 to-green-600"
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, 80, 0], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, -80, 0], x: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 16, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Nos Services
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions innovantes en ressources humaines pour optimiser votre capital humain
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    {/* Image Section */}
                    <div className="relative h-80 overflow-hidden bg-gray-100">
                      <OptimizedImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full group-hover:scale-105"
                        containerClassName="w-full h-full"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Service Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-3">
                          <div className={`bg-gradient-to-br ${service.color} p-3 rounded-xl text-white`}>
                            <IconComponent size={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <p className="text-gray-600 mb-6 text-lg">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3 mb-6">
                        {service.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => navigate('/services')}
                        className={`w-full bg-gradient-to-r ${service.color} text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform group-hover:scale-105`}
                      >
                        En savoir plus →
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi nous choisir?
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Award, title: "Expertise", desc: "Équipe de professionnels du RH" },
              { icon: Zap, title: "Réactivité", desc: "Solutions adaptées à vos besoins" },
              { icon: Users, title: "Partenariat", desc: "Relations durables et de confiance" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-4">
                  <item.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transformez votre gestion des talents
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Découvrez comment nos solutions peuvent optimiser votre performance RH
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                Contactez-nous
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                Demander une démo
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
