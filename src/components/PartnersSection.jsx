import { motion } from 'framer-motion';
import { Heart, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { partnersService, getFileUrl } from '../services/pocketbase';

const BenefitCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-intersec-green rounded-lg mb-4">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

export default function PartnersSection() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        const activePartners = await partnersService.getActive();
        setPartners(activePartners);
      } catch (err) {
        console.error('Error fetching partners:', err);
        setError('Erreur lors du chargement des partenaires');
        // Fallback to mock data if PocketBase fails
        setPartners([
          { name: 'Ceforép', logo: 'ceforep.png', description: 'Formation & développement' },
          { name: 'Oryx', logo: 'oryx.png', description: 'Logistique & mobilité' },
          { name: 'PAC FP', logo: 'pac-fp.png', description: 'Services financiers' },
          { name: 'Population Council', logo: 'populationcouncil.png', description: 'Innovation sociale' },
          { name: 'Promasidor', logo: 'promasidor.jpg', description: 'Produits de consommation' },
          { name: 'Puma', logo: 'puma.jpg', description: 'Image de marque & retail' },
          { name: 'Senstock', logo: 'senstock.webp', description: 'Stockage & distribution' },
          { name: 'Total', logo: 'total.webp', description: 'Énergie & services' },
          { name: 'Vivo', logo: 'vivo.jpg', description: 'Expérience client' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Croissance",
      description: "Accès à des opportunités de croissance dans plusieurs secteurs d'activités."
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Bénéficiez de l'expertise et du savoir-faire du groupe INTERSEC."
    },
    {
      icon: Zap,
      title: "Efficacité",
      description: "Synergies et efficacité opérationnelle à travers nos services intégrés."
    },
    {
      icon: Heart,
      title: "Partenariat",
      description: "Relations durables et mutuellement bénéfiques avec nos partenaires."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Devenez Partenaire
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            INTERSEC Group recherche des partenaires stratégiques pour accélérer son développement et explorer de nouvelles opportunités.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Partner Logos */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-intersec-green font-semibold mb-4">
              Partenaires de confiance
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nous travaillons avec des marques leaders
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Les logos ci-dessous représentent notre réseau de partenaires engagés dans la qualité, la performance et l'impact durable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => {
              // Check if this is a PocketBase partner (has id) or mock data
              const isPocketBasePartner = partner.id;
              const logoUrl = isPocketBasePartner 
                ? getFileUrl(partner, 'logo_file') 
                : `/partenariat/${partner.logo}`;
              const partnerName = partner.name;
              const partnerDescription = partner.description || partner.description;

              return (
                <motion.div
                  key={isPocketBasePartner ? partner.id : partner.logo}
                  className="relative overflow-hidden rounded-[24px] border border-white/70 bg-gradient-to-br from-white via-white/90 to-gray-100 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.32)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_35px_90px_-40px_rgba(15,23,42,0.32)] h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
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
                  {/* Bright inner background with better contrast */}
                  <div className="relative p-6 flex flex-col items-center justify-between h-full min-h-[320px] gap-3 bg-gradient-to-br from-white/95 via-white/90 to-gray-50/95 backdrop-blur-xl border border-white/60 shadow-inner">
                    <img
                      src={logoUrl}
                      alt={partnerName}
                      className="max-h-24 w-full max-w-[200px] object-contain filter saturate-150 contrast-125 brightness-110"
                      onError={(e) => {
                        // Fallback for broken images
                        e.target.src = '/partenariat/default-logo.png';
                      }}
                    />
                    <span className="inline-flex items-center justify-center rounded-full bg-intersec-green/10 px-3 py-2 text-sm font-semibold text-intersec-green whitespace-normal break-words text-center">
                      {partnerName}
                    </span>
                    <p className="text-sm text-gray-500 tracking-tight text-center whitespace-normal break-words max-h-[4.5rem] overflow-hidden">
                      {partnerDescription}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-intersec-green rounded-xl p-12 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Prêt à explorer une opportunité de partenariat ?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe pour discuter des possibilités de collaboration et de croissance mutuelle.
          </p>
          <Link
            to="/partnership"
            className="inline-block px-8 py-4 bg-white text-intersec-green font-bold rounded-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            Commencer maintenant
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
