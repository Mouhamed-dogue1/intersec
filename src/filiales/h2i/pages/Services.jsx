import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, FileText, Lightbulb } from 'lucide-react';

export default function H2iServices() {
  const services = [
    {
      icon: Users,
      title: 'Recrutement',
      description: 'Identification et sélection de candidats qualifiés pour tous les secteurs',
      details: [
        'Profiling et sourcing ciblé',
        'Assessment et évaluation',
        'Présentation de candidats qualifiés',
        'Suivi post-embauche'
      ]
    },
    {
      icon: Briefcase,
      title: 'Intérim',
      description: 'Mise à disposition de personnel temporaire pour vos besoins urgents',
      details: [
        'Intérim cadre et non-cadre',
        'Réponse rapide aux demandes',
        'Staff professionnel et formé',
        'Gestion administrative complète'
      ]
    },
    {
      icon: FileText,
      title: 'Audit Organisationnel',
      description: 'Analyse des structures pour optimiser votre fonctionnement',
      details: [
        'Diagnostic des processus',
        'Evaluation des pratiques RH',
        'Recommandations stratégiques',
        'Plan d\'action personnalisé'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Conseil RH',
      description: 'Accompagnement stratégique en gestion des ressources humaines',
      details: [
        'Stratégie RH talent',
        'Gestion de la paie et avantages',
        'Développement des compétences',
        'Relations sociales'
      ]
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-600 via-green-700 to-blue-900 text-white overflow-hidden">
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
            <h1 className="text-6xl md:text-7xl font-black mb-6">Nos services</h1>
            <p className="text-xl text-green-100">
              Solutions complètes en gestion des ressources humaines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500" />
                  
                  <div className="relative bg-white border-2 border-green-200 group-hover:border-green-400 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 h-full">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl flex items-center justify-center mb-6"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Icon size={32} />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                    
                    <motion.ul
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="text-green-600 font-bold mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Pourquoi choisir H2i ?
            </h2>
            <p className="text-xl text-gray-600">Avantages de notre partenariat</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: 'Réactivité', desc: 'Réponse rapide à vos demandes' },
              { title: 'Expertise', desc: 'Know-how éprouvé depuis des années' },
              { title: 'Confidentialité', desc: 'Respect total de vos informations' },
              { title: 'Réseau', desc: 'Accès à un large pool de talents' },
              { title: 'Personnalisé', desc: 'Solutions adaptées à vos besoins' },
              { title: 'Suivi', desc: 'Accompagnement complet du projet' }
            ].map((adv, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-green-200 rounded-xl p-6 text-center group hover:border-green-400 transition"
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg flex items-center justify-center mx-auto mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <span className="font-bold">✓</span>
                </motion.div>
                <h4 className="font-bold text-gray-900 mb-2">{adv.title}</h4>
                <p className="text-gray-700 text-sm">{adv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-green-900 via-green-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black mb-6">Besoin d'aide pour le recrutement ?</h2>
            <p className="text-lg text-green-100 mb-8">
              Contactez notre équipe pour discuter de vos projets RH
            </p>
            <a 
              href="/filiales/h2i/contact"
              className="inline-block px-12 py-4 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition-all shadow-2xl"
            >
              Demander un service
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
