import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';
import ContactForm from '../components/ContactForm';
import { Briefcase, DollarSign, Users, Zap } from 'lucide-react';
import { partnersService, getFileUrl } from '../services/pocketbase';

const OpportunityCard = ({ icon: Icon, title, description, emoji }) => {
  return (
    <motion.div
      className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-intersec-green"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-intersec-green to-intersec-dark rounded-xl mb-6 group-hover:scale-110 transition-transform">
        <p className="text-3xl">{emoji}</p>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-intersec-green transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function Partnership() {
  const opportunities = [
    {
      icon: DollarSign,
      title: "Investisseurs",
      description: "Opportunities d'investissement dans nos projets multiservices avec rendements attractifs.",
      emoji: "💰"
    },
    {
      icon: Briefcase,
      title: "Fournisseurs",
      description: "Devenir fournisseur de nos filiales et accéder à un marché structuré.",
      emoji: "📦"
    },
    {
      icon: Users,
      title: "Distributeurs",
      description: "Distribuer nos services et produits dans votre région.",
      emoji: "🚀"
    },
    {
      icon: Zap,
      title: "Collaborateurs Stratégiques",
      description: "Collaborations synergétiques pour projets spécifiques.",
      emoji: "⚡"
    }
  ];

  const partnershipBenefits = [
    "Portefeuille diversifié de services et projets rentables",
    "Équipe expérimentée et professionnelle",
    "Réseau établi et relations commerciales solides",
    "Transparence et intégrité dans les dealings",
    "Support continu et accompagnement technique",
    "Opportunités de croissance mutuelles et durables"
  ];

  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultPartners = [
    { name: 'Ceforép', logo: 'ceforep.png', description: 'Formation & développement' },
    { name: 'Oryx', logo: 'oryx.png', description: 'Logistique & mobilité' },
    { name: 'PAC FP', logo: 'pac-fp.png', description: 'Services financiers' },
    { name: 'Population Council', logo: 'populationcouncil.png', description: 'Innovation sociale' },
    { name: 'Promasidor', logo: 'promasidor.jpg', description: 'Produits de consommation' },
    { name: 'Puma', logo: 'puma.jpg', description: 'Image de marque & retail' },
    { name: 'Senstock', logo: 'senstock.webp', description: 'Stockage & distribution' },
    { name: 'Total', logo: 'total.webp', description: 'Énergie & services' },
    { name: 'Vivo', logo: 'vivo.jpg', description: 'Expérience client' }
  ];

  useEffect(() => {
    const loadPartners = async () => {
      try {
        setLoading(true);
        const activePartners = await partnersService.getActive();
        if (activePartners.length > 0) {
          setPartners([...defaultPartners, ...activePartners]);
        } else {
          setPartners(defaultPartners);
        }
      } catch (err) {
        console.error('Erreur chargement partenaires:', err);
        setError('Impossible de charger les partenaires en direct. Affichage des partenaires par défaut.');
        setPartners(defaultPartners);
      } finally {
        setLoading(false);
      }
    };

    loadPartners();
  }, []);

  return (
    <MainLayout>
      <div className="pt-16"></div>

      {/* Hero */}
      <section className="py-32 bg-gradient-to-br from-intersec-dark via-intersec-green to-intersec-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Partenariats Stratégiques
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
            Nous recherchons des partenaires visionnaires pour accélérer notre croissance et maximiser nos impacts collectifs.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mt-6 italic border border-white/20 bg-white/10 rounded-3xl py-6 px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            « La qualité d’une mission, la fluidité d’un partenariat »
          </motion.p>
        </div>
      </section>

      {/* Partner Logos Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-intersec-green font-semibold mb-3">
              Nos Partenaires
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Une alliance de confiance pour des projets ambitieux
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Nous accompagnons nos clients en collaboration avec des entreprises reconnues pour leur sérieux et leur engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => {
              const isPocketBasePartner = !!partner.id;
              const logoSrc = isPocketBasePartner ? getFileUrl(partner, 'logo_file') : `/partenariat/${partner.logo}`;
              const partnerKey = isPocketBasePartner ? partner.id : partner.logo;
              return (
                <motion.div
                  key={partnerKey}
                  className="relative overflow-hidden rounded-[24px] border border-white/70 bg-gradient-to-br from-white via-white/90 to-gray-100 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.32)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_-38px_rgba(15,23,42,0.32)] h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  {/* Animated light points around the border - ENHANCED BRIGHT THEME */}
                  <motion.div
                    className="absolute inset-0 rounded-[24px] pointer-events-none"
                    style={{
                      background: `conic-gradient(from 0deg,
                        transparent 0deg,
                        rgba(34, 139, 34, 0.9) 8deg,
                        rgba(16, 185, 129, 1) 15deg,
                        rgba(34, 139, 34, 0.9) 22deg,
                        transparent 30deg,
                        transparent 330deg,
                        rgba(34, 139, 34, 0.9) 338deg,
                        rgba(16, 185, 129, 1) 345deg,
                        rgba(34, 139, 34, 0.9) 352deg,
                        transparent 360deg
                      )`
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-[24px] pointer-events-none"
                    style={{
                      background: `conic-gradient(from 180deg,
                        transparent 0deg,
                        rgba(255, 215, 0, 0.8) 12deg,
                        rgba(255, 255, 255, 1) 18deg,
                        rgba(255, 215, 0, 0.8) 24deg,
                        transparent 30deg,
                        transparent 330deg,
                        rgba(255, 215, 0, 0.8) 336deg,
                        rgba(255, 255, 255, 1) 342deg,
                        rgba(255, 215, 0, 0.8) 348deg,
                        transparent 354deg
                      )`
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="relative p-6 flex flex-col items-center justify-between h-full min-h-[320px] gap-3 bg-gradient-to-br from-white/95 via-white/90 to-gray-50/95 backdrop-blur-xl border border-white/60 shadow-inner">
                    <div className="w-32 h-32 bg-white rounded-lg p-2 flex items-center justify-center">
                      <img
                        src={logoSrc}
                        alt={partner.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.src = '/partenariat/default-logo.png';
                        }}
                      />
                    </div>
                    <span className="inline-flex items-center justify-center rounded-full bg-intersec-green/10 px-3 py-2 text-sm font-semibold text-intersec-green whitespace-normal break-words text-center">
                      {partner.name}
                    </span>
                    <p className="text-sm text-gray-500 tracking-tight text-center whitespace-normal break-words max-h-[4.5rem] overflow-hidden">
                      {partner.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Types de Partenariat</h2>
            <div className="h-1 w-24 bg-intersec-green rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plusieurs formes de partenariat adaptées à vos objectifs et ressources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunities.map((opp, idx) => (
              <OpportunityCard
                key={idx}
                icon={opp.icon}
                title={opp.title}
                description={opp.description}
                emoji={opp.emoji}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Pourquoi Partenaire avec INTERSEC ?
              </h2>

              <div className="space-y-5">
                {partnershipBenefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-intersec-light transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <span className="flex-shrink-0 w-7 h-7 bg-intersec-green text-white rounded-full flex items-center justify-center font-bold text-sm mt-1">
                      ✓
                    </span>
                    <span className="text-gray-700 text-lg leading-relaxed font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <a
                  href="#partnership-form"
                  className="inline-flex items-center gap-2 bg-intersec-green hover:bg-intersec-dark text-white font-bold py-4 px-8 rounded-lg transition-all"
                >
                  Commencer une Discussion
                  <span>→</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right - Stats */}
            <motion.div
              className="bg-gradient-to-br from-intersec-dark to-intersec-green rounded-2xl p-12 text-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="text-center pb-8 border-b border-white/20">
                  <p className="text-6xl font-bold mb-3">+50%</p>
                  <p className="text-xl text-white/90">Croissance annuelle</p>
                  <p className="text-sm text-white/70 mt-2">Grâce aux partenariats stratégiques</p>
                </div>
                
                <div>
                  <p className="text-4xl font-bold mb-2">500+</p>
                  <p className="text-lg text-white/90">Clients Satisfaits</p>
                </div>

                <div>
                  <p className="text-4xl font-bold mb-2">10+</p>
                  <p className="text-lg text-white/90">Services & Solutions</p>
                </div>

                <div>
                  <p className="text-4xl font-bold mb-2">2</p>
                  <p className="text-lg text-white/90">Filiales Stratégiques</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Notre Processus de Partenariat</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un processus transparent et efficace pour concrétiser vos partenariats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Discussion", desc: "Échange initial sur vos objectifs" },
              { step: "2", title: "Évaluation", desc: "Analyse de complémentarité" },
              { step: "3", title: "Proposition", desc: "Terme et conditions détaillées" },
              { step: "4", title: "Signature", desc: "Finalisation du partenariat" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-intersec-green/10 to-intersec-dark/10 rounded-xl p-8 border border-intersec-green/20">
                  <div className="w-12 h-12 rounded-full bg-intersec-green text-white flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-intersec-green"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white" id="partnership-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Demande de Partenariat
            </h2>
            <div className="h-1 w-24 bg-intersec-green rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Remplissez le formulaire ci-dessous et notre équipe vous contactera rapidement
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm isPartnership={true} />
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
