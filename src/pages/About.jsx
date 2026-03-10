import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Heart } from 'lucide-react';
import MainLayout from '../layout/MainLayout';

export default function About() {
  const coreValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous nous engageons à fournir des services d\'excellence dans tous les domaines.',
      emoji: '🎯'
    },
    {
      icon: Users,
      title: 'Partenariat',
      description: 'Nous croyons en la force des partenariats durables et mutuellement bénéfiques.',
      emoji: '🤝'
    },
    {
      icon: CheckCircle,
      title: 'Intégrité',
      description: 'L\'intégrité et la transparence sont au cœur de notre éthique professionnelle.',
      emoji: '💎'
    },
    {
      icon: Heart,
      title: 'Innovation',
      description: 'L\'innovation constante nous permet de rester à la pointe du progrès.',
      emoji: '✨'
    },
    {
      icon: Users,
      title: 'Durabilité',
      description: 'Nos actions et projets visent une durabilité économique et environnementale.',
      emoji: '🌱'
    },
    {
      icon: Heart,
      title: 'Impact Social',
      description: 'Nous nous engageons à avoir un impact positif sur le développement économique.',
      emoji: '🌍'
    }
  ];

  const facts = [
    { number: '10+', label: 'Services' },
    { number: '2', label: 'Filiales' },
    { number: '100+', label: 'Employés' },
    { number: '50+', label: 'Clients' }
  ];

  return (
    <MainLayout>
      <div className="pt-16"></div>
      
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-intersec-dark via-intersec-green to-intersec-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            À Propos d'INTERSEC
          </motion.h1>
          <motion.div
            className="h-1 w-24 bg-white rounded-full mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Découvrez le groupe multiservices qui façonne le développement économique en Afrique de l'Ouest
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-8">Notre Histoire</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong>INTERSEC Group</strong> a été fondée avec une vision claire et ambitieuse : 
                  créer un groupe multiservices capable de répondre aux défis économiques et sociaux 
                  du continent africain, notamment en Afrique de l'Ouest.
                </p>
                <p>
                  Au cœur de notre fondation se trouve la conviction que l'Afrique a besoin de solutions 
                  business intégrées, innovantes et professionnelles. Nos deux filiales phares, 
                  <strong> AB'YNNOV</strong> et <strong>H2i</strong>, incarnent cette philosophie 
                  à travers leurs domaines de spécialisation.
                </p>
                <p>
                  À travers nos services diversifiés et nos partenariats stratégiques, nous avons 
                  construit une organisation robuste et professionnelle, servant des centaines de 
                  clients satisfaits dans plusieurs secteurs clés.
                </p>
                <p>
                  Aujourd'hui, <strong>INTERSEC Group</strong> continue de croître et d'élargir son 
                  empreinte, en misant sur l'innovation, la qualité de service et l'intégrité professionnelle.
                </p>
              </div>
            </motion.div>

            {/* Right - Image Placeholder */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-intersec-green to-intersec-dark rounded-2xl h-96 md:h-[450px] shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-6xl mb-4">🏢</p>
                  <p className="text-2xl font-bold">INTERSEC Group</p>
                  <p className="text-white/90">Multiservices au service du développement</p>
                </div>
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
      <section className="py-28 bg-gradient-to-r from-intersec-green to-intersec-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Prêt à Collaborer avec INTERSEC?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Découvrez comment nous pouvons contribuer à la réalisation de vos objectifs commerciaux
              et votre développement économique.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-intersec-green hover:bg-gray-100 font-bold text-lg py-4 px-10 rounded-lg transition-all"
              >
                Nous Contacter
              </a>
              <a
                href="/filiales"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold text-lg py-4 px-10 rounded-lg transition-all"
              >
                Découvrir Nos Filiales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
