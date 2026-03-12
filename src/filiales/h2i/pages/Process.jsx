import React from 'react';
import { motion } from 'framer-motion';
import { Search, Users, FileCheck, Award, CheckCircle2, Zap } from 'lucide-react';

export default function H2iProcess() {
  const steps = [
    {
      id: 1,
      title: "Analyse des besoins",
      description: "Nous comprenons vos défis RH spécifiques et objectifs",
      icon: Search,
      color: "from-blue-600 to-cyan-600",
      details: [
        "Audit des capacités actuelles",
        "Définition des objectifs",
        "Identification des lacunes",
        "Planification stratégique"
      ]
    },
    {
      id: 2,
      title: "Sourcing & Sélection",
      description: "Identification des meilleurs profils correspondant à vos critères",
      icon: Users,
      color: "from-indigo-600 to-blue-600",
      details: [
        "Recherche approfondie de candidats",
        "Évaluation des compétences",
        "Tests de compatibilité culturelle",
        "Présentation des top candidats"
      ]
    },
    {
      id: 3,
      title: "Évaluation & Recommandation",
      description: "Validation des profils avec des entretiens et tests approfondis",
      icon: FileCheck,
      color: "from-purple-600 to-indigo-600",
      details: [
        "Entretiens structurés",
        "Évaluations techniques",
        "Vérifications de référence",
        "Rapports détaillés"
      ]
    },
    {
      id: 4,
      title: "Placement & Intégration",
      description: "Finalisation de l'embauche avec support d'intégration",
      icon: Award,
      color: "from-teal-600 to-green-600",
      details: [
        "Négociation d'offre",
        "Support administratif",
        "Onboarding structuré",
        "Suivi initial"
      ]
    },
    {
      id: 5,
      title: "Suivi & Support",
      description: "Assurance de la satisfaction et ajustements si nécessaire",
      icon: CheckCircle2,
      color: "from-orange-600 to-red-600",
      details: [
        "Suivi de performance",
        "Support continu",
        "Résolution de problèmes",
        "Feed-back régulier"
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
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, 80, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Notre Processus
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche méthodique pour garantir le succès de chaque mission
          </p>
        </motion.div>
      </section>

      {/* Timeline Process */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-16 top-32 w-1 h-20 bg-gradient-to-b from-blue-400 to-indigo-400 hidden md:block" />
                  )}

                  <div className="flex gap-6 md:gap-8">
                    {/* Step Number Circle */}
                    <div className="flex-shrink-0">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`w-32 h-32 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                      >
                        <div className="text-center">
                          <IconComponent size={40} className="mx-auto mb-1" />
                          <span className="text-sm font-bold">{`Étape ${step.id}`}</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-4">
                      <div className="bg-white rounded-2xl p-8 shadow-md group-hover:shadow-xl transition-all duration-300">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg mb-6">
                          {step.description}
                        </p>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          {step.details.map((detail, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <Zap size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Avantages de notre approche
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
              {
                title: "Efficacité",
                description: "Gagner du temps dans la recherche et la sélection",
                icon: Zap
              },
              {
                title: "Qualité",
                description: "Candidats pré-sélectionnés et validés",
                icon: CheckCircle2
              },
              {
                title: "Tranquillité",
                description: "Support et suivi complet après l'embauche",
                icon: Award
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mb-4">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
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
              Prêt à démarrer?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Commencez votre parcours vers une meilleure gestion du talent
            </p>
            <button className="bg-white text-blue-600 font-bold py-3 px-12 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg">
              Commencer maintenant
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
