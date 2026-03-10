import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

export default function H2iLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header H2i */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Title */}
            <div 
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
              onClick={() => navigate('/filiales/h2i')}
            >
              <img src="/h2i.png" alt="H2i" className="h-10" />
              <span className="font-bold text-gray-900 hidden sm:block">H2i</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="/filiales/h2i" className="text-gray-700 hover:text-green-600 transition">Accueil</a>
              <a href="/filiales/h2i/about" className="text-gray-700 hover:text-green-600 transition">À propos</a>
              <a href="/filiales/h2i/services" className="text-gray-700 hover:text-green-600 transition">Services</a>
              <a href="/filiales/h2i/process" className="text-gray-700 hover:text-green-600 transition">Processus</a>
              <a href="/filiales/h2i/contact" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Contact</a>
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
              onClick={() => navigate('/')}
              className="md:hidden text-gray-600 hover:text-gray-900"
              title="Retour"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="px-4 md:px-8 lg:px-16 py-3 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-600">
          <button 
            onClick={() => navigate('/')}
            className="hover:text-green-600 transition"
          >
            INTERSEC
          </button>
          <ChevronRight size={16} />
          <span className="font-medium text-gray-900">H2i</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer H2i */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="px-4 md:px-8 lg:px-16 py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Desc */}
            <div>
              <img src="/h2i.png" alt="H2i" className="h-12 mb-4" />
              <p className="text-gray-400 text-sm">
                Solutions professionnelles en ressources humaines
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/filiales/h2i" className="hover:text-white transition">Accueil</a></li>
                <li><a href="/filiales/h2i/about" className="hover:text-white transition">À propos</a></li>
                <li><a href="/filiales/h2i/services" className="hover:text-white transition">Services</a></li>
                <li><a href="/filiales/h2i/process" className="hover:text-white transition">Processus</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:contact@h2i.com" className="hover:text-white transition">contact@h2i.com</a></li>
                <li><a href="tel:+212" className="hover:text-white transition">+212 (0) 5XX XXX XXX</a></li>
                <li>Dakar, Sénégal</li>
              </ul>
            </div>

            {/* Groupe INTERSEC */}
            <div>
              <h4 className="font-bold mb-4">Groupe INTERSEC</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition">INTERSEC</a></li>
                <li><a href="/filiales/ab-ynnov" className="hover:text-white transition">AB'YNNOV</a></li>
                <li><a href="/contact" className="hover:text-white transition">Nous contacter</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 H2i - Membre du Groupe INTERSEC. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
