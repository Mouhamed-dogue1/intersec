import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function H2iProcess() {
  const steps = [
    {
      number: '01',
      title: 'Analyse du besoin',
      description: 'Nous écoutons et comprenons vos besoins spécifiques en ressources humaines'
    },
    {
      number: '02',
      title: 'Recherche ciblée',
      description: 'Identification active de candidats correspondant à vos critères'
    },
    {
      number: '03',
      title: 'Évaluation',
      description: 'Assessment approfondi et vérification des compétences'
    },
    {
      number: '04',
      title: 'Sélection',
      description: 'Présentation des meilleurs profils adaptés à votre poste'
    },
    {
      number: '05',
      title: 'Intégration',
      description: 'Accompagnement lors de l\'arrivée du candidat'
    },
    {
      number: '06',
      title: 'Suivi',
      description: 'Suivi post-placement pour assurer la satisfaction'
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-black mb-6">Notre processus</h1>
            <p className="text-xl text-green-100">
              Une approche structurée et professionnelle pour vos besoins RH
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-8 items-start group"
              >
                {/* Number Circle */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="flex-shrink-0"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center font-black text-2xl shadow-lg group-hover:shadow-xl transition">
                    {step.number}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-4">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="bg-white border-l-4 border-green-500 group-hover:border-green-600 pl-6 py-4 rounded-r-lg shadow-md group-hover:shadow-xl transition"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>

                {/* Arrow */}
                {idx < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:flex ml-4"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  >
                    <ArrowRight size={32} className="text-green-500 rotate-90" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Résultats garantis
            </h2>
            <p className="text-xl text-gray-600">Ce que vous pouvez attendre de H2i</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {[
              { 
                icon: CheckCircle,
                title: 'Rapidité',
                desc: 'Recrutement en moins de 2 semaines'
              },
              { 
                icon: CheckCircle,
                title: 'Qualité',
                desc: 'Candidats qualifiés et disponibles'
              },
              { 
                icon: CheckCircle,
                title: 'Satisfaction',
                desc: '95% de taux de rétention'
              }
            ].map((result, i) => {
              const Icon = result.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-green-500 text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="inline-block mb-4"
                  >
                    <Icon size={48} className="text-green-600" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{result.title}</h4>
                  <p className="text-gray-700">{result.desc}</p>
                </motion.div>
              );
            })}
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
            <h2 className="text-4xl font-black mb-6">Prêt à commencer ?</h2>
            <p className="text-lg text-green-100 mb-8">
              Lancez votre projet de recrutement avec H2i dès aujourd'hui
            </p>
            <a 
              href="/filiales/h2i/contact"
              className="inline-block px-12 py-4 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition-all shadow-2xl"
            >
              Demander un recrutement
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
