import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* À Propos */}
          <motion.div variants={itemVariants}>
            <div className="mb-4 inline-block bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-intersec-green/40 hover:border-intersec-green/80 transition-colors">
              <img src="/intersec.jpeg" alt="INTERSEC Logo" className="h-16 w-auto object-contain" />
            </div>
            <h3 className="text-lg font-bold text-intersec-green mb-4">
              INTERSEC Group
            </h3>
            <p className="text-gray-400 text-sm">
              Groupe multiservices au service du développement, avec expertise en recrutement, immobilier, agrobusiness et bien plus.
            </p>
          </motion.div>

          {/* Liens Rapides */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-intersec-green transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/filiales" className="text-gray-400 hover:text-intersec-green transition">
                  Filiales
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-intersec-green transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/partnership" className="text-gray-400 hover:text-intersec-green transition">
                  Partenariat
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Filiales */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Nos Filiales</h3>
            <ul className="space-y-2">
              <li>
                <a href="#abynnov" className="text-gray-400 hover:text-blue-400 transition">
                  AB'YNNOV
                </a>
              </li>
              <li>
                <a href="#h2i" className="text-gray-400 hover:text-blue-400 transition">
                  H2i
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 hover:text-intersec-green transition cursor-pointer">
                <MapPin size={18} className="mr-2" />
                <span className="text-sm">Sénégal, Afrique</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-intersec-green transition cursor-pointer">
                <Phone size={18} className="mr-2" />
                <span className="text-sm">+223 XXXX XXXX</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-intersec-green transition cursor-pointer">
                <Mail size={18} className="mr-2" />
                <span className="text-sm">info@intersec.ml</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} INTERSEC Group. Tous droits réservés.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-intersec-green transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-intersec-green transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-intersec-green transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
