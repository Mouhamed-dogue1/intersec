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
    const fetchPartners = async () => {
      try {
        setLoading(true);
        const activePartners = await partnersService.getActive();
        if (activePartners.length > 0) {
          setPartners(activePartners);
        } else {
          setPartners(defaultPartners);
        }
      } catch (err) {
        console.error('Error fetching partners:', err);
        setError('Erreur lors du chargement des partenaires');
        setPartners(defaultPartners);
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

        {/* Partner Logos Carousel */}
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

          {/* Infinite scrolling carousel */}
          <div className="relative overflow-hidden py-8">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, - (partners.length * 160)] // 160px per item (128 + 32 gap)
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: partners.length * 4, // Adjust speed
                  ease: "linear",
                },
              }}
            >
              {/* First set */}
              {partners.concat(partners).map((partner, index) => {
                const isPocketBasePartner = partner.id;
                const logoUrl = isPocketBasePartner 
                  ? getFileUrl(partner, 'logo_file') 
                  : `/partenariat/${partner.logo}`;
                return (
                  <motion.div
                    key={`${isPocketBasePartner ? partner.id : partner.logo}-${index}`}
                    className="flex-shrink-0 w-32 h-32 bg-white rounded-lg p-2 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={logoUrl}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = '/partenariat/default-logo.png';
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
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
