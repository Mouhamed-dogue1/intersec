import { motion } from 'framer-motion';
import { Briefcase, Users, Building2, Truck, Leaf, Scissors, Droplet, Home } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

export default function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: "Recrutement",
      description: "Solutions de recrutement et d'intérim adaptées à vos besoins professionnels.",
      features: ["Sourcing qualifié", "Placement rapide", "Suivi personnalisé"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Building2,
      title: "Gardiennage",
      description: "Services de sécurité et de surveillance 24/7 pour vos installations.",
      features: ["Surveillance continue", "Patrouilles régulières", "Rapports détaillés"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Scissors,
      title: "Nettoyage",
      description: "Services de nettoyage professionnel et maintenance pour tous types de locaux.",
      features: ["Équipes formées", "Matériel professionnel", "Garantie qualité"],
      gradient: "from-green-600 to-teal-600"
    },
    {
      icon: Briefcase,
      title: "Confection de tenue",
      description: "Production de vêtements professionnels et uniformes de qualité.",
      features: ["Design personnalisé", "Production rapide", "Qualité premium"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: Droplet,
      title: "Distribution de gaz",
      description: "Distribution fiable de gaz de qualité pour professionnels et particuliers.",
      features: ["Livraison sécurisée", "Stock constant", "Prix compétitifs"],
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      icon: Home,
      title: "Immobilier",
      description: "Solutions immobilières complètes : vente, location et gestion de propriétés.",
      features: ["Portefeuille riche", "Expertise locale", "Accompagnement total"],
      gradient: "from-emerald-600 to-green-600"
    },
    {
      icon: Leaf,
      title: "Agrobusiness",
      description: "Solutions intégrées pour l'agriculture moderne et le développement rural.",
      features: ["Conseil agricole", "Distribution semences", "Équipements"],
      gradient: "from-amber-600 to-orange-600"
    },
    {
      icon: Truck,
      title: "Transport",
      description: "Services de transport et logistique efficaces pour vos marchandises.",
      features: ["Flotte moderne", "Assurance complète", "Traçabilité GPS"],
      gradient: "from-slate-600 to-gray-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
              Nos Services Complets
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Nos Services
          </h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6 rounded-full" />
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une gamme complète de services professionnels pour répondre à tous vos besoins d'entreprise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              gradient={service.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Vous ne trouvez pas le service que vous cherchez?
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nous contacter pour plus d'informations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
