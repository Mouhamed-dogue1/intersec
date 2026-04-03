import { motion } from 'framer-motion';
import { Shield, Users, CheckCircle, TrendingUp, Clock, Award, Star, Zap, Heart, Target, FileText, Phone } from 'lucide-react';

export default function IPM() {
  return (
    <div className="text-gray-800 bg-white">
      {/* Hero Section with Enhanced Animations */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-700 opacity-95" />
        <div className="absolute inset-0">
          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-48 h-48 bg-emerald-300/20 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-400/15 rounded-full blur-lg"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6"
            >
              <Shield size={16} />
              Institut de Prévoyance Maladie Certifié
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
            >
              IPM INTERSEC :
              <motion.span
                className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Protection Sociale Premium
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-emerald-100 leading-relaxed mb-8 max-w-3xl"
            >
              Notre IPM révolutionne la protection sociale des entreprises sénégalaises avec une approche digitale,
              transparente et adaptée aux réalités économiques locales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#formation"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white text-emerald-700 font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl flex items-center gap-3"
              >
                <Target size={20} />
                Découvrir l'IPM
              </motion.a>
              <motion.a
                href="#faq"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl border-2 border-white/80 text-white font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm flex items-center gap-3"
              >
                <Zap size={20} />
                FAQ Express
              </motion.a>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-2xl"
            >
              {[
                { number: "150+", label: "Entreprises" },
                { number: "98%", label: "Satisfaction" },
                { number: "72h", label: "Délai moyen" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + idx * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    className="text-3xl font-black text-white mb-1"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 20px rgba(255,255,255,0.5)",
                        "0 0 0px rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-emerald-200 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8" id="formation">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-semibold mb-4"
          >
            <Award size={16} />
            Pourquoi choisir IPM INTERSEC ?
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            L'excellence en protection sociale
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Notre IPM s'appuie sur les dernières réglementations sénégalaises et pratiques internationales
            pour offrir une gouvernance dédiée, une maîtrise parfaite des risques, et des services de santé premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              label: 'Cadre réglementaire sécurisé',
              description: "Respect intégral loi 75-50 et décret 75-895, gouvernance validée par le ministère du Travail.",
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: Users,
              label: 'Couverture santé complète',
              description: 'Soins courants, hospitalisation, maternité, urgences, et réseaux partenaires agréés.',
              color: 'from-emerald-500 to-emerald-600'
            },
            {
              icon: TrendingUp,
              label: 'Gestion digitale transparente',
              description: 'Tableau de bord RH, reporting trimestriel, communication dédiée aux affiliés.',
              color: 'from-purple-500 to-purple-600'
            },
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
                }}
                className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden"
              >
                {/* Background Gradient Animation */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-6 shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent size={32} />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  {item.label}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.5
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-semibold mb-4"
            >
              <Star size={16} />
              Impact social mesuré
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Chiffres qui parlent d'eux-mêmes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: '150+ entreprises accompagnées', icon: Users, color: 'from-blue-500 to-blue-600', delay: 0 },
              { title: '98% de satisfaction client', icon: Heart, color: 'from-red-500 to-pink-600', delay: 0.2 },
              { title: 'Prise en charge sous 72h', icon: Clock, color: 'from-orange-500 to-red-500', delay: 0.4 },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: item.delay }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden"
                >
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                  />

                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-6 shadow-lg`}
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.5
                    }}
                  >
                    <IconComponent size={32} />
                  </motion.div>

                  <motion.h3
                    className="text-2xl font-bold text-gray-800 mb-2"
                    animate={{
                      color: ['#1f2937', '#059669', '#1f2937'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: idx * 0.8
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Progress Bar Animation */}
                  <motion.div
                    className="w-full bg-gray-200 rounded-full h-2 mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + idx * 0.2 }}
                  >
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 1.2 + idx * 0.2, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold mb-4"
          >
            <CheckCircle size={16} />
            Processus d'affiliation simplifié
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            De l'idée à la protection en 4 étapes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un accompagnement personnalisé pour une mise en place rapide et sécurisée de votre IPM.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Analyse initiale',
                text: 'Revue des contrats, effectif, profil complet, et préconisations sur mesures.',
                icon: Users,
                color: 'from-blue-500 to-blue-600'
              },
              {
                step: '2',
                title: 'Dossier administratif',
                text: 'Collecte des pièces, paramétrage des plans de couverture, validation juridique.',
                icon: FileText,
                color: 'from-emerald-500 to-emerald-600'
              },
              {
                step: '3',
                title: 'Mise en place',
                text: 'Affectation des cotisations, lancement de la plateforme adhérents et formation RH.',
                icon: Zap,
                color: 'from-purple-500 to-purple-600'
              },
              {
                step: '4',
                title: 'Suivi et optimisation',
                text: 'Rapports mensuels, audits de conformité et révision semestrielle des prestations.',
                icon: TrendingUp,
                color: 'from-orange-500 to-red-500'
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                  className="relative group"
                >
                  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 h-full relative overflow-hidden">
                    {/* Step Number */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-white font-black text-xl mb-4 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.step}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4 shadow-lg`}
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.5
                      }}
                    >
                      <IconComponent size={24} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>

                    {/* Floating Elements */}
                    <motion.div
                      className={`absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-br ${item.color} opacity-20`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: idx * 0.8
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-700 text-white py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-48 h-48 bg-emerald-300/10 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold mb-4"
            >
              <Zap size={16} />
              FAQ IPM : ce que veulent savoir vos RH
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Réponses directes aux questions critiques
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Des réponses claires et précises sur l'adhésion, la gestion, les remboursements, et la gouvernance IPM.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              { q: 'Qui peut adhérer au groupe IPM ?', a: 'Toutes les entreprises et leurs salariés, avec option cadres/non-cadres, y compris travailleurs saisonniers en contrat CDD.' },
              { q: 'Quel est le délai d\'activation après dépôt dossier ?', a: 'Sous 48h après validation des pièces et signature du contrat de prestataire / IPM.' },
              { q: 'Quels actes sont remboursés ?', a: 'Consultations, analyses, hospitalisation, chirurgie, urgences, imagerie, pharmacie, et maternité selon tableau de garanties.' },
              { q: 'Comment suivre mes cotisations ?', a: 'Via un tableau de bord client sécurisé, alertes automatiques et reporting trimestriel par mail.' },
              { q: 'Peut-on personnaliser les garanties ?', a: 'Oui, nous proposons 3 familles (Standard, Confort, Premium) modifiables sur mesure pour vos risques métiers.' },
              { q: 'Quels sont les avantages fiscaux ?', a: 'Déduction des cotisations du résultat imposable, exonération de charges sociales, optimisation fiscale légale.' },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                className="group bg-white text-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <motion.h3
                  className="font-bold text-lg mb-3 text-emerald-700 group-hover:text-emerald-800 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  {faq.q}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  {faq.a}
                </motion.p>

                {/* Animated Border */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-b-2xl"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 + idx * 0.1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-25"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.25, 0.4, 0.25],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>

          <div className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-3xl p-12 shadow-2xl border border-emerald-100 relative overflow-hidden">
            {/* Floating Icons */}
            <motion.div
              className="absolute top-6 right-6 text-emerald-200"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Shield size={48} />
            </motion.div>

            <motion.div
              className="absolute bottom-6 left-6 text-teal-200"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Heart size={40} />
            </motion.div>

            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 rounded-full text-emerald-700 font-semibold mb-6"
              >
                <Star size={20} />
                Prêt à protéger vos équipes ?
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl font-black text-gray-900 mb-6"
              >
                Lancez votre IPM INTERSEC
                <motion.span
                  className="block text-emerald-600"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(16, 185, 129, 0)",
                      "0 0 20px rgba(16, 185, 129, 0.5)",
                      "0 0 0px rgba(16, 185, 129, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  dès aujourd'hui
                </motion.span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Un consultant dédié vous accompagne jusqu'à l'agrément final, avec un plan d'action opérationnel
                et un suivi dédié RH + médico-social. Démarrons ensemble votre protection sociale d'excellence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.a
                  href="/contact"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl font-bold text-lg hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-xl"
                >
                  <Target size={24} />
                  Demander une étude gratuite
                </motion.a>

                <motion.a
                  href="tel:+221338693030"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#f0f9ff"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-emerald-600 text-emerald-700 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all"
                >
                  <Phone size={24} />
                  +221 33 869 30 30
                </motion.a>
              </motion.div>

              {/* Conditions & Documents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                <motion.section
                  className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-emerald-700 via-teal-600 to-cyan-500 text-white shadow-2xl border border-white/30"
                  whileHover={{ translateY: -6 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                >
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_55%)]" />
                  <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-black/20 px-4 py-2 border border-yellow-400">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-yellow-400 text-black font-black">!</span>
                  <span className="text-sm uppercase font-bold tracking-wider text-white">Info critique : lecture obligatoire pour être éligible</span>
                </div>
                <h3 className="relative text-4xl sm:text-5xl font-black mb-4">CONDITIONS INDISPENSABLES</h3>
                  <p className="relative text-base text-white/90 mb-6 leading-relaxed">
                    Ce sont les règles impératives du dispositif IPM Intersec. Une non-conformité sur un seul point peut suspendre votre accès à la prise en charge. Soigner votre dossier, c’est garantir votre activation prioritaire.
                  </p>
                  <ul className="relative list-decimal list-inside space-y-3 text-white text-lg">
                    <li>Affiliation légale de l’entreprise à jour (Kbis/Registre du Commerce et NINEA déposés)</li>
                    <li>Contrats de travail actuels pour les salariés déclarés + fiche d’effectif actualisée</li>
                    <li>Situation sociale impeccable : obligations URSSAF/PRETAS en règle</li>
                    <li>Absence de litiges RH non résolus sur les 12 derniers mois</li>
                    <li>Engagement écrit du dirigeant signé sur la Charte IPM (santé, prévoyance, sécurité)</li>
                    <li>Dossier complet transmis à INTERSEC pour génération du carnet santé officiel</li>
                  </ul>
                  <div className="mt-6 rounded-xl border-2 border-white/50 bg-black/15 p-4">
                    <p className="font-bold uppercase text-yellow-200">Priorité IPM : dossier complet = traitement accéléré</p>
                    <p className="text-white/85 text-sm">Les dossiers conformes certifiés reçoivent un accusé de réception sous 24h et un accès accéléré à nos praticiens agréés.</p>
                  </div>
                  <div className="mt-6 p-4 bg-white/15 rounded-xl border border-white/30">
                    <p className="text-white/90 font-semibold mb-1">Nouveau: Priorité à l’excellence opérationnelle</p>
                    <p className="text-sm text-white/80">Les bénéficiaires répondant à ces conditions obtiennent un traitement prioritaire et un suivi téléphonique dédié 24h/24.</p>
                  </div>
                </motion.section>

                <motion.section
                  className="relative overflow-hidden rounded-3xl p-8 bg-white border border-gray-200 shadow-2xl"
                  whileHover={{ translateY: -6 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                >
                  <h3 className="text-3xl font-black text-emerald-700 mb-4">DOCUMENTS PREMIUM</h3>
                  <p className="text-gray-600 mb-6">Ces éléments ne sont pas uniquement requis : ils garantissent l’éligibilité IPM et l’optimisation de votre suivi santé collectif.</p>
                  <div className="grid grid-cols-1 gap-2 text-gray-700">
                    <p className="rounded-xl bg-emerald-50 p-3 border border-emerald-100">Copie légalisée de la Carte Nationale d’Identité (participant)</p>
                    <p className="rounded-xl bg-emerald-50 p-3 border border-emerald-100">Photos d’identité (2) pour le participant</p>
                    <p className="rounded-xl bg-emerald-50 p-3 border border-emerald-100">Certificat de mariage enregistré par l’état civil</p>
                    <p className="rounded-xl bg-emerald-50 p-3 border border-emerald-100">Copie légalisée de la CNI de l’épouse</p>
                    <p className="rounded-xl bg-emerald-50 p-3 border border-emerald-100">Photos d’identité (2) pour l’épouse</p>
                    <p className="rounded-xl bg-emerald-50 p-3 border border-emerald-100">Extrait de naissance pour chaque enfant à charge</p>
                    <p className="rounded-xl bg-emerald-50 p-3 border border-emerald-100">Photos d’identité (2) par enfant</p>
                    <p className="rounded-xl bg-emerald-50 p-3 border border-emerald-100">Attestation de prise en charge et d’entretien des enfants (pour bénéficiaires féminines)</p>
                    <p className="rounded-xl bg-emerald-100 p-3 border border-emerald-200 font-semibold">Note : prise en charge jusqu’à 18 ans inclus. 18 ans + ne concerne plus le régime enfant</p>
                  </div>
                </motion.section>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-12 pt-8 border-t border-emerald-200"
              >
                <p className="text-sm text-gray-500 mb-4">Ils nous font confiance</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {['🏥', '💼', '🏢', '👥', '📊'].map((emoji, idx) => (
                    <motion.div
                      key={idx}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.3
                      }}
                      className="text-3xl"
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
