import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export default function ABYnniovLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-blue-800">AB'YNNOV</h1>
            <p className="text-gray-600 mt-1">Leader multisectoriel du groupe INTERSEC</p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Retour INTERSEC
          </button>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-white px-4 sm:px-6 lg:px-8 py-4 shadow-lg border-t border-blue-100">
          <div className="max-w-7xl mx-auto">
            <nav className="flex flex-wrap items-center gap-3">
              {[
                {label:'Accueil', path:'/filiales/ab-ynnov'},
                {label:'À propos', path:'/filiales/ab-ynnov/about'},
                {label:'Activités', path:'/filiales/ab-ynnov/activities'},
                {label:'Blog', path:'/blog'},
                {label:'Perspectives', path:'/filiales/ab-ynnov/perspectives'},
                {label:'Contact', path:'/filiales/ab-ynnov/contact'}
              ].map((item)=> (
                <button
                  key={item.path}
                  className={`relative px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    location.pathname===item.path
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl'
                      : 'text-blue-800 hover:bg-blue-100 hover:text-blue-900 border border-blue-200'
                  }`}
                  onClick={()=>navigate(item.path)}
                >
                  {item.label}
                  {location.pathname===item.path && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-950 text-white mt-20">
        <div className="px-4 md:px-8 lg:px-16 py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/ab'ynnov.png" alt="AB'YNNOV" className="h-12 mb-4" />
              <p className="text-gray-400 text-sm">Membre du Groupe INTERSEC, expert multisectoriel.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liens rapides</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/filiales/ab-ynnov" className="hover:text-white transition">Accueil</a></li>
                <li><a href="/filiales/ab-ynnov/about" className="hover:text-white transition">À propos</a></li>
                <li><a href="/filiales/ab-ynnov/activities" className="hover:text-white transition">Activités</a></li>
                <li><a href="/filiales/ab-ynnov/perspectives" className="hover:text-white transition">Perspectives</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:contact@abynnov.com" className="hover:text-white transition">contact@abynnov.com</a></li>
                <li><a href="tel:+212" className="hover:text-white transition">+212 (0) 5XX XXX XXX</a></li>
                <li>Casablanca, Maroc</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Groupe INTERSEC</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition">INTERSEC</a></li>
                <li><a href="/filiales/h2i" className="hover:text-white transition">H2i</a></li>
                <li><a href="/contact" className="hover:text-white transition">Nous contacter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} AB'YNNOV - Membre du Groupe INTERSEC. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
