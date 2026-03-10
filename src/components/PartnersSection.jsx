import { motion } from 'framer-motion';
import { Heart, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

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
