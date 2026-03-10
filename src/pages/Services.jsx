import { motion } from 'framer-motion';
import MainLayout from '../layout/MainLayout';
import { Briefcase, Users, Building2, Truck, Leaf, Scissors, Droplet, Home as HomeIcon, CheckCircle, Clock, Award, Headphones, ArrowRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ icon: Icon, title, description, benefits, image, badge, category }) => {
  return (
    <motion.div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
    >
      {/* Top colored bar */}
      <div className="h-1.5 bg-gradient-to-r from-intersec-green to-intersec-dark"></div>

      {/* Image Banner */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-intersec-green/20 to-intersec-dark/20">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-intersec-green to-intersec-dark">
            <Icon size={80} className="text-white opacity-80" />
          </div>
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Icon Badge - Top Right */}
        <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-full shadow-lg">
          <Icon size={32} className="text-intersec-green" />
        </div>

        {/* Badge - Top Left */}
        {badge && (
          <div className="absolute top-5 left-5 bg-intersec-green text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-10 flex flex-col flex-grow">
        {/* Category Tag */}
        {category && (
          <span className="inline-block w-fit text-xs font-semibold text-intersec-green uppercase tracking-widest mb-3 pb-2 border-b-2 border-intersec-green/30">
            {category}
          </span>
        )}

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-intersec-green transition-colors duration-300 leading-tight">
          {title}
        </h3>

        {/* Divider */}
        <div className="w-16 h-1 bg-intersec-green rounded-full mb-5"></div>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed text-lg flex-grow">
          {description}
        </p>

        {/* Benefits - More professional style */}
        <div className="mb-8 pb-8 border-b-2 border-gray-100">
          <p className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
            <CheckCircle size={18} className="text-intersec-green flex-shrink-0" />
            Caractéristiques & Avantages
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3 text-gray-700 text-sm"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-intersec-green font-bold text-lg leading-none flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-relaxed">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-intersec-green hover:bg-intersec-dark text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 w-full group/btn"
        >
          Demander une consultation
          <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Recrutement & Intérim",
      category: "Ressources Humaines",
      badge: "Expert",
      image: "/img_service_intersec/recrutement.jpg",
      description: "Solutions complètes de recrutement, placement et intérim pour tous vos besoins en ressources humaines avec professionnalisme et efficacité.",
      benefits: ["Candidats pré-qualifiés", "Processus rapide & transparent", "Suivi personnalisé", "Flexibilité contractuelle", "Remplacement garanti"]
    },
    {
      icon: Building2,
      title: "Gardiennage & Sécurité",
      category: "Sécurité",
      badge: "24/7",
      image: "/img_service_intersec/gardiennage.jpg",
      description: "Services de sécurité 24h/24, 7j/7 avec agents formés et équipements modernes pour protéger vos installations.",
      benefits: ["Agents certifiés & formés", "Surveillance continue", "Équipements modernes", "Rapports détaillés", "Intervention rapide"]
    },
    {
      icon: Scissors,
      title: "Nettoyage Professionnel",
      category: "Services Généraux",
      badge: "Éco-Friendly",
      image: "/img_service_intersec/nettoyage.jpg",
      description: "Services de nettoyage et maintenance complète pour tous types de locaux avec produits écologiques certifiés.",
      benefits: ["Équipes expérimentées", "Produits écologiques", "Planification flexible", "Garantie de qualité", "Respect des normes"]
    },
    {
      icon: Briefcase,
      title: "Confection de Tenues",
      category: "Textile & Uniformes",
      badge: "Premium",
      image: "/img_service_intersec/confection_de_tenue.jpg",
      description: "Production d'uniformes et vêtements professionnels personnalisés avec matériaux de haute qualité et finitions impeccables.",
      benefits: ["Designs personnalisés", "Matériaux premium", "Production rapide", "Tarifs avantageux", "Service client réactif"]
    },
    {
      icon: Flame,
      title: "Distribution de Gaz",
      category: "Énergie",
      badge: "Certifié",
      image: "/img_service_intersec/distribution_de_gaz.jpg",
      description: "Distribution fiable et sécurisée de gaz de qualité supérieure pour professionnels et particuliers.",
      benefits: ["Livraison garantie", "Gaz certifié ISO", "Prix compétitifs", "Service d'urgence", "Sécurité renforcée"]
    },
    {
      icon: HomeIcon,
      title: "Services Immobiliers",
      category: "Immobilier",
      badge: "Premium",
      image: "/img_service_intersec/immobilier.jpg",
      description: "Solutions immobilières intégrées : vente, location, gestion et développement avec expertise et transparence.",
      benefits: ["Large portefeuille", "Conseil expert", "Gestion complète", "Rendements optimisés", "Transactions sécurisées"]
    },
    {
      icon: Leaf,
      title: "Agrobusiness",
      category: "Agriculture",
      badge: "Durable",
      image: "/img_service_intersec/agrobusiness.jpg",
      description: "Solutions agricoles intégrées combinant innovation, durabilité et professionnalisme pour optimiser votre production.",
      benefits: ["Expertise technique", "Financement adapté", "Accès aux marchés", "Pratiques durables", "Accompagnement constant"]
    },
    {
      icon: Truck,
      title: "Transport & Logistique",
      category: "Transport",
      badge: "Moderne",
      image: "/img_service_intersec/transport.jpg",
      description: "Services de transport et logistique fiables avec flotte moderne et suivi en temps réel pour vos marchandises.",
      benefits: ["Flotte moderne", "Couverture large", "Assurance complète", "Suivi GPS", "Livraison à temps"]
    }
  ];

  const serviceStats = [
    { label: 'Services Actifs', value: '10+', icon: Award },
    { label: 'Année d\'Expérience', value: '15+', icon: Clock },
    { label: 'Clients Satisfaits', value: '500+', icon: Users },
    { label: 'Support 24/7', value: 'Toujours', icon: Headphones }
  ];

  return (
    <MainLayout>
      <div className="pt-16"></div>
      
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-intersec-dark via-intersec-green to-intersec-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            className="inline-block text-sm font-bold uppercase tracking-widest text-white/80 mb-4 pb-3 border-b border-white/30"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Solutions Professionnelles
          </motion.span>

          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nos Services
          </motion.h1>

          <motion.div
            className="h-1 w-32 bg-white rounded-full mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.p
            className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            10+ services professionnels diversifiés pour soutenir votre croissance économique, opérationnelle et stratégique
          </motion.p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {serviceStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                >
                  <Icon size={28} className="mx-auto mb-3 text-white/80" />
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir INTERSEC ?
            </h2>
            <div className="h-1 w-24 bg-intersec-green rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nos services sont conçus pour l'excellence avec expertise, professionnalisme et intégrité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: 'Excellence Opérationnelle', 
                desc: 'Services de premier ordre avec respect des normes internationales et garantie de qualité', 
                icon: '⭐' 
              },
              { 
                title: 'Équipe Professionnelle', 
                desc: 'Personnel expérimenté, certifié et formé pour assurer votre satisfaction', 
                icon: '👥' 
              },
              { 
                title: 'Solutions Personnalisées', 
                desc: 'Approche flexible adaptée à vos besoins spécifiques et votre contexte', 
                icon: '🎯' 
              },
              { 
                title: 'Disponibilité Maximale', 
                desc: 'Support 24/7 et intervention rapide pour vos situations d\'urgence', 
                icon: '⏱️' 
              },
              { 
                title: 'Tarification Transparente', 
                desc: 'Prix compétitifs sans frais cachés, devis détaillé et contrats clairs', 
                icon: '💰' 
              },
              { 
                title: 'Suivi & Rapports', 
                desc: 'Rapports réguliers, métriques détaillées et amélioration continue garanties', 
                icon: '📊' 
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Main Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Catalogue Complet de Services
            </h2>
            <div className="h-1 w-24 bg-intersec-green rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque service est conçu avec expertise, dédié à votre succès et conforme aux normes internationales
            </p>
          </motion.div>

          {/* 2 Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <ServiceDetail
                key={idx}
                icon={service.icon}
                title={service.title}
                category={service.category}
                badge={service.badge}
                description={service.description}
                benefits={service.benefits}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-32 bg-gradient-to-r from-intersec-dark to-intersec-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Besoin d'une Solution Spécifique ?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Notre équipe d'experts est prête à analyser vos besoins et vous proposer une solution adaptée, personnalisée et rentable
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-intersec-dark hover:bg-gray-100 font-bold text-lg py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Demander une Consultation
                <ArrowRight size={22} />
              </Link>
              <Link
                to="/partnership"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold text-lg py-4 px-10 rounded-xl transition-all"
              >
                Devenir Partenaire
                <ArrowRight size={22} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
