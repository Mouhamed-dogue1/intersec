import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Award, ChevronDown, Building2, Users, FileText, Briefcase, Heart, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      label: 'Services',
      icon: Building2,
      dropdown: [
        { label: 'Tous nos services', path: '/services', icon: Building2 },
        { label: 'IPM', path: '/ipm', icon: Users },
        { label: 'Blog', path: '/blog', icon: FileText },
      ]
    },
    {
      label: 'À propos',
      icon: Briefcase,
      dropdown: [
        { label: 'Notre entreprise', path: '/about', icon: Building2 },
        { label: 'Politique Qualité', path: '/quality', icon: Award },
        { label: 'Nos projets', path: '/projects', icon: Briefcase },
      ]
    },
    {
      label: 'Filiales',
      icon: Building2,
      dropdown: [
        { label: "AB'YNNOV", path: '/filiales/ab-ynnov', icon: Building2 },
        { label: 'H2i', path: '/filiales/h2i', icon: Users }
      ]
    },
    { label: 'Partenariats', path: '/partnership', icon: Heart },
    { label: 'Contact', path: '/contact', icon: Phone }
  ];

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (dropdown) => dropdown.some(item => isActive(item.path));

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

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
          <div className="hidden md:flex space-x-1 items-center" ref={dropdownRef}>
            {menuItems.map(item => {
              const Icon = item.icon;
              const hasDropdown = item.dropdown;
              const isItemActive = hasDropdown ? isDropdownActive(item.dropdown) : isActive(item.path);

              return (
                <motion.div
                  key={item.label}
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                >
                  {hasDropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all inline-flex items-center gap-2 ${
                        isItemActive
                          ? 'bg-gradient-to-r from-intersec-green to-emerald-700 text-white shadow-lg'
                          : isScrolled
                          ? 'text-gray-900 hover:text-intersec-green hover:bg-intersec-light/50'
                          : 'text-white hover:bg-white/20'
                      }`}
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                      <motion.div
                        animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all inline-flex items-center gap-2 ${
                        isItemActive
                          ? 'bg-intersec-green text-white shadow-lg'
                          : isScrolled
                          ? 'text-gray-900 hover:text-intersec-green hover:bg-intersec-light/50'
                          : 'text-white hover:bg-white/20'
                      }`}
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasDropdown && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                      >
                        {item.dropdown.map((dropdownItem, idx) => {
                          const DropdownIcon = dropdownItem.icon;
                          return (
                            <motion.div
                              key={dropdownItem.path}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <Link
                                to={dropdownItem.path}
                                className={`block px-4 py-3 text-sm font-medium transition-all hover:bg-gray-50 flex items-center gap-3 ${
                                  isActive(dropdownItem.path)
                                    ? 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-500'
                                    : 'text-gray-700'
                                }`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                <DropdownIcon size={16} className={isActive(dropdownItem.path) ? 'text-emerald-600' : 'text-gray-500'} />
                                <span>{dropdownItem.label}</span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
              const hasDropdown = item.dropdown;
              
              if (hasDropdown) {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}
                      className="w-full px-4 py-2 rounded-md text-base font-medium flex items-center justify-between text-gray-900 hover:bg-gray-100 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        {Icon && <Icon size={16} />}
                        <span>{item.label}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: openMobileDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>
                    
                    {/* Mobile Dropdown Menu */}
                    <AnimatePresence>
                      {openMobileDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="bg-gray-50 overflow-hidden"
                        >
                          {item.dropdown.map(dropdownItem => {
                            const DropdownIcon = dropdownItem.icon;
                            return (
                              <Link
                                key={dropdownItem.path}
                                to={dropdownItem.path}
                                className={`block px-6 py-2 text-sm font-medium flex items-center gap-2 transition-all ${
                                  isActive(dropdownItem.path)
                                    ? 'bg-emerald-100 text-emerald-700 border-l-4 border-emerald-500'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenMobileDropdown(null);
                                }}
                              >
                                {DropdownIcon && <DropdownIcon size={16} />}
                                <span>{dropdownItem.label}</span>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`block px-4 py-2 rounded-md text-base font-medium flex items-center gap-2 transition-all ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-intersec-green to-emerald-700 text-white shadow-lg'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {Icon && <Icon size={16} />}
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
