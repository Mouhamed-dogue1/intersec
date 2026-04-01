import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/about' },
    { label: 'Filiales', path: '/filiales' },
    { label: 'Services', path: '/services' },
    { label: 'Politique Qualité', path: '/quality', icon: Award },
    { label: 'Projets', path: '/projects' },
    { label: 'Partenariats', path: '/partnership' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              className={`flex items-center justify-center rounded-lg p-2 shadow-md ${
                isScrolled
                  ? 'bg-white border-2 border-intersec-green'
                  : 'bg-white/95 backdrop-blur-sm border-2 border-intersec-green/70'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="/intersec.jpeg"
                alt="INTERSEC Logo"
                className="h-12 w-auto object-contain"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-lg font-bold hidden sm:block"
            >
              <span className="text-intersec-green">INTERSEC</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 items-center">
            {menuItems.map(item => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.08 }}
                  className="relative"
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all inline-flex items-center gap-2 ${
                      isActive(item.path)
                        ? Icon ? 'bg-gradient-to-r from-intersec-green to-emerald-700 text-white shadow-lg drop-shadow-lg' : 'bg-intersec-green text-white'
                        : isScrolled
                        ? 'text-gray-900 hover:text-intersec-green hover:bg-intersec-light/50'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {Icon && (
                      <motion.div
                        animate={isActive(item.path) ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 3, repeat: isActive(item.path) ? Infinity : 0, ease: 'linear' }}
                      >
                        <Icon size={16} />
                      </motion.div>
                    )}
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-intersec-green hover:bg-intersec-dark text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {menuItems.map(item => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                    isActive(item.path)
                      ? Icon ? 'bg-gradient-to-r from-intersec-green to-emerald-700 text-white shadow-lg' : 'bg-intersec-green text-white'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {Icon && <Icon size={16} className={isActive(item.path) ? 'drop-shadow-lg' : ''} />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
