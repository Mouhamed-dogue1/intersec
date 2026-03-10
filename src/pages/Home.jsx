import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import FilialesSection from '../components/FilialesSection';
import PartnersSection from '../components/PartnersSection';
import MainLayout from '../layout/MainLayout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Users, Globe, Award, Building2, Briefcase, Leaf, Package, Shield, Sparkles, Flame, Home as HomeIcon, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <MainLayout>
      {/* Add padding to account for fixed navbar */}
      <div className="pt-16"></div>
      
      <HeroSection />

      {/* Section Présentation - À propos d'INTERSEC */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-intersec-light via-white to-white opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              À propos d'<span className="text-intersec-green">INTERSEC</span>
            </h2>
            <div className="h-1 w-24 bg-intersec-green rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              INTERSEC Group est un groupe multiservices de premier plan basé en Afrique de l'Ouest, 
              spécialisé dans le développement économique intégré et la création de solutions business innovantes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Notre Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Offrir des solutions multiservices de qualité supérieure qui soutiennent la croissance 
                    économique et créent des opportunités durables pour nos clients, partenaires et communautés.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Nos Valeurs Fondamentales</h3>
                  <div className="space-y-3">
                    {[
                      'Excellence opérationnelle et qualité',
                      'Innovation constante et adaptation',
                      'Partenariat durable et transparent',
                      'Responsabilité sociale et durabilité',
                      'Intégrité et professionnalisme'
                    ].map((value, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-intersec-light rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="text-intersec-green flex-shrink-0" size={20} />
                        <span className="text-gray-800 font-medium">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/about" className="inline-flex items-center gap-2 text-intersec-green font-bold text-lg hover:gap-3 transition-all">
                    Découvrir notre histoire complète
                    <ArrowRight size={22} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Statistics */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {[
                { number: '10+', label: 'Services Professionnels', icon: TrendingUp },
                { number: '2', label: 'Filiales Stratégiques', icon: Globe },
                { number: '100+', label: 'Clients Satisfaits', icon: Users },
                { number: '15+', label: 'Années d\'Expérience', icon: Award }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    className="bg-gradient-to-br from-intersec-green to-intersec-dark rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Icon size={32} className="mb-3 text-white/80" />
                    <p className="text-4xl font-bold mb-1">{stat.number}</p>
                    <p className="text-white/90 text-sm leading-tight">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Filiales */}
      <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Nos Filiales Stratégiques
            </h2>
            <div className="h-1 w-24 bg-intersec-green rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deux entités spécialisées et complémentaires au service du développement économique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: "AB'YNNOV",
                badge: "BTP • IMMOBILIER • AGROBUSINESS",
                desc: "Filiale spécialisée dans le bâtiment, l'agriculture et le commerce international",
                focus: "Domaines clés : Construction, Import/Export, Commodités agricoles",
                color: '#2F6FB6',
                colorLight: '#2F6FB620',
                specialties: [
                  { icon: Building2, title: 'BTP & Construction' },
                  { icon: Leaf, title: 'Agrobusiness' },
                  { icon: Package, title: 'Import/Export' }
                ]
              },
              {
                name: "H2i",
                badge: "RESSOURCES HUMAINES • CONSEIL",
                desc: "Spécialiste du recrutement, intérim, audit et conseil en entreprise",
                focus: "Domaines clés : Recrutement, RH, Audit Organisationnel",
                color: '#3B73AE',
                colorLight: '#3B73AE20',
                specialties: [
                  { icon: Users, title: 'Recrutement & RH' },
                  { icon: Briefcase, title: 'Conseil' },
                  { icon: TrendingUp, title: 'Audit & Stratégie' }
                ]
              }
            ].map((filiale, idx) => (
              <motion.div
                key={idx}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ borderTop: `6px solid ${filiale.color}` }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Background gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: filiale.colorLight }}
                />

                {/* Content */}
                <div className="relative bg-white p-8 md:p-10">
                  {/* Badge */}
                  <span 
                    className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest mb-6"
                    style={{ 
                      backgroundColor: `${filiale.color}15`,
                      color: filiale.color,
                      border: `2px solid ${filiale.color}`
                    }}
                  >
                    {filiale.badge}
                  </span>

                  {/* Title with icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: filiale.colorLight }}
                    >
                      <Building2 size={24} style={{ color: filiale.color }} />
                    </div>
                    <h3 
                      className="text-3xl font-bold"
                      style={{ color: filiale.color }}
                    >
                      {filiale.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    {filiale.desc}
                  </p>

                  {/* Divider */}
                  <div 
                    className="h-1 w-16 rounded-full mb-6"
                    style={{ backgroundColor: filiale.color }}
                  />

                  {/* Specialties */}
                  <div className="mb-6">
                    <p 
                      className="text-xs font-bold uppercase tracking-widest mb-4"
                      style={{ color: filiale.color }}
                    >
                      ✨ Spécialités
                    </p>
                    <div className="space-y-3">
                      {filiale.specialties.map((spec, i) => {
                        const Icon = spec.icon;
                        return (
                          <motion.div
                            key={i}
                            className="flex items-center gap-3 p-3 rounded-lg group/item"
                            style={{ backgroundColor: filiale.colorLight }}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="flex-shrink-0">
                              <Icon size={18} style={{ color: filiale.color }} className="group-hover/item:scale-110 transition-transform" />
                            </div>
                            <span className="text-gray-700 font-medium text-sm">{spec.title}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Focus */}
                  <p className="text-gray-600 text-sm italic mb-6 p-4 rounded-lg" style={{ backgroundColor: filiale.colorLight }}>
                    {filiale.focus}
                  </p>

                  {/* CTA */}
                  <Link
                    to="/filiales"
                    className="inline-flex items-center gap-2 font-bold transition-all py-3 px-6 rounded-lg hover:gap-3"
                    style={{ 
                      color: 'white',
                      backgroundColor: filiale.color
                    }}
                  >
                    Découvrir <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Services Highlight */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Nos Services Professionnels
            </h2>
            <div className="h-1 w-24 bg-intersec-green rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins en développement business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Recrutement & Intérim', icon: Users, color: '#2F6FB6', emoji: '👥' },
              { name: 'Gardiennage & Sécurité', icon: Shield, color: '#E74C3C', emoji: '🛡️' },
              { name: 'Nettoyage Professionnel', icon: Sparkles, color: '#3498DB', emoji: '✨' },
              { name: 'Confection de Tenues', icon: Briefcase, color: '#9B59B6', emoji: '👔' },
              { name: 'Distribution de Gaz', icon: Flame, color: '#F39C12', emoji: '🔥' },
              { name: 'Services Immobiliers', icon: HomeIcon, color: '#228B22', emoji: '🏠' },
              { name: 'Agrobusiness', icon: Leaf, color: '#27AE60', emoji: '🌾' },
              { name: 'Transport & Logistique', icon: Truck, color: '#34495E', emoji: '🚚' }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-opacity-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, boxShadow: `0 20px 40px ${service.color}30` }}
                >
                  {/* Colored top border */}
                  <div 
                    className="h-1 w-full"
                    style={{ backgroundColor: service.color }}
                  />

                  {/* Gradient background on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{ backgroundColor: service.color }}
                  />

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Icon Container */}
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <Icon size={28} style={{ color: service.color }} />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-gray-900 text-center group-hover:text-gray-900 transition-colors text-sm sm:text-base leading-snug">
                      {service.name}
                    </h3>

                    {/* Emoji accent on hover */}
                    <div className="mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-2xl">{service.emoji}</span>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ backgroundColor: service.color }}
                  />
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-intersec-green hover:bg-intersec-dark text-white font-bold py-4 px-10 rounded-lg transition-all hover:gap-3 shadow-lg hover:shadow-xl"
            >
              Consulter tous les services
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <PartnersSection />

      {/* Section Vision Stratégique */}
      <section className="py-28 bg-gradient-to-r from-intersec-dark via-intersec-green to-intersec-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Notre Vision Stratégique
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Un projet ambitieux de développement intégré combinant immobilier, commerce, agrobusiness et transport
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Immobilier', 
                desc: 'Construction d\'immeubles modernes et gestion immobilière stratégique',
                icon: '🏢'
              },
              { 
                title: 'Commerce', 
                desc: 'Boutiques et commerces stratégiquement localisés et optimisés',
                icon: '🛍️'
              },
              { 
                title: 'Agrobusiness', 
                desc: 'Agriculture durable et production agroalimentaire de qualité',
                icon: '🌾'
              },
              { 
                title: 'Transport', 
                desc: 'Logistique efficace et services de transport fiables',
                icon: '🚚'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <p className="text-5xl mb-4">{item.icon}</p>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/90 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Appel à l'Action - Partenariat */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-intersec-green to-intersec-dark rounded-3xl p-12 md:p-16 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Devenir Partenaire d'INTERSEC
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              Nous recherchons des partenaires visionnaires et des investisseurs pour accélérer notre croissance 
              et développer nos projets ambitieux.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/partnership"
                className="inline-flex items-center justify-center gap-2 bg-white text-intersec-green hover:bg-gray-100 text-lg font-bold py-3 px-8 rounded-lg transition-all"
              >
                Proposer un Partenariat
                <ArrowRight size={22} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 text-lg font-bold py-3 px-8 rounded-lg transition-all"
              >
                Nous Contacter
                <ArrowRight size={22} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
