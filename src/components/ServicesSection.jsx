import { motion } from 'framer-motion';
import { Briefcase, Users, Building2, Truck, Leaf, Scissors, Droplet, Home } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="flex items-center justify-center w-14 h-14 bg-intersec-green rounded-lg mb-6 group-hover:bg-intersec-dark transition">
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-6 flex items-center text-intersec-green font-medium group-hover:translate-x-2 transition">
        En savoir plus →
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: "Recrutement",
      description: "Solutions de recrutement et d'intérim adaptées à vos besoins professionnels."
    },
    {
      icon: Building2,
      title: "Gardiennage",
      description: "Services de sécurité et de surveillance 24/7 pour vos installations."
    },
    {
      icon: Scissors,
      title: "Nettoyage",
      description: "Services de nettoyage professionnel et maintenance pour tous types de locaux."
    },
    {
      icon: Briefcase,
      title: "Confection de tenue",
      description: "Production de vêtements professionnels et uniformes de qualité."
    },
    {
      icon: Droplet,
      title: "Distribution de gaz",
      description: "Distribution fiable de gaz de qualité pour professionnels et particuliers."
    },
    {
      icon: Home,
      title: "Immobilier",
      description: "Solutions immobilières complètes : vente, location et gestion de propriétés."
    },
    {
      icon: Leaf,
      title: "Agrobusiness",
      description: "Solutions intégrées pour l'agriculture moderne et le développement rural."
    },
    {
      icon: Truck,
      title: "Transport",
      description: "Services de transport et logistique efficaces pour vos marchandises."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une gamme complète de services professionnels pour répondre à tous vos besoins.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
