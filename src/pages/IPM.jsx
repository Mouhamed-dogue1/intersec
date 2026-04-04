import { motion } from 'framer-motion';
import { Shield, Users, CheckCircle, TrendingUp, Clock, Award, Star, Zap, Heart, Target, FileText, Phone, ArrowRight, Building2 } from 'lucide-react';

export default function IPM() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="text-gray-800 bg-white overflow-hidden">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6 border border-white/20"
              >
                <Shield size={16} />
                Institut de Prévoyance Maladie
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
              >
                IPM INTERSEC
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200 mt-2"
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
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8 max-w-xl"
              >
                Révolutionnez la protection sociale de vos collaborateurs avec notre solution digitale, transparente et adaptée aux réalités du Sénégal.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold text-lg rounded-2xl hover:bg-gray-50 transition-all shadow-2xl"
                >
                  Découvrir l'IPM
                  <ArrowRight size={20} />
                </motion.a>
                <motion.a
                  href="#faq"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Questions fréquentes
                  <Zap size={20} />
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-3 gap-6"
              >
                {[
                  { number: "150+", label: "Entreprises" },
                  { number: "98%", label: "Satisfaction" },
                  { number: "72h", label: "Délai" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    className="text-center"
                  >
                    <motion.div
                      className="text-3xl font-black text-white mb-2"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.3
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-white/80 text-sm font-semibold">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Logo Right - ENLARGED & STUNNING */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center items-center"
            >
              <motion.div
                className="relative"
                animate={{
                  y: [0, -40, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Multiple Glow Layers for Enhanced Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-4xl scale-150"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1.4, 1.6, 1.4]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-100"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                />
                
                {/* Logo - MUCH LARGER */}
                <motion.div
                  className="relative"
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img
                    src="/img_service_intersec/IPM.png"
                    alt="Logo IPM Intersec"
                    className="relative w-96 h-96 object-contain drop-shadow-2xl filter brightness-110 contrast-110"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE IPM ==================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-semibold mb-4"
            >
              <Award size={16} />
              Pourquoi INTERSEC ?
            </motion.div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              L'excellence en protection sociale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une IPM sénégalaise, agréée et transparente, dédiée à vos équipes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Cadre sécurisé',
                description: "Respect des lois 75-50 et 75-895, gouvernance validée par le ministère du Travail.",
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Users,
                title: 'Couverture complète',
                description: 'Soins, hospitalisation, urgences, maternité et réseaux de santé agréés partout.',
                color: 'from-emerald-500 to-emerald-600'
              },
              {
                icon: TrendingUp,
                title: 'Gestion digitale',
                description: 'Tableau de bord RH transparent, rapports trimestriels et suivi en temps réel.',
                color: 'from-purple-500 to-purple-600'
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{
                    y: -25,
                    boxShadow: "0 40px 80px rgba(0,0,0,0.15)"
                  }}
                  className="group relative bg-white rounded-3xl p-10 shadow-lg border border-gray-100 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient Overlay on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-6 shadow-lg relative z-10`}
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon size={36} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                    {item.description}
                  </p>

                  {/* Accent Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS SECTION ==================== */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-semibold mb-4"
            >
              <CheckCircle size={16} />
              Processus simplifié
            </motion.div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              4 étapes vers votre protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement personnalisé du début à la mise en place finale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full" />

            {[
              {
                step: '1',
                title: 'Analyse',
                text: 'Revue complète et préconisations.',
                icon: Users,
                color: 'from-blue-500 to-blue-600'
              },
              {
                step: '2',
                title: 'Dossier',
                text: 'Collecte et paramétrage complet.',
                icon: FileText,
                color: 'from-emerald-500 to-emerald-600'
              },
              {
                step: '3',
                title: 'Mise en place',
                text: 'Lancement plateforme et formation.',
                icon: Zap,
                color: 'from-purple-500 to-purple-600'
              },
              {
                step: '4',
                title: 'Suivi',
                text: 'Rapports et optimisation continue.',
                icon: TrendingUp,
                color: 'from-orange-500 to-red-500'
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -20 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full relative overflow-hidden transition-all duration-300">
                    {/* Background Gradient Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-8 transition-opacity duration-300`}
                    />
                    
                    {/* Step Number - LARGER & BOLDER */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white font-black text-3xl mb-6 shadow-lg relative z-10`}
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                    >
                      {item.step}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-6 shadow-lg relative z-10`}
                      animate={{
                        rotate: [0, 8, -8, 0],
                        scale: [1, 1.05, 1.05, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.3
                      }}
                    >
                      <Icon size={28} />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed relative z-10 group-hover:text-gray-100 transition-colors duration-300">
                      {item.text}
                    </p>

                    {/* Bottom Accent */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== ELIGIBILITY CONDITIONS ==================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold mb-4"
            >
              <CheckCircle size={16} />
              Critères d'adhésion
            </motion.div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Les 3 principes pour rejoindre IPM INTERSEC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une adhésion simple et transparente pour vos collaborateurs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Relation de travail établie',
                description: 'Le collaborateur doit disposer d\'un contrat de travail en cours de validité (CDI, CDD, ou contrat équivalent reconnu par la loi locale).',
                icon: FileText,
                color: 'from-blue-500 to-blue-600'
              },
              {
                step: '02',
                title: 'Adhésion formelle de l\'entreprise',
                description: 'L\'employeur adhère à IPM INTERSEC en tant que membre affilié et accepte les termes de la couverture collective proposée.',
                icon: Building2,
                color: 'from-emerald-500 to-emerald-600'
              },
              {
                step: '03',
                title: 'Dossier d\'inscription complet',
                description: 'Le collaborateur fournit les documents requis pour constituer son dossier médical sécurisé et son carnet de santé numérique.',
                icon: Shield,
                color: 'from-purple-500 to-purple-600'
              },
            ].map((condition, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -25 }}
                className="group bg-white rounded-3xl p-10 shadow-lg border border-gray-100 relative overflow-hidden transition-all duration-300"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${condition.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${condition.color} text-white font-black text-2xl mb-6 shadow-lg relative z-10`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                >
                  {condition.step}
                </motion.div>

                <motion.div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${condition.color} text-white mb-6 shadow-lg relative z-10`}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <condition.icon size={28} />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors relative z-10">
                  {condition.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                  {condition.description}
                </p>

                {/* Bottom Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${condition.color}`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border-2 border-blue-200"
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex p-3 rounded-xl bg-blue-100 text-blue-600 flex-shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">📋 Important à savoir</h3>
                <p className="text-gray-700 leading-relaxed">
                  La couverture s'active dès le jour d'acceptation du dossier complet par IPM INTERSEC. Les enfants sont couverts jusqu'à leurs 18 ans, moment auquel ils deviennent autonomes dans leurs démarches de santé. Tous les documents peuvent être transmis en version numérique sécurisée via notre portail certifié.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== REQUIRED DOCUMENTS ==================== */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold mb-4"
            >
              <FileText size={16} />
              Dossier d'inscription
            </motion.div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Pièces nécessaires pour votre carnet de santé numérique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus fluide et sécurisé pour activer votre couverture santé complète.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Colonne 1 - Pièces du Bénéficiaire Principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold mb-8"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Users size={18} />
                Pour le bénéficiaire principal
              </motion.div>

              <div className="space-y-4">
                {[
                  { doc: 'Copie légalisée de la Carte Nationale d\'Identité', detail: 'Recto-verso obligatoire pour vérification' },
                  { doc: '2 photos d\'identité couleur', detail: '4x4cm minimum, fond blanc, visage net' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ 
                      x: 10,
                      boxShadow: "0 20px 50px rgba(59, 130, 246, 0.25)"
                    }}
                    className="group p-6 bg-white rounded-2xl shadow-md border-l-4 border-blue-500 hover:border-blue-600 transition-all overflow-hidden relative"
                  >
                    {/* Background Gradient Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        className="inline-flex p-2 rounded-lg bg-blue-100 text-blue-600 flex-shrink-0 mt-1"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CheckCircle size={22} />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 font-bold mb-1 text-lg group-hover:text-blue-700 transition-colors">{item.doc}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Colonne 2 - Pièces Famille */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-700 font-semibold mb-8"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Heart size={18} />
                Pour les ayants-droit
              </motion.div>

              <div className="space-y-4">
                {[
                  { doc: 'Certificat de mariage enregistré', detail: 'Signé par l\'état civil officiel' },
                  { doc: 'Copie légalisée CNI du conjoint', detail: 'Si application mutuelle de couverture' },
                  { doc: '2 photos d\'identité du conjoint', detail: '4x4cm, mêmes normes que le assuré principal' },
                  { doc: 'Extrait de naissance par enfant', detail: 'Récent et officiel (moins de 3 mois)' },
                  { doc: '2 photos d\'identité par enfant', detail: 'Jusqu\'à l\'âge de 18 ans révolus' },
                  { doc: 'Justificatif de charge des enfants', detail: 'Pour les mères désirant assurer leurs enfants' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ 
                      x: -10,
                      boxShadow: "0 20px 50px rgba(34, 197, 94, 0.25)"
                    }}
                    className="group p-6 bg-white rounded-2xl shadow-md border-l-4 border-green-500 hover:border-green-600 transition-all overflow-hidden relative"
                  >
                    {/* Background Gradient Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        className="inline-flex p-2 rounded-lg bg-green-100 text-green-600 flex-shrink-0 mt-1"
                        whileHover={{ scale: 1.2, rotate: -15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CheckCircle size={22} />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 font-bold mb-1 text-lg group-hover:text-green-700 transition-colors">{item.doc}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 space-y-6"
          >
            <motion.div
              className="p-8 bg-white rounded-3xl shadow-lg border-2 border-amber-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="flex items-start gap-4 relative z-10">
                <motion.div 
                  className="inline-flex p-3 rounded-xl bg-amber-100 text-amber-600 flex-shrink-0"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Zap size={28} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">⚡ À retenir obligatoirement</h3>
                  <ul className="text-gray-700 space-y-2 leading-relaxed">
                    <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">✓</span> Les enfants sont couverts jusqu'à l'âge de 18 ans maximum</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">✓</span> Tous les documents peuvent être téléchargés numériquement via notre plateforme sécurisée</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">✓</span> Les copies doivent être lisibles et dans leur contexte légal complet</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">✓</span> Vous disposez de 48h pour soumettre l'intégralité du dossier après initiation</li>
                  </ul>
                </div>
              </div>

              {/* Bottom Accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </motion.div>

            <motion.div
              className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-lg border-2 border-emerald-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="flex items-start gap-4 relative z-10">
                <motion.div 
                  className="inline-flex p-3 rounded-xl bg-emerald-100 text-emerald-600 flex-shrink-0"
                  whileHover={{ scale: 1.15, rotate: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Award size={28} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">🎯 Notre engagement premium</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Nos équipes SPE vous accompagnent <span className="font-bold text-emerald-700">gratuitement</span> dans la collecte et la transmission sécurisée de tous les documents. Pas de stress, pas de complications. Nous gérons tout pour que vous soyez protégé au plus vite possible avec un support 24/7.
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-semibold mb-4"
            >
              <Star size={16} />
              Résultats confirmés
            </motion.div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Chiffres qui inspirent confiance
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '150+', label: 'Entreprises protégées', icon: Users, color: 'from-blue-500 to-blue-600' },
              { value: '98%', label: 'Satisfaction clients', icon: Heart, color: 'from-red-500 to-pink-600' },
              { value: '72h', label: 'Prise en charge', icon: Clock, color: 'from-orange-500 to-red-500' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300"
                >
                  {/* Icon Top */}
                  <div className={`h-24 bg-gradient-to-r ${stat.color} flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Icon size={48} className="text-white drop-shadow-lg" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8 text-center">
                    <motion.div
                      className={`text-6xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-lg font-bold text-gray-700">{stat.label}</p>
                  </div>

                  {/* Bottom Line */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${stat.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 + 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section id="faq" className="py-24 bg-gradient-to-br from-emerald-700 via-teal-600 to-cyan-600 relative overflow-hidden">
        {/* Background Effects */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold mb-4 border border-white/30"
            >
              <Zap size={16} />
              Questions fréquentes
            </motion.div>
            <h2 className="text-5xl font-black text-white mb-6">
              FAQ IPM INTERSEC
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Réponses claires aux questions les plus fréquentes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { q: 'Qui peut adhérer ?', a: 'Toutes les entreprises et leurs salariés, contrats CDI/CDD et saisonniers.' },
              { q: 'Delai de mise en place ?', a: 'Sous 48h après validation des documents et signature du contrat.' },
              { q: 'Quels remboursements ?', a: 'Consultations, analyses, hospitalisation, urgences, maternité et pharmacie.' },
              { q: 'Suivi des cotisations ?', a: 'Tableau de bord sécurisé 24/7, alertes et rapports trimestriels.' },
              { q: 'Garanties personnalisées ?', a: 'Oui, 3 formules Standard/Confort/Premium modifiables sur mesure.' },
              { q: 'Avantages fiscaux ?', a: 'Déduction des cotisations, exonération charges sociales et optimisation légale.' },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
                  y: -10
                }}
                className="group bg-white text-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 relative overflow-hidden"
              >
                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <motion.h3
                  className="font-bold text-lg mb-4 text-emerald-700 relative z-10 flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <motion.span
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 text-sm font-bold"
                    whileHover={{ scale: 1.15, rotate: 15 }}
                  >
                    Q
                  </motion.span>
                  {faq.q}
                </motion.h3>
                <motion.div
                  className="flex gap-3 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + idx * 0.1 }}
                >
                  <div className="text-emerald-600 font-black mt-1">→</div>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900">
                    {faq.a}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-semibold mb-6"
          >
            <Star size={16} />
            Prêt à démarrer ?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-black text-gray-900 mb-6"
          >
            Déployez votre IPM INTERSEC
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              dès maintenant
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Un consultant dédié vous accompagne jusqu'à l'agrément final avec un plan d'action opérationnel et un suivi RH complet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 30px 60px rgba(16, 185, 129, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl font-black text-lg hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-xl relative overflow-hidden"
            >
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <Target size={22} />
              <span className="relative">Demander une étude gratuite</span>
            </motion.a>
            <motion.a
              href="tel:+221338353108"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 30px 60px rgba(16, 185, 129, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-5 border-2 border-emerald-600 text-emerald-600 rounded-2xl font-black text-lg hover:bg-emerald-50 transition-all relative overflow-hidden"
            >
              {/* Background Fill Effect */}
              <motion.div
                className="absolute inset-0 bg-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileHover={{ clipPath: "inset(0 0 0 0)" }}
                transition={{ duration: 0.4 }}
              />
              <Phone size={22} className="relative z-10" />
              <span className="relative z-10">+221 33 835 3108</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
