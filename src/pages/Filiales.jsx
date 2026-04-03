import { motion } from 'framer-motion';
import MainLayout from '../layout/MainLayout';
import { Briefcase, BarChart3, ArrowRight, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Filiales() {
  const filiales = [
    {
      name: "AB'YNNOV",
      badge: "AB'YNNOV AND CO",
      location: "Dakar, Sénégal",
      description: "Filiale spécialisée dans le bâtiment, l'agriculture et le commerce international.",
      logo: "/ab'ynnov.png",
      accentColor: "#2F6FB6",
      primaryColor: "#4A4A4A",
      secondaryColor: "#D9D9D9",
      accentBg: "#9FA3A7",
      badgeColor: "#2F6FB6",
      badgeBg: "#FFFFFF",
      borderColor: "#9FA3A7",
      domains: [
        "BTP & Immobilier",
        "Agrobusiness",
        "Événementiel",
        "Commerce général",
        "Import / Export",
        "Transport"
      ],
      details: [
        "Expertise en construction immobilière moderne",
        "Solutions d'import/export clés en main",
        "Développement de projets agricoles durables",
        "Organisation d'événements professionnels",
        "Commerce de produits diversifiés"
      ]
    },
    {
      name: "H2i",
      badge: "HOLDING INTERIM INTERNATIONAL",
      location: "Dakar, Sénégal",
      description: "Spécialiste du recrutement, de l'intérim, de l'audit et du conseil en entreprise.",
      logo: "/h2i.png",
      accentColor: "#1F7A3A",
      primaryColor: "#3B73AE",
      secondaryColor: "#0F6A8B",
      accentBg: "#9FD3E6",
      badgeColor: "#3B73AE",
      badgeBg: "#F2F2F2",
      borderColor: "#DADADA",
      domains: [
        "Recrutement",
        "Intérim",
        "Audit",
        "Conseil"
      ],
      details: [
        "Recrutement de talents qualifiés",
        "Services d'intérim adaptés à vos besoins",
        "Audit et diagnostic organisationnel",
        "Conseil en gestion et stratégie",
        "Formation et développement des compétences"
      ]
    }
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-intersec-dark via-intersec-green to-intersec-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nos Filiales
          </motion.h1>
          <motion.div
            className="h-1 w-20 bg-white rounded-full mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Découvrez nos filiales spécialisées dans divers domaines d'excellence et d'innovation.
          </motion.p>
        </div>
      </section>

      {/* Filiales Cards - Côte à Côte */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Global Background */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{ backgroundColor: '#2F6FB6' }}
          />
          <div 
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
            style={{ backgroundColor: '#3B73AE' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="mb-16 text-center">
            <motion.h2
              className="text-5xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Nos Filiales d'Excellence
            </motion.h2>
            <motion.div
              className="h-1 w-24 rounded-full mx-auto mb-6"
              style={{ backgroundColor: '#2F6FB6' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Deux expertises complémentaires pour une couverture complète de vos besoins
            </motion.p>
          </div>

          {/* Grid Côte à Côte */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Filiale 1: AB'YNNOV */}
            <motion.div
              className="flex flex-col rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: `3px solid ${filiales[0].accentColor}`,
                boxShadow: `0 20px 50px rgba(47, 111, 182, 0.2)`
              }}
              initial={{ opacity: 0, x: -50, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, boxShadow: `0 30px 70px rgba(47, 111, 182, 0.3)` }}
            >
              {/* Image Banner */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={filiales[0].logo}
                  alt={filiales[0].name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: filiales[0].accentColor }}
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Badge */}
                <div className="mb-4">
                  <span 
                    className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest"
                    style={{ 
                      backgroundColor: `${filiales[0].accentColor}20`,
                      color: filiales[0].accentColor, 
                      border: `2px solid ${filiales[0].accentColor}` 
                    }}
                  >
                    {filiales[0].badge}
                  </span>
                </div>

                {/* Name */}
                <h3 
                  className="text-3xl font-extrabold mb-1"
                  style={{ color: filiales[0].accentColor }}
                >
                  {filiales[0].name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm mb-4" style={{ color: filiales[0].primaryColor }}>
                  <MapPin size={18} style={{ color: filiales[0].accentColor }} className="flex-shrink-0" />
                  <span className="font-medium">{filiales[0].location}</span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6 p-4 rounded-xl" style={{ color: filiales[0].primaryColor, backgroundColor: `${filiales[0].accentColor}10` }}>
                  {filiales[0].description}
                </p>

                {/* Divider */}
                <div className="mb-6" style={{ borderTopColor: filiales[0].borderColor, borderTopWidth: '2px' }} />

                {/* Domains Tags */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: filiales[0].accentColor }}>
                    🎯 Domaines d'activité
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {filiales[0].domains.map((domain, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-2 rounded-lg font-semibold transition-all hover:scale-110 cursor-pointer"
                        style={{ 
                          backgroundColor: `${filiales[0].accentColor}15`,
                          color: filiales[0].accentColor,
                          border: `1.5px solid ${filiales[0].accentColor}66`
                        }}
                      >
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-6 flex-grow">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: filiales[0].accentColor }}>
                    ⭐ Notre expertise
                  </p>
                  <ul className="space-y-3">
                    {filiales[0].details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm" style={{ color: filiales[0].primaryColor }}>
                        <span 
                          className="mt-1.5 w-2.5 h-2.5 rounded-full flex-shrink-0" 
                          style={{ backgroundColor: filiales[0].accentColor }}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="mb-6" style={{ borderTopColor: filiales[0].borderColor, borderTopWidth: '2px' }} />

                {/* CTA */}
                <div className="flex gap-3">
                  <Link
                    to="/filiales/ab-ynnov"
                    className="flex-1 flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 px-6 py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-1"
                    style={{ 
                      color: '#FFFFFF',
                      backgroundColor: filiales[0].accentColor
                    }}
                  >
                    <span>Découvrir</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/filiales/ab-ynnov/contact"
                    className="flex-1 flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 px-6 py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-1 border-2"
                    style={{ 
                      color: filiales[0].accentColor,
                      borderColor: filiales[0].accentColor,
                      backgroundColor: 'transparent'
                    }}
                  >
                    <span>Contact</span>
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Filiale 2: H2i */}
            <motion.div
              className="flex flex-col rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: `3px solid ${filiales[1].primaryColor}`,
                boxShadow: `0 20px 50px rgba(59, 115, 174, 0.2)`
              }}
              initial={{ opacity: 0, x: 50, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, boxShadow: `0 30px 70px rgba(59, 115, 174, 0.3)` }}
            >
              {/* Image Banner */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={filiales[1].logo}
                  alt={filiales[1].name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: filiales[1].primaryColor }}
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Badge */}
                <div className="mb-4">
                  <span 
                    className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest"
                    style={{ 
                      backgroundColor: `${filiales[1].primaryColor}20`,
                      color: filiales[1].primaryColor, 
                      border: `2px solid ${filiales[1].primaryColor}` 
                    }}
                  >
                    {filiales[1].badge}
                  </span>
                </div>

                {/* Name */}
                <h3 
                  className="text-3xl font-extrabold mb-1"
                  style={{ color: filiales[1].primaryColor }}
                >
                  {filiales[1].name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm mb-4" style={{ color: filiales[1].primaryColor }}>
                  <MapPin size={18} style={{ color: filiales[1].accentColor }} className="flex-shrink-0" />
                  <span className="font-medium">{filiales[1].location}</span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6 p-4 rounded-xl" style={{ color: filiales[1].primaryColor, backgroundColor: `${filiales[1].primaryColor}10` }}>
                  {filiales[1].description}
                </p>

                {/* Divider */}
                <div className="mb-6" style={{ borderTopColor: filiales[1].borderColor, borderTopWidth: '2px' }} />

                {/* Domains Tags */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: filiales[1].primaryColor }}>
                    🎯 Domaines d'activité
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {filiales[1].domains.map((domain, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-2 rounded-lg font-semibold transition-all hover:scale-110 cursor-pointer"
                        style={{ 
                          backgroundColor: `${filiales[1].primaryColor}15`,
                          color: filiales[1].primaryColor,
                          border: `1.5px solid ${filiales[1].primaryColor}66`
                        }}
                      >
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-6 flex-grow">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: filiales[1].primaryColor }}>
                    ⭐ Notre expertise
                  </p>
                  <ul className="space-y-3">
                    {filiales[1].details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm" style={{ color: filiales[1].primaryColor }}>
                        <span 
                          className="mt-1.5 w-2.5 h-2.5 rounded-full flex-shrink-0" 
                          style={{ backgroundColor: filiales[1].accentColor }}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="mb-6" style={{ borderTopColor: filiales[1].borderColor, borderTopWidth: '2px' }} />

                {/* CTA */}
                <div className="flex gap-3">
                  <Link
                    to="/filiales/h2i"
                    className="flex-1 flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 px-6 py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-1"
                    style={{ 
                      color: '#FFFFFF',
                      backgroundColor: filiales[1].primaryColor
                    }}
                  >
                    <span>Découvrir</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/filiales/h2i/contact"
                    className="flex-1 flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 px-6 py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-1 border-2"
                    style={{ 
                      color: filiales[1].primaryColor,
                      borderColor: filiales[1].primaryColor,
                      backgroundColor: 'transparent'
                    }}
                  >
                    <span>Contact</span>
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Nos Forces</h2>
            <div className="h-1 w-16 bg-intersec-green rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, number: '2', label: 'Filiales spécialisées' },
              { icon: BarChart3, number: '6+', label: "Secteurs d'activité" },
              { icon: ArrowRight, number: '1000+', label: 'Clients satisfaits' }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <Icon size={42} className="text-intersec-green mx-auto mb-4" />
                  <p className="text-4xl font-bold text-gray-900 mb-2 text-center">{stat.number}</p>
                  <p className="text-gray-500 text-center font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}