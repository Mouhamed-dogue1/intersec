import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLogin from '../../../components/AdminLogin';
import AdminDashboardNew from '../../../components/AdminDashboardNew';
import { h2iContactService, adminAuthService } from '../../../services/pocketbase';

export default function H2iAdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const navigate = useNavigate();

  // Vérifier l'authentification au chargement
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('adminToken');
      const adminEntity = localStorage.getItem('adminEntity');
      const adminData = localStorage.getItem('adminData');

      if (token && adminEntity === 'h2i' && adminData) {
        try {
          const parsedAdmin = JSON.parse(adminData);
          setAdmin(parsedAdmin);
          setIsLoggedIn(true);
        } catch (err) {
          console.error('Error parsing admin data:', err);
          handleLogout();
        }
      }
      setIsCheckingAuth(false);
    };

    checkAuth();
  }, []);

  const handleLoginSuccess = (adminData) => {
    setAdmin(adminData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEntity');
    localStorage.removeItem('adminData');
    adminAuthService.logout();
    setIsLoggedIn(false);
    setAdmin(null);
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
            <div className="animate-spin">⚙️</div>
          </div>
          <p className="text-gray-700 font-semibold">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isLoggedIn ? (
        <AdminLogin
          entity="h2i"
          entityName="H2I"
          onLoginSuccess={handleLoginSuccess}
          bgGradient="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900"
        />
      ) : (
        <AdminDashboardNew
          contactService={h2iContactService}
          admin={admin}
          entityName="H2I"
          onLogout={handleLogout}
          brandColor="blue"
        />
      )}
    </>
  );
}
