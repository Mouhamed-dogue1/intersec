import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-intersec-dark via-intersec-green to-intersec-dark pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white/15 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block px-6 py-2 bg-white/20 rounded-full text-white text-sm font-bold backdrop-blur-md border border-white/30">
            ✨ BIENVENUE CHEZ INTERSEC GROUP
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 50 }}
        >
          INTERSEC
          <motion.span 
            className="block text-3xl md:text-4xl font-light text-white/95 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Groupe Multiservices au Service du Développement
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Excellence opérationnelle, innovation constante et partenariat durable au cœur d'une Afrique en croissance.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-intersec-green font-bold text-lg rounded-xl hover:shadow-2xl transition transform hover:scale-105"
          >
            Voir nos services
            <ArrowRight size={22} className="ml-2" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-white/20 text-white font-bold text-lg rounded-xl border border-white/30 hover:bg-white/30 transition backdrop-blur-md"
          >
            Nous contacter
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {[
            { number: '15+', label: 'Ans d\'expérience' },
            { number: '100+', label: 'Clients de confiance' },
            { number: '3', label: 'Entités complémentaires' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20"
              whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <p className="text-3xl font-bold text-white mb-2">{stat.number}</p>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-3 bg-white rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
