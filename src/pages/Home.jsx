import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import FilialesSection from '../components/FilialesSection';
import PartnersSection from '../components/PartnersSection';
import MainLayout from '../layout/MainLayout';
import ImageCarousel from '../components/ImageCarousel';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Users, Globe, Award, Building2, Briefcase, Leaf, Package, Shield, Sparkles, Flame, Home as HomeIcon, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  // Service images from public folder
  const serviceImages = [
    '/img_service_intersec/agrobusiness.jpg',
    '/img_service_intersec/immobilier.jpg',
    '/img_service_intersec/confection_de_tenue.jpg',
    '/img_service_intersec/distribution_de_gaz.jpg',
    '/img_service_intersec/nettoyage.jpg',
    '/img_service_intersec/recrutement.jpg',
    '/img_service_intersec/transport.jpg',
    '/img_service_intersec/gardiennage.jpg'
  ];

  return (
    <MainLayout>
      {/* Navbar spacing */}
      <div className="pt-16"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Image Carousel Showcase Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-5xl font-bold text-gray-900 mb-4 inline-block"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.15, textShadow: "0 0 20px rgba(34, 139, 34, 0.5)" }}
              transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Découvrez Nos <motion.span 
                className="text-intersec-green inline-block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Services
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Explorez nos domaines d'expertise et nos réalisations
            </motion.p>
          </motion.div>

          {/* Carousel on the left, content on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Carousel */}
            <motion.div
              className="relative h-96 md:h-[500px] rounded-2xl shadow-xl overflow-hidden group"
              initial={{ opacity: 0, x: -80, rotateY: 30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -16, scale: 1.05, boxShadow: "0 50px 100px rgba(34, 139, 34, 0.4)", rotateY: -5 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <ImageCarousel images={serviceImages} autoPlay={true} interval={8000} />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Nos Domaines d'Expertise
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  INTERSEC Group offre une gamme diversifiée de services professionnels 
                  et solutions commerciales pour accompagner votre entreprise vers la croissance.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  'Agrobusiness & Agriculture',
                  'Immobilier & Construction',
                  'Ressources Humaines',
                  'Logistique & Transport',
                  'Services Professionnels'
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-intersec-light rounded-lg hover:bg-intersec-light/80 transition-colors group cursor-pointer"
                  initial={{ opacity: 0, x: -30, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.12, type: "spring", stiffness: 200 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ x: 16, scale: 1.08, backgroundColor: "rgba(34, 139, 34, 0.15)", boxShadow: "0 10px 25px rgba(34, 139, 34, 0.2)" }}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.4, rotate: 25 }}
                      animate={{ rotate: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <CheckCircle className="text-intersec-green flex-shrink-0 group-hover:text-intersec-dark transition-colors" size={24} />
                    </motion.div>
                    <span className="text-gray-800 font-medium text-lg group-hover:text-intersec-green transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-intersec-green hover:bg-intersec-dark text-white font-bold py-3 px-8 rounded-lg transition-all hover:gap-3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2"
                >
                  Voir tous les services
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Simple */}
      <section className="py-20 bg-intersec-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-5xl font-bold mb-6 inline-block"
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.12, textShadow: "0 0 30px rgba(255, 255, 255, 0.5)" }}
              transition={{ duration: 0.9, type: "spring", stiffness: 100, damping: 12 }}
              viewport={{ once: true, margin: "-100px" }}
              animate={{ y: [0, -8, 0] }}
            >
              INTERSEC en Chiffres
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Des résultats qui témoignent de notre excellence
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
                  initial={{ opacity: 0, y: 40, scale: 0.8, rotateX: 30 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + idx * 0.15, type: "spring", stiffness: 150, damping: 15 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -20, scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)", boxShadow: "0 30px 60px rgba(255, 255, 255, 0.2)" }}
                >
                  <motion.div
                    className="inline-flex mx-auto mb-3 opacity-100"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    whileHover={{ scale: 1.5, rotate: 720, filter: "drop-shadow(0 0 15px rgba(255,255,255,0.6))" }}
                  >
                    <Icon size={32} />
                  </motion.div>
                  <motion.p 
                    className="text-5xl font-bold mb-2"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 + idx * 0.12, type: "spring", stiffness: 400 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {stat.number}
                  </motion.p>
                  <motion.p 
                    className="text-white/90 text-sm font-medium group-hover:text-white transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + idx * 0.12 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section - Simple */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-5xl font-bold text-gray-900 mb-6 inline-block"
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.12, textShadow: "0 0 25px rgba(34, 139, 34, 0.4)" }}
              transition={{ duration: 0.9, type: "spring", stiffness: 100, damping: 12 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              À Propos d'<motion.span 
                className="text-intersec-green inline-block"
                animate={{ y: [0, -10, 0], textShadow: ["0 0 0px rgba(34,139,34,0)", "0 0 25px rgba(34,139,34,0.6)", "0 0 0px rgba(34,139,34,0)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                INTERSEC
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              INTERSEC Group est un groupe multiservices de premier plan basé en Afrique de l'Ouest, 
              spécialisé dans le développement économique intégré et la création de solutions business innovantes 
              qui transforment les opportunités en succès durables.
            </motion.p>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-intersec-green hover:bg-intersec-dark text-white font-bold py-3 px-8 rounded-lg transition-all hover:gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2"
                >
                  Découvrir notre histoire
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filiales Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-5xl font-bold text-gray-900 mb-4 inline-block"
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.12, textShadow: "0 0 25px rgba(34, 139, 34, 0.4)" }}
              transition={{ duration: 0.9, type: "spring", stiffness: 100, damping: 12 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Nos Filiales <motion.span 
                className="text-intersec-green inline-block"
                animate={{ y: [0, -10, 0], textShadow: ["0 0 0px rgba(34,139,34,0)", "0 0 25px rgba(34,139,34,0.6)", "0 0 0px rgba(34,139,34,0)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Stratégiques
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Deux domaines de spécialisation complémentaires
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "AB'YNNOV",
                badge: "BTP • IMMOBILIER • AGROBUSINESS",
                desc: "Spécialiste du bâtiment, agriculture et commerce international",
                features: ['Construction', 'Agrobusiness', 'Import/Export']
              },
              {
                name: "H2I",
                badge: "RESSOURCES HUMAINES • CONSEIL",
                desc: "Leader du recrutement, audit et conseil en entreprise",
                features: ['Recrutement', 'Conseil', 'Audit']
              }
            ].map((filiale, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-intersec-green group cursor-pointer"
                initial={{ opacity: 0, y: 50, scale: 0.85, rotateX: 25 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.25, type: "spring", stiffness: 120, damping: 15 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -20, scale: 1.08, boxShadow: "0 40px 80px rgba(34, 139, 34, 0.25)", rotateZ: -2 }}
              >
                <motion.span 
                  className="inline-block px-4 py-2 bg-intersec-light text-intersec-green font-bold text-sm rounded-full mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {filiale.badge}
                </motion.span>

                <motion.h3 
                  className="text-3xl font-bold text-intersec-green mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + idx * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {filiale.name}
                </motion.h3>

                <motion.p 
                  className="text-gray-700 text-lg mb-8 leading-relaxed group-hover:text-gray-900 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {filiale.desc}
                </motion.p>

                <motion.div 
                  className="space-y-3 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.35 + idx * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {filiale.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 group/item"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.2 + i * 0.08 }}
                      viewport={{ once: true, margin: "-100px" }}
                      whileHover={{ x: 8 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 12 }}
                      >
                        <CheckCircle className="text-intersec-green flex-shrink-0 group-hover/item:text-intersec-dark transition-colors" size={20} />
                      </motion.div>
                      <span className="text-gray-700 font-medium group-hover/item:text-intersec-green transition-colors">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55 + idx * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Link
                    to="/filiales"
                    className="inline-flex items-center gap-2 bg-intersec-green hover:bg-intersec-dark text-white font-bold py-3 px-8 rounded-lg transition-all hover:gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08, y: -3 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2"
                    >
                      Découvrir
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA Final Section */}
      <section className="py-20 bg-intersec-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 rounded-full bg-intersec-green blur-3xl opacity-20"
            animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          ></motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Prêt à Collaborer?
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Rejoignez notre réseau de partenaires et bénéficiez de solutions complètes 
              pour votre développement économique.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link
                to="/partnership"
                className="inline-flex items-center justify-center gap-2 bg-intersec-green hover:bg-white hover:text-intersec-green text-white font-bold py-4 px-10 rounded-lg transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2"
                >
                  Proposer un Partenariat
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.div>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-intersec-green text-intersec-green hover:bg-intersec-green hover:text-white font-bold py-4 px-10 rounded-lg transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2"
                >
                  Nous Contacter
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
