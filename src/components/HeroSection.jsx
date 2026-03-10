import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-intersec-dark via-intersec-green to-intersec-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-block px-6 py-2 bg-white/20 rounded-full text-white text-sm font-medium backdrop-blur-sm">
            ✨ Bienvenue chez INTERSEC Group
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          INTERSEC
          <span className="block text-2xl md:text-4xl font-light text-white/90 mt-3">
            Groupe multiservices au service du développement
          </span>
        </motion.h1>

        <motion.p
          className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Excellence, innovation et partenariat pour une Afrique prospère. Nos services couvrent le recrutement, l'immobilier, l'agrobusiness et bien plus.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            to="/about"
            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-intersec-green font-bold rounded-lg hover:bg-intersec-light transition transform hover:scale-105"
          >
            Découvrir le groupe
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white font-bold rounded-lg border border-white/40 hover:bg-white/30 transition backdrop-blur-sm"
          >
            Nous contacter
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
