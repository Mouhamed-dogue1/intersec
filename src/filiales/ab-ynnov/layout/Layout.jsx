import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Menu, X } from 'lucide-react';

export default function ABYnniovLayout() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header AB'YNNOV */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Title */}
            <div 
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
              onClick={() => navigate('/filiales/ab-ynnov')}
            >
              <img src="/ab'ynnov.png" alt="AB'YNNOV" className="h-10" />
              <span className="font-bold text-gray-900 hidden sm:block">AB'YNNOV</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="/filiales/ab-ynnov" className="text-gray-700 hover:text-blue-600 transition">Accueil</a>
              <a href="/filiales/ab-ynnov/about" className="text-gray-700 hover:text-blue-600 transition">À propos</a>
              <a href="/filiales/ab-ynnov/activities" className="text-gray-700 hover:text-blue-600 transition">Activités</a>
              <a href="/filiales/ab-ynnov/perspectives" className="text-gray-700 hover:text-blue-600 transition">Perspectives</a>
              <a href="/filiales/ab-ynnov/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Contact</a>
              <button 
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-900 transition"
                title="Retour au site INTERSEC"
              >
                <Home size={20} />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900 p-2"
              title="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-b border-gray-200 px-4 py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="space-y-3">
            <a 
              href="/filiales/ab-ynnov" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </a>
            <a 
              href="/filiales/ab-ynnov/about" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </a>
            <a 
              href="/filiales/ab-ynnov/activities" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Activités
            </a>
            <a 
              href="/filiales/ab-ynnov/perspectives" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Perspectives
            </a>
            <a 
              href="/filiales/ab-ynnov/contact" 
              className="block px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button
              onClick={() => {
                navigate('/');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 flex items-center gap-2"
            >
              <Home size={18} />
              Retour INTERSEC
            </button>
          </div>
        </motion.div>
      )}

      {/* Breadcrumb */}
      <div className="px-4 md:px-8 lg:px-16 py-3 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-600">
          <button 
            onClick={() => navigate('/')}
            className="hover:text-blue-600 transition"
          >
            INTERSEC
          </button>
          <ChevronRight size={16} />
          <span className="font-medium text-gray-900">AB'YNNOV</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer AB'YNNOV */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="px-4 md:px-8 lg:px-16 py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Desc */}
            <div>
              <img src="/ab'ynnov.png" alt="AB'YNNOV" className="h-12 mb-4" />
              <p className="text-gray-400 text-sm">
                Leader multisectoriel du Groupe INTERSEC
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/filiales/ab-ynnov" className="hover:text-white transition">Accueil</a></li>
                <li><a href="/filiales/ab-ynnov/about" className="hover:text-white transition">À propos</a></li>
                <li><a href="/filiales/ab-ynnov/activities" className="hover:text-white transition">Activités</a></li>
                <li><a href="/filiales/ab-ynnov/perspectives" className="hover:text-white transition">Perspectives</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:contact@abynnov.com" className="hover:text-white transition">contact@abynnov.com</a></li>
                <li><a href="tel:+212" className="hover:text-white transition">+212 (0) 5XX XXX XXX</a></li>
                <li>Casablanca, Maroc</li>
              </ul>
            </div>

            {/* Groupe INTERSEC */}
            <div>
              <h4 className="font-bold mb-4">Groupe INTERSEC</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition">INTERSEC</a></li>
                <li><a href="/filiales/h2i" className="hover:text-white transition">H2i</a></li>
                <li><a href="/contact" className="hover:text-white transition">Nous contacter</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 AB'YNNOV - Membre du Groupe INTERSEC. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
