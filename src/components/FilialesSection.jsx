import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoFrame from './LogoFrame';

const FilialeCard = ({ name, color, domains, description, logo, delay }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl p-10 text-white cursor-pointer group shadow-2xl hover:shadow-3xl`}
      style={{ backgroundColor: color }}
      initial={{ opacity: 0, x: -50, rotateY: -10 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.08, y: -8 }}
    >
      {/* Background animation - Double layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent" />
      </div>
      
      {/* Accent border glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/60 to-white/0" />

      <div className="relative z-10">
        {logo && (
          <motion.div className="mb-6 inline-block" whileHover={{ scale: 1.15, rotate: 5 }}>
            <LogoFrame src={logo} alt={name} size="lg" variant="dark" className="block" />
          </motion.div>
        )}
        
        <h3 className="text-4xl font-bold mb-4 drop-shadow-lg">{name}</h3>
        
        <p className="text-white/95 mb-6 leading-relaxed font-medium">{description}</p>

        <div className="mb-8 pb-8 border-b border-white/20">
          <p className="text-xs font-bold text-white/80 mb-4 uppercase tracking-wider">Domaines d'activité</p>
          <div className="flex flex-wrap gap-2.5">
            {domains.map((domain, idx) => (
              <motion.span
                key={idx}
                className="px-4 py-2 bg-white/25 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/50 hover:bg-white/35 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {domain}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/filiales"
            className="inline-flex items-center px-7 py-3.5 bg-white/30 backdrop-blur-sm rounded-xl border-2 border-white/60 hover:bg-white/40 transition-all font-semibold group/btn shadow-lg"
          >
            Découvrir plus
            <ArrowRight size={20} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function FilialesSection() {
  const filiales = [
    {
      name: "AB'YNNOV",
      color: "#3498db",
      logo: "/ab'ynnov.png",
      domains: ["BTP & Immobilier", "Agrobusiness", "Événementiel", "Commerce", "Import/Export", "Transport"],
      description: "Filiale spécialisée dans les domaines du bâtiment, agriculture et commerce international."
    },
    {
      name: "H2i",
      color: "#2c3e50",
      logo: "/h2i.jpeg",
      domains: ["Recrutement", "Intérim", "Audit", "Conseil"],
      description: "Spécialiste du recrutement, de conseil et d'audit pour les entreprises modernes."
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-950 via-intersec-dark to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-intersec-green rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
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
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent mb-6">
            Nos Filiales
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-intersec-green to-blue-500 rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            INTERSEC Group dispose de filiales spécialisées pour offrir des services d'excellence dans divers secteurs.
          </p>
        </motion.div>

        {/* Filiales Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {filiales.map((filiale, index) => (
            <FilialeCard
              key={index}
              logo={filiale.logo}
              name={filiale.name}
              color={filiale.color}
              domains={filiale.domains}
              description={filiale.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
