import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Heart, Zap, Globe, Award, TrendingUp, ArrowRight } from 'lucide-react';
import MainLayout from '../layout/MainLayout';
import SectionHeader from '../components/SectionHeader';
import StatsCard from '../components/StatsCard';
import ModernGridCard from '../components/ModernGridCard';

export default function About() {
  const coreValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous nous engageons à fournir des services d\'excellence dans tous les domaines.',
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Users,
      title: 'Partenariat',
      description: 'Nous croyons en la force des partenariats durables et mutuellement bénéfiques.',
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: CheckCircle,
      title: 'Intégrité',
      description: 'L\'intégrité et la transparence sont au cœur de notre éthique professionnelle.',
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: Heart,
      title: 'Innovation',
      description: 'L\'innovation constante nous permet de rester à la pointe du progrès.',
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: Zap,
      title: 'Durabilité',
      description: 'Nos actions et projets visent une durabilité économique et environnementale.',
      gradient: "from-teal-600 to-green-600"
    },
    {
      icon: Globe,
      title: 'Impact Social',
      description: 'Nous nous engageons à avoir un impact positif sur le développement économique.',
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  const stats = [
    { number: '10+', label: 'Services', icon: Award },
    { number: '2', label: 'Filiales', icon: Users },
    { number: '100+', label: 'Employés', icon: TrendingUp },
    { number: '15+', label: 'Années', icon: Target }
  ];

  return (
    <MainLayout>
      <div className="pt-4"></div>
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 -z-10" />
        
        <motion.div
          className="absolute inset-0 -z-10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-1/4 -left-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"
            animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"
            animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            À Propos d'INTERSEC
          </motion.h1>
          
          <motion.div
            className="h-1.5 w-24 bg-white rounded-full mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Le groupe multiservices qui façonne le développement économique en Afrique de l'Ouest
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <StatsCard
                key={idx}
                number={stat.number}
                label={stat.label}
                icon={stat.icon}
                gradient="from-blue-600 to-cyan-600"
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Nos Principes"
            title="Nos Valeurs Fondamentales"
            subtitle="Les principes qui guident chaque action et chaque décision au sein du groupe INTERSEC"
            gradient="from-blue-600 via-purple-600 to-pink-600"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <ModernGridCard
                key={idx}
                title={value.title}
                description={value.description}
                icon={value.icon}
                gradient={value.gradient}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ y: [0, 100, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/2 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ y: [0, -100, 0] }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-20 blur-2xl" />
              <div className="relative bg-white/98 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6 shadow-lg">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  Notre Mission
                </h3>
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  Offrir des solutions multiservices de qualité supérieure qui soutiennent la croissance 
                  économique et créent des opportunités durables pour nos clients, partenaires et communautés. 
                  Nous nous efforçons d'être un partenaire de confiance et d'innovation dans tous les domaines 
                  que nous servons.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20 blur-2xl" />
              <div className="relative bg-white/98 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 shadow-lg">
                  <Globe size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  Notre Vision
                </h3>
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  Devenir le leader incontournable en Afrique de l'Ouest pour les solutions multiservices 
                  intégrées, reconnu pour son excellence opérationnelle, son innovation continuelle et son 
                  impact positif sur le développement économique régional. Nous aspirons à être un catalyseur 
                  de croissance durable et de prospérité partagée.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-24 bg-gradient-to-r from-intersec-dark to-intersec-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            INTERSEC par les Chiffres
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Services Professionnels' },
              { number: '2', label: 'Filiales Stratégiques' },
              { number: '100+', label: 'Collaborateurs' },
              { number: '500+', label: 'Clients Satisfaits' }
            ].map((fact, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl md:text-6xl font-bold mb-3">{fact.number}</p>
                <p className="text-xl font-semibold text-white/90">{fact.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              className="bg-gradient-to-br from-intersec-light to-white border-2 border-intersec-green p-12 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <p className="text-4xl mb-4">🎯</p>
              <h3 className="text-3xl font-bold text-intersec-dark mb-4">Notre Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Fournir des solutions et services multiservices de <strong>qualité supérieure</strong> qui contribuent 
                au <strong>développement économique</strong> et à la <strong>croissance durable</strong> de nos clients, 
                partenaires et communautés en Afrique de l'Ouest et au-delà.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-intersec-dark to-intersec-green text-white p-12 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <p className="text-4xl mb-4">🌟</p>
              <h3 className="text-3xl font-bold mb-4">Notre Vision</h3>
              <p className="text-white/95 text-lg leading-relaxed">
                Être le <strong>groupe multiservices de référence</strong> en Afrique, reconnu pour son excellence opérationnelle, 
                ses innovations constantes, son impact positif sur l'économie continentale et sa contribution 
                au bien-être de ses stakeholders.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Nos Valeurs Fondamentales</h2>
            <div className="h-1 w-24 bg-intersec-green rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ces valeurs guident chaque décision et action au sein d'INTERSEC Group
            </p>
          </motion.div>

          {/* Values Grid - 2 rows x 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white border-l-4 border-intersec-green p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-5xl mb-4">{value.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10 opacity-20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
        </motion.div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">Prêt à Collaborer?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Découvrez comment INTERSEC Group peut contribuer à la réalisation de vos objectifs 
              commerciaux et votre développement économique.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg py-4 px-12 rounded-xl transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Nous Contacter
                <ArrowRight size={22} />
              </motion.a>
              <motion.a
                href="/filiales"
                className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white/10 font-bold text-lg py-4 px-12 rounded-xl transition-all backdrop-blur"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir Nos Filiales
                <ArrowRight size={22} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
