import { motion } from 'framer-motion';
import { CheckCircle, Award, Target, Users, Leaf, Scale, ArrowRight, Shield, TrendingUp, RefreshCw } from 'lucide-react';
import MainLayout from '../layout/MainLayout';
import { Link } from 'react-router-dom';

export default function Quality() {
  const commitments = [
    {
      icon: Target,
      title: 'Amélioration Continue',
      desc: 'Satisfaire et dépasser les attentes de nos clients par une amélioration continue.',
      details: 'Nous nous engageons à analyser régulièrement nos processus et services pour identifier les opportunités d\'amélioration et les mettre en place rapidement.'
    },
    {
      icon: Users,
      title: 'Écoute Active',
      desc: 'Être à l\'écoute de nos clients et de toutes nos parties prenantes.',
      details: 'Nous valorisons les retours de nos clients, collaborateurs et partenaires pour mieux comprendre leurs besoins et adapter nos services en conséquence.'
    },
    {
      icon: Shield,
      title: 'Partenariat Durable',
      desc: 'Maintenir et renforcer les relations de partenariat et de confiance.',
      details: 'Nous construisons des relations à long terme basées sur la transparence, la fiabilité et le respect mutuel avec tous nos partenaires.'
    },
    {
      icon: Award,
      title: 'Excellence',
      desc: 'Assurer l\'excellence de nos services de manière systématique.',
      details: 'L\'excellence n\'est pas un objectif ponctuel mais un engagement permanent. Nous visons la qualité supérieure dans chaque aspect de nos operations.'
    },
    {
      icon: Leaf,
      title: 'Environnement de Travail',
      desc: 'Améliorer continuellement l\'environnement et les conditions de travail.',
      details: 'Nous investissons dans la création d\'un environnement professionnel sain et sécurisé pour nos équipes, favorisant leur développement et leur bien-être.'
    },
    {
      icon: Scale,
      title: 'Conformité Légale',
      desc: 'Être en conformité avec les exigences légales, réglementaires et internes.',
      details: 'Nous nous assurons de respecter toutes les lois et réglementations applicables, ainsi que nos propres standards internes d\'éthique et de gouvernance.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 100 }
    }
  };

  return (
    <MainLayout>
      <div className="pt-16"></div>

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-intersec-dark via-indigo-900 to-intersec-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl"
            animate={{ x: [0, 60, 0], y: [0, -60, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-intersec-green blur-3xl opacity-40"
            animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 0.85, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          ></motion.div>
          <motion.div 
            className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-cyan-400 blur-3xl opacity-20"
            animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ y: [0, -15, 0] }}
              whileInView={{ opacity: 1, y: [0, -15, 0], scale: 1 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-intersec-light to-intersec-green">Politique</span> <span className="text-intersec-light">Qualité</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Notre engagement envers l'excellence et la satisfaction de nos clients
            </motion.p>
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                borderColor: ['rgba(255,255,255,0.3)', 'rgba(34,139,34,0.5)', 'rgba(255,255,255,0.3)']
              }}
              transition={{ 
                duration: 0.6, 
                delay: 0.5,
                borderColor: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }}
            >
              <Award size={20} className="text-intersec-light" />
              <span className="text-white font-semibold">ISO 9001:2015 Certifiée</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Quality Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <motion.div 
            className="absolute top-20 right-0 w-96 h-96 rounded-full bg-intersec-green blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.h2 
                className="text-5xl font-bold text-gray-900 mb-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                À Propos de Notre <span className="text-intersec-green">Politique</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                INTERIM SECURITE (INTERSEC) SARL est une société spécialisée dans les services intérimaires créée en 1992. Dès sa création, notre objectif principal a été de devenir un leader dans le secteur de l'intérim et de nous positionner parmi les sociétés les plus innovatrices au Sénégal.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                Pour atteindre cet objectif, nous nous sommes inscrits dans une démarche d'amélioration continue de notre qualité visant la satisfaction de nos clients et de nos parties intéressées.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                Depuis plus de 30 ans, nous évoluons sur le marché sénégalais avec un engagement constant envers l'excellence. Notre politique qualité reflète cet engagement et guide chacune de nos décisions et actions quotidiennes.
              </motion.p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-intersec-green/20 flex items-center justify-center">
                    <CheckCircle className="text-intersec-green" size={24} />
                  </div>
                  <span className="font-semibold text-gray-900">Fondée en 1992</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-intersec-green/20 flex items-center justify-center">
                    <Award className="text-intersec-green" size={24} />
                  </div>
                  <span className="font-semibold text-gray-900">ISO 9001:2015</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              {[
                { number: '30+', label: 'Années d\'Expérience' },
                { number: '1000+', label: 'Clients Satisfaits' },
                { number: '100%', label: 'Satisfaction' },
                { number: '∞', label: 'Engagement' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-intersec-light via-white to-intersec-light/50 p-10 rounded-3xl shadow-xl border-t-4 border-intersec-green group overflow-hidden relative"
                  initial={{ opacity: 0, y: 40, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: idx * 0.15, type: 'spring', stiffness: 150 }}
                  viewport={{ once: true, margin: '-100px' }}
                  whileHover={{ y: -16, scale: 1.1, boxShadow: '0 40px 80px rgba(34, 139, 34, 0.3)' }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-intersec-green/15 rounded-full blur-2xl group-hover:bg-intersec-green/30 transition-all"></div>
                  <motion.p 
                    className="text-5xl font-black text-intersec-green mb-3 drop-shadow-lg relative z-10"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-gray-800 font-bold text-lg relative z-10">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Objectives Section */}
      <section className="py-20 bg-intersec-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2 
              className="text-5xl font-bold text-gray-900 mb-4"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Notre <span className="text-intersec-green">Vision</span> et Nos Objectifs
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Vision */}
            <motion.div
              className="bg-gradient-to-br from-white via-intersec-light/20 to-white p-12 rounded-3xl shadow-2xl border-t-4 border-intersec-green group overflow-hidden relative"
              initial={{ opacity: 0, x: -50, rotateY: 20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 120 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -24, boxShadow: '0 50px 100px rgba(34, 139, 34, 0.25)' }}
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-intersec-green/20 rounded-full blur-3xl group-hover:bg-intersec-green/40 transition-all duration-500"></div>
              <motion.div
                className="inline-flex p-5 bg-gradient-to-br from-intersec-green to-emerald-700 rounded-2xl mb-6 shadow-xl group-hover:shadow-2xl relative z-10"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Target className="text-white drop-shadow-lg" size={40} />
              </motion.div>
              <h3 className="text-4xl font-black text-intersec-green mb-4 relative z-10">Notre Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold relative z-10">
                Devenir un leader incontournable dans le secteur de l'intérim au Sénégal et en Afrique de l'Ouest, reconnu pour notre engagement inébranlable envers l'excellence, l'innovation et la satisfaction de nos clients.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium relative z-10">
                Nous aspirons à être la référence en matière de qualité des services, d'éthique professionnelle et de responsabilité sociale, tout en contribuant au développement économique de nos communautés.
              </p>
            </motion.div>

            {/* Objectives */}
            <motion.div
              className="bg-gradient-to-br from-white via-intersec-light/20 to-white p-12 rounded-3xl shadow-2xl border-t-4 border-intersec-green group overflow-hidden relative"
              initial={{ opacity: 0, x: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 120 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -24, boxShadow: '0 50px 100px rgba(34, 139, 34, 0.25)' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-700/20 rounded-full blur-3xl group-hover:bg-emerald-700/40 transition-all duration-500"></div>
              <motion.div
                className="inline-flex p-5 bg-gradient-to-br from-intersec-green to-emerald-700 rounded-2xl mb-6 shadow-xl group-hover:shadow-2xl relative z-10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Award className="text-white drop-shadow-lg" size={40} />
              </motion.div>
              <h3 className="text-4xl font-black text-intersec-green mb-4 relative z-10">Nos Objectifs</h3>
              <ul className="space-y-4">
                {[
                  'Satisfaire et dépasser les attentes de nos clients',
                  'Maintenir une certification ISO 9001:2015 active',
                  'Améliorer continuellement nos processus',
                  'Former et développer nos équipes',
                  'Renforcer nos partenariats stratégiques',
                  'Innover dans nos services et approches'
                ].map((obj, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 group relative z-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 12 }}
                  >
                    <motion.div
                      className="flex-shrink-0 mt-1 p-1.5 bg-gradient-to-br from-intersec-green/30 to-emerald-700/30 rounded-full shadow-md"
                      whileHover={{ scale: 1.4, rotate: 180, boxShadow: '0 10px 25px rgba(34, 139, 34, 0.3)' }}
                    >
                      <CheckCircle className="text-intersec-green drop-shadow-md" size={20} />
                    </motion.div>
                    <span className="text-gray-700 group-hover:text-intersec-green transition-colors font-semibold text-lg">
                      {obj}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2 
              className="text-5xl font-bold text-gray-900 mb-4"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Nos <span className="text-intersec-green">Engagements</span> Qualité
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Chez INTERSEC SARL, la satisfaction maximale de nos clients est notre priorité absolue
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {commitments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-white via-intersec-light/15 to-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-intersec-green group overflow-hidden relative"
                  variants={itemVariants}
                  whileHover={{ y: -28, scale: 1.1, boxShadow: '0 50px 100px rgba(34, 139, 34, 0.3)' }}
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-intersec-green/20 rounded-full blur-2xl group-hover:bg-intersec-green/40 transition-all group-hover:scale-150"></div>
                  <motion.div
                    className="inline-flex mb-6 p-5 bg-gradient-to-br from-intersec-green to-emerald-700 rounded-2xl shadow-2xl group-hover:shadow-3xl relative z-10"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    whileHover={{ scale: 1.4, rotate: 720 }}
                  >
                    <Icon className="text-white drop-shadow-lg" size={36} />
                  </motion.div>
                  <h3 className="text-26 font-black text-gray-900 mb-4 group-hover:text-intersec-green transition-colors relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-semibold mb-4 relative z-10">
                    {item.desc}
                  </p>
                  <p className="text-gray-600 leading-relaxed font-medium relative z-10">
                    {item.details}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2 
              className="text-5xl font-bold text-gray-900 mb-4"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Nos <span className="text-intersec-green">Axes</span> Prioritaires
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              {
                title: 'Amélioration Qualité',
                items: [
                  'Amélioration continue de la qualité des services',
                  'Excellence opérationnelle',
                  'Gestion des risques qualité'
                ]
              },
              {
                title: 'Conformité Légale',
                items: [
                  'Respect des exigences légales et réglementaires',
                  'Conformité avec les normes ISO 9001:2015',
                  'Audits périodiques de conformité'
                ]
              },
              {
                title: 'Développement Humain',
                items: [
                  'Amélioration continue des compétences',
                  'Environnement de travail positif',
                  'Formation et accompagnement des équipes'
                ]
              },
              {
                title: 'Engagement Client',
                items: [
                  'Écoute active et communication',
                  'Satisfaction client prioritaire',
                  'Relations de partenariat durables'
                ]
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-white via-intersec-light/20 to-white p-12 rounded-3xl shadow-2xl border-t-4 border-intersec-green group overflow-hidden relative"
                variants={itemVariants}
                whileHover={{ y: -28, scale: 1.08, boxShadow: '0 50px 100px rgba(34, 139, 34, 0.3)' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-intersec-green/20 rounded-full blur-2xl group-hover:bg-intersec-green/40 transition-all group-hover:scale-150"></div>
                <motion.h3 
                  className="text-28 font-black text-intersec-green mb-8 relative z-10"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.3 }}
                >
                  {pillar.title}
                </motion.h3>
                <motion.ul 
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {pillar.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 group relative z-10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 12 }}
                    >
                      <motion.div
                        className="flex-shrink-0 mt-1 p-1.5 bg-gradient-to-br from-intersec-green/30 to-emerald-700/30 rounded-full shadow-md"
                        whileHover={{ scale: 1.4, rotate: 180, boxShadow: '0 10px 25px rgba(34, 139, 34, 0.3)' }}
                      >
                        <CheckCircle className="text-intersec-green drop-shadow-md" size={20} />
                      </motion.div>
                      <span className="text-gray-700 group-hover:text-intersec-green transition-colors font-semibold text-lg">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2 
              className="text-5xl font-bold text-gray-900 mb-4"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Mise en <span className="text-intersec-green">Œuvre</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Comment nous concrétisons notre politique qualité au quotidien
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              {
                icon: Shield,
                title: 'Système de Management',
                description: 'Nous mettons en œuvre un système de management de la qualité conforme à la norme ISO 9001:2015. Ce système garantit une approche structurée et cohérente de la gestion de la qualité.',
                points: ['Documentation complète', 'Processus définis', 'Responsabilités claires', 'Traçabilité totale']
              },
              {
                icon: Users,
                title: 'Implication des Équipes',
                description: 'Chaque membre de notre équipe est responsable de la qualité. Nous investissons dans la formation et le développement continu de nos collaborateurs.',
                points: ['Formations régulières', 'Sensibilisation qualité', 'Autonomie d\'action', 'Reconnaissance des efforts']
              },
              {
                icon: TrendingUp,
                title: 'Audit & Suivi',
                description: 'Nous effectuons des audits internes périodiques et conservons des données pour mesurer notre performance et identifier les axes d\'amélioration.',
                points: ['Audits trimestriels', 'Tableaux de bord', 'Indicateurs de performance', 'Rapports mensuels']
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-white via-intersec-light/15 to-white p-12 rounded-3xl shadow-2xl border-l-4 border-intersec-green group overflow-hidden relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15, type: 'spring', stiffness: 120 }}
                  viewport={{ once: true, margin: '-100px' }}
                  whileHover={{ y: -28, boxShadow: '0 50px 100px rgba(34, 139, 34, 0.3)' }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-intersec-green/20 rounded-full blur-2xl group-hover:bg-intersec-green/40 transition-all group-hover:scale-150"></div>
                  <motion.div
                    className="inline-flex p-5 bg-gradient-to-br from-intersec-green to-emerald-700 rounded-2xl shadow-2xl group-hover:shadow-3xl mb-8 relative z-10"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    whileHover={{ scale: 1.4, rotate: 180 }}
                  >
                    <Icon className="text-white drop-shadow-lg" size={40} />
                  </motion.div>
                  <h3 className="text-26 font-black text-gray-900 mb-4 relative z-10">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-8 font-semibold relative z-10">{item.description}</p>
                  <ul className="space-y-3">
                    {item.points.map((point, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 text-gray-700 font-medium relative z-10"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.span 
                          className="w-3 h-3 rounded-full bg-gradient-to-br from-intersec-green to-emerald-700 flex-shrink-0 shadow-md"
                          whileHover={{ scale: 1.5 }}
                        ></motion.span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ISO 9001:2015 Explanation */}
          <motion.div
            className="mt-20 bg-gradient-to-br from-white via-intersec-light/20 to-white p-16 rounded-3xl shadow-2xl border-t-4 border-intersec-green group overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-intersec-green/20 rounded-full blur-3xl group-hover:bg-intersec-green/40 transition-all"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-700/20 rounded-full blur-3xl group-hover:bg-emerald-700/40 transition-all"></div>
            <h3 className="text-4xl font-black text-intersec-green mb-8 relative z-10">Pourquoi ISO 9001:2015?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
                  La norme ISO 9001:2015 est la norme internationale de référence pour les systèmes de management de la qualité. Elle nous aide à :
                </p>
                <ul className="space-y-4">
                  {[
                    'Établir des processus efficaces et cohérents',
                    'Satisfaire les exigences des clients',
                    'Améliorer continuellement nos opérations',
                    'Réduire les risques et les inefficacités',
                    'Démontrer notre engagement envers la qualité'
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-4 text-gray-700 font-medium text-lg group-hover:text-intersec-green transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-intersec-green/30 to-emerald-700/30 flex items-center justify-center shadow-md"
                        whileHover={{ scale: 1.3, boxShadow: '0 10px 25px rgba(34, 139, 34, 0.3)' }}
                      >
                        <span className="w-5 h-5 rounded-full bg-gradient-to-br from-intersec-green to-emerald-700 drop-shadow-lg"></span>
                      </motion.span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div 
                className="bg-gradient-to-br from-intersec-light/50 to-white p-10 rounded-2xl border border-intersec-green/30 shadow-xl"
                whileHover={{ boxShadow: '0 30px 60px rgba(34, 139, 34, 0.2)' }}
              >
                <h4 className="text-3xl font-black text-intersec-green mb-6 flex items-center gap-3">
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-intersec-green to-emerald-700 rounded-xl shadow-lg"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  >
                    <RefreshCw className="w-6 h-6 text-white drop-shadow-lg" />
                  </motion.div>
                  Révisions Régulières
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed font-semibold">
                  Notre politique qualité est révisée régulièrement lors de nos revues de direction, en tenant compte de l'évolution du contexte de notre société.
                </p>
                <p className="text-gray-800 font-black text-lg">
                  Cela nous permet de rester en phase avec les meilleures pratiques du secteur et les attentes de nos parties prenantes.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-intersec-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full bg-intersec-green blur-3xl"
            animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-12 rounded-2xl border border-white/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.blockquote 
              className="text-3xl md:text-4xl font-black text-white mb-12 leading-relaxed italic drop-shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              "Je m'engage à mettre en œuvre tous les moyens nécessaires pour rendre effective la mise en place du système de management de la qualité conforme à la norme ISO 9001:2015 au sein d'INTERSEC SARL."
            </motion.blockquote>

            <motion.div
              className="text-right space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.div 
                className="inline-block relative group"
                whileHover={{ scale: 1.08 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-intersec-light/40 to-white/40 rounded-lg blur group-hover:blur-md transition-all -z-10"></div>
                <div className="relative px-6 py-4">
                  <p className="text-3xl font-black text-intersec-light drop-shadow-lg mb-2">
                    Madame Abibatou GUEYE
                  </p>
                  <p className="text-white/90 text-xl font-bold drop-shadow-lg">
                    La Directrice Générale
                  </p>
                </div>
              </motion.div>
              <p className="text-white/70 text-lg font-semibold drop-shadow-lg">
                Dakar, le 10 juillet 2023
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-intersec-light via-white to-intersec-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-intersec-green blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2 
              className="text-5xl font-bold text-gray-900 mb-6"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Rejoignez Nous dans Cette <span className="text-intersec-green">Démarche</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Nous sommes engagés à fournir des services de qualité répondant à vos attentes et dépassant vos expectations.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-8 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <Link
                to="/contact"
                className="relative group overflow-hidden"
              >
                <motion.div
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-intersec-green via-emerald-600 to-emerald-700 hover:from-intersec-dark hover:via-intersec-green hover:to-emerald-700 text-white font-black py-6 px-14 rounded-2xl transition-all shadow-2xl hover:shadow-3xl drop-shadow-xl relative z-10"
                  whileHover={{ scale: 1.08, y: -8, boxShadow: '0 40px 80px rgba(34, 139, 34, 0.4)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="text-lg">Nous Contacter</span>
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight size={28} className="drop-shadow-lg" />
                  </motion.div>
                </motion.div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-all rounded-2xl"></div>
              </Link>
              <Link
                to="/about"
                className="relative group overflow-hidden"
              >
                <motion.div
                  className="inline-flex items-center justify-center gap-3 border-3 border-intersec-green text-intersec-green hover:bg-gradient-to-r hover:from-intersec-green hover:to-emerald-700 hover:text-white hover:shadow-2xl font-black py-6 px-14 rounded-2xl transition-all shadow-lg drop-shadow-xl relative z-10"
                  whileHover={{ scale: 1.08, y: -8, boxShadow: '0 40px 80px rgba(34, 139, 34, 0.3)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="text-lg">En Savoir Plus</span>
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight size={28} className="drop-shadow-lg" />
                  </motion.div>
                </motion.div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-all rounded-2xl"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
