import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Settings, Users, Calendar, FileText, Briefcase, Building, LogOut, BarChart3, Mail, Reply, Check, Clock, AlertCircle, Trash2, Eye, EyeOff, X, MessageSquare, Plus, Edit, Delete } from 'lucide-react';
import AdminLogin from '../components/AdminLogin';
import { adminAuthService, generalAdminService, eventsService, postsService, partnersService, filialesService, getFileUrl } from '../services/pocketbase';

export default function GeneralAdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  // Vérifier l'authentification au chargement
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('adminToken');
      const adminEntity = localStorage.getItem('adminEntity');
      const adminData = localStorage.getItem('adminData');

      if (token && adminEntity === 'general' && adminData) {
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
    navigate('/');
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Administration Générale
            </h1>
            <p className="text-gray-600">
              Accès administrateur général du site Intersec Group
            </p>
          </div>
          <AdminLogin
            entity="general"
            onLoginSuccess={handleLoginSuccess}
            brandColor="blue"
          />
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', label: 'Tableau de Bord', icon: BarChart3 },
    { id: 'messages', label: 'Messages', icon: Mail },
    { id: 'events', label: 'Événements', icon: Calendar },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'partners', label: 'Partenaires', icon: Briefcase },
    { id: 'filiales', label: 'Filiales', icon: Building },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'messages':
        return <MessagesTab admin={admin} />;
      case 'events':
        return <EventsTab />;
      case 'blog':
        return <BlogTab />;
      case 'partners':
        return <PartnersTab />;
      case 'filiales':
        return <FilialesTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Administration Générale - Intersec Group
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Connecté en tant que {admin?.full_name || admin?.email}
              </span>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-sm border">
              <nav className="p-4">
                <ul className="space-y-2">
                  {tabs.map((tab) => (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          activeTab === tab.id
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <tab.icon className="h-5 w-5 mr-3" />
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-sm border p-6"
            >
              {renderTabContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Placeholder components for each tab
function DashboardTab() {
  const [stats, setStats] = useState({
    events: 0,
    blogPosts: 0,
    partners: 0,
    filiales: 3 // Intersec, AB'Ynnov, H2I
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [events, partners, filiales] = await Promise.all([
          eventsService.getAll(),
          partnersService.getAll(),
          filialesService.getAll()
        ]);

        setStats({
          events: events?.length || 0,
          blogPosts: 0, // À implémenter
          partners: partners?.length || 0,
          filiales: filiales?.length || 0
        });
      } catch (error) {
        console.error('Erreur lors du chargement des statistiques:', error);
        // Définir les stats à 0 plutôt que de crasher
        setStats({
          events: 0,
          blogPosts: 0,
          partners: 0,
          filiales: 0
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Tableau de Bord</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-green-600">Événements</p>
              <p className="text-2xl font-bold text-green-900">{stats.events}</p>
            </div>
          </div>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-purple-600">Articles Blog</p>
              <p className="text-2xl font-bold text-purple-900">{stats.blogPosts}</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg">
          <div className="flex items-center">
            <Briefcase className="h-8 w-8 text-orange-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-orange-600">Partenaires</p>
              <p className="text-2xl font-bold text-orange-900">{stats.partners}</p>
            </div>
          </div>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg">
          <div className="flex items-center">
            <Building className="h-8 w-8 text-indigo-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-indigo-600">Filiales</p>
              <p className="text-2xl font-bold text-indigo-900">{stats.filiales}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-gray-600">
          Bienvenue dans le panneau d'administration général. Ici, vous pouvez gérer tous les aspects du site Intersec Group.
        </p>
      </div>
    </div>
  );
}

function ContactsTab() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [filter, setFilter] = useState('Draft');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Charger tous les contacts
  useEffect(() => {
    let isMounted = true;

    const fetchContacts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await generalAdminService.getAllContacts();
        
        // Normaliser les champs is_read et status
        const normalizedData = data.map(contact => ({
          ...contact,
          is_read: contact.is_read === true || contact.is_read === '1' || contact.is_read === 1 ? true : false,
          status: contact.status || 'Draft'
        }));
        
        if (isMounted) {
          setContacts(normalizedData);
        }
      } catch (err) {
        if (isMounted) {
          setError('Erreur lors du chargement des messages: ' + err.message);
          console.error(err);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Filtrer les contacts
  const filteredContacts = contacts.filter(contact => {
    const matchesFilter = filter === 'All' || contact.status === filter;
    const matchesSearch = searchTerm === '' || 
      contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleStatusChange = async (contactId, entity, newStatus) => {
    try {
      await generalAdminService.updateContactStatus(contactId, entity, newStatus);
      // Recharger les contacts
      const data = await generalAdminService.getAllContacts();
      const normalizedData = data.map(contact => ({
        ...contact,
        is_read: contact.is_read === true || contact.is_read === '1' || contact.is_read === 1 ? true : false,
        status: contact.status || 'Draft'
      }));
      setContacts(normalizedData);
    } catch (err) {
      setError('Erreur lors de la mise à jour: ' + err.message);
    }
  };

  const handleMarkAsRead = async (contactId, entity, isRead) => {
    try {
      await generalAdminService.markContactAsRead(contactId, entity, isRead);
      // Mettre à jour localement
      setContacts(contacts.map(c => 
        c.id === contactId ? { ...c, is_read: isRead } : c
      ));
    } catch (err) {
      setError('Erreur lors de la mise à jour: ' + err.message);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Draft': return 'bg-gray-100 text-gray-700';
      case 'Replied': return 'bg-blue-100 text-blue-700';
      case 'Closed': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getEntityColor = (entity) => {
    switch (entity) {
      case 'intersec': return 'bg-emerald-100 text-emerald-700';
      case 'ab-ynnov': return 'bg-blue-100 text-blue-700';
      case 'h2i': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-800">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Gestion des Contacts</h2>
        <div className="text-sm text-gray-600">
          {filteredContacts.length} message(s)
        </div>
      </div>

      {/* Filtres et recherche */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Rechercher par nom, email ou message..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">Tous les statuts</option>
          <option value="Draft">Brouillon</option>
          <option value="Replied">Répondu</option>
          <option value="Closed">Fermé</option>
        </select>
      </div>

      {/* Liste des contacts */}
      <div className="space-y-4">
        {paginatedContacts.map((contact) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`border rounded-lg p-4 ${contact.is_read ? 'bg-gray-50' : 'bg-white border-blue-200'}`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getEntityColor(contact.entity)}`}>
                    {contact.entity === 'intersec' ? 'Intersec' : 
                     contact.entity === 'ab-ynnov' ? 'AB\'Ynnov' : 'H2I'}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(contact.status)}`}>
                    {contact.status}
                  </span>
                  {!contact.is_read && (
                    <span className="inline-flex items-center px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                      Nouveau
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{contact.email}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(contact.created).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleMarkAsRead(contact.id, contact.entity, !contact.is_read)}
                  className={`p-2 rounded-md ${contact.is_read ? 'text-gray-400 hover:text-gray-600' : 'text-blue-600 hover:text-blue-800'}`}
                  title={contact.is_read ? 'Marquer comme non lu' : 'Marquer comme lu'}
                >
                  {contact.is_read ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setSelectedContact(selectedContact?.id === contact.id ? null : contact)}
                  className="p-2 text-gray-600 hover:text-gray-800 rounded-md"
                  title="Voir les détails"
                >
                  <MessageSquare className="h-4 w-4" />
                </button>
              </div>
            </div>

            {contact.company && (
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-medium">Entreprise:</span> {contact.company}
              </p>
            )}

            <p className="text-sm text-gray-700 mb-3 line-clamp-2">
              {contact.message}
            </p>

            {selectedContact?.id === contact.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="border-t pt-4 mt-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Informations de contact</h4>
                    <div className="space-y-1 text-sm">
                      <p><span className="font-medium">Téléphone:</span> {contact.phone || 'Non fourni'}</p>
                      <p><span className="font-medium">Type de partenariat:</span> {contact.partnership_type || 'Non spécifié'}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Actions</h4>
                    <div className="flex gap-2">
                      {contact.status !== 'Replied' && (
                        <button
                          onClick={() => handleStatusChange(contact.id, contact.entity, 'Replied')}
                          className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                        >
                          Marquer comme répondu
                        </button>
                      )}
                      {contact.status !== 'Closed' && (
                        <button
                          onClick={() => handleStatusChange(contact.id, contact.entity, 'Closed')}
                          className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700"
                        >
                          Fermer
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <nav className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Précédent
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPage} sur {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Suivant
            </button>
          </nav>
        </div>
      )}

      {filteredContacts.length === 0 && (
        <div className="text-center py-12">
          <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Aucun message trouvé</p>
        </div>
      )}
    </div>
  );
}

function EventsTab() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    event_date: '',
    location: '',
    imageUrl: '',
    imageFile: null,
    existingImageFile: null,
    published: false
  });
  const [imagePreview, setImagePreview] = useState('');

  // Charger les événements
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await eventsService.getAll();
      setEvents(data);
    } catch (err) {
      setError('Erreur lors du chargement des événements: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validation des champs obligatoires
      if (!formData.title || !formData.title.trim()) {
        setError('Le titre de l\'événement est obligatoire');
        return;
      }
      if (!formData.description || !formData.description.trim()) {
        setError('La description est obligatoire');
        return;
      }
      if (!formData.event_date) {
        setError('La date de l\'événement est obligatoire');
        return;
      }

      // Préparer les données pour l'envoi
      const submitData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        event_date: formData.event_date,
        location: formData.location.trim(),
        published: formData.published,
        imageFile: formData.imageFile,
        imageUrl: formData.imageUrl
      };

      console.log('Form submission data:', {
        title: submitData.title,
        description: submitData.description,
        event_date: submitData.event_date,
        location: submitData.location,
        published: submitData.published,
        hasImage: !!submitData.imageFile,
        imageFileName: submitData.imageFile?.name
      });

      if (editingEvent) {
        submitData.existingImageFile = formData.existingImageFile;
        await eventsService.update(editingEvent.id, submitData);
      } else {
        await eventsService.create(submitData);
      }
      await fetchEvents();
      resetForm();
      setError(null);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Erreur lors de la sauvegarde: ' + err.message);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      imageFile: file,
      imageUrl: '' // Réinitialiser l'URL si un fichier est sélectionné
    }));
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleEdit = (event) => {
    const existingImageUrl = event.image_file?.length ? getFileUrl(event, 'image_file') : event.image || '';
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      event_date: event.event_date.split(' ')[0], // Format date pour input
      location: event.location || '',
      imageUrl: event.image || '',
      imageFile: null,
      existingImageFile: event.image_file?.length ? event.image_file[0] : null,
      published: event.published || false
    });
    setImagePreview(existingImageUrl);
    setShowCreateForm(true);
  };

  const handleDelete = async (eventId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      try {
        await eventsService.delete(eventId);
        await fetchEvents();
      } catch (err) {
        setError('Erreur lors de la suppression: ' + err.message);
      }
    }
  };

  const handleTogglePublish = async (event) => {
    try {
      const updateData = {
        title: event.title,
        description: event.description,
        event_date: event.event_date,
        location: event.location || '',
        published: !event.published,
        imageFile: null,
        imageUrl: event.image || '',
        existingImageFile: event.image_file?.length ? event.image_file[0] : null
      };
      await eventsService.update(event.id, updateData);
      await fetchEvents();
    } catch (err) {
      setError('Erreur lors de la mise à jour: ' + err.message);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      event_date: '',
      location: '',
      imageUrl: '',
      imageFile: null,
      published: false
    });
    setImagePreview('');
    setEditingEvent(null);
    setShowCreateForm(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Gestion des Événements</h2>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          {showCreateForm ? 'Annuler' : 'Nouvel Événement'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {showCreateForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-gray-50 border rounded-lg p-6 mb-6"
        >
          <h3 className="text-lg font-semibold mb-4">
            {editingEvent ? 'Modifier l\'événement' : 'Créer un nouvel événement'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Titre *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date de l'événement *
                </label>
                <input
                  type="date"
                  required
                  value={formData.event_date}
                  onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lieu
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image de l'événement
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="mt-2 text-xs text-gray-500">
                Téléchargez une image depuis votre ordinateur. Si vous préférez, vous pouvez aussi saisir un lien d'image.
              </p>
              {imagePreview && (
                <div className="mt-4">
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src={imagePreview}
                      alt="Aperçu de l'événement"
                      className="w-full h-52 object-cover"
                    />
                  </div>
                  {formData.imageFile && (
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          imageFile: null
                        }));
                        // Restaurer l'image précédente
                        if (editingEvent && formData.existingImageFile) {
                          const existingImageUrl = getFileUrl(editingEvent, 'image_file');
                          setImagePreview(existingImageUrl);
                        } else if (editingEvent && editingEvent.image) {
                          setImagePreview(editingEvent.image);
                        } else {
                          setImagePreview('');
                        }
                      }}
                      className="mt-2 text-sm text-gray-600 hover:text-gray-800 underline"
                    >
                      Annuler le changement d'image
                    </button>
                  )}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL de l'image (optionnel)
              </label>
              <input
                type="url"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="published" className="ml-2 text-sm text-gray-700">
                Publier l'événement
              </label>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {editingEvent ? 'Modifier' : 'Créer'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Annuler
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Liste des événements */}
      <div className="space-y-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded-lg overflow-hidden bg-white shadow-sm"
          >
            {(event.image_file?.length || event.image) && (
              <div className="h-52 overflow-hidden bg-gray-100">
                <img
                  src={event.image_file?.length ? getFileUrl(event, 'image_file') : event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{event.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    event.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {event.published ? 'Publié' : 'Brouillon'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  {new Date(event.event_date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                  {event.location && ` • ${event.location}`}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  {event.description}
                </p>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleTogglePublish(event)}
                  className={`p-2 rounded-md ${
                    event.published 
                      ? 'text-green-600 hover:text-green-800' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                  title={event.published ? 'Dépublier' : 'Publier'}
                >
                  <Eye className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleEdit(event)}
                  className="p-2 text-blue-600 hover:text-blue-800 rounded-md"
                  title="Modifier"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="p-2 text-red-600 hover:text-red-800 rounded-md"
                  title="Supprimer"
                >
                  <Delete className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          </motion.div>
        ))}
      </div>

      {events.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Aucun événement trouvé</p>
        </div>
      )}
    </div>
  );
}

function BlogTab() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: '',
    published: false,
    tags: '',
    imageFile: null,
    existingImageFile: null
  });
  const [imagePreview, setImagePreview] = useState('');

  // Charger les articles de blog depuis PocketBase
  useEffect(() => {
    fetchPosts();
  }, []);

  const normalizePost = (record) => {
    return {
      id: record.id,
      title: record.title || 'Article sans titre',
      excerpt: record.excerpt || '',
      content: record.content || '',
      author: record.author || 'Équipe Intersec',
      published: record.published === true || record.published === 'true',
      tags: typeof record.tags === 'string'
        ? record.tags.split(',').map(tag => tag.trim()).filter(Boolean)
        : Array.isArray(record.tags)
          ? record.tags
          : [],
      created: record.created,
      date: record.date || (record.created ? new Date(record.created).toLocaleDateString('fr-FR') : ''),
      readTime: record.readTime || record.read_time || '5 min',
      imageUrl: record.image || record.image_url || '',
      views: record.views || record.views_count || 0
    };
  };

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedPosts = await postsService.getPublished();
      if (fetchedPosts && fetchedPosts.length > 0) {
        setPosts(fetchedPosts.map(normalizePost));
      } else {
        setPosts([]);
      }
    } catch (err) {
      setError('Erreur lors du chargement des articles: ' + (err.message || err));
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        author: formData.author || 'Équipe Intersec',
        published: formData.published,
        tags: formData.tags,
        imageFile: formData.imageFile
      };

      const savedPost = editingPost
        ? await postsService.update(editingPost.id, payload)
        : await postsService.create(payload);

      const normalized = normalizePost(savedPost);
      if (editingPost) {
        setPosts(posts.map(p => p.id === editingPost.id ? normalized : p));
      } else {
        setPosts([normalized, ...posts]);
      }

      resetForm();
    } catch (err) {
      setError('Erreur lors de la sauvegarde: ' + (err.message || err));
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content || '',
      excerpt: post.excerpt,
      author: post.author,
      published: post.published,
      tags: Array.isArray(post.tags) ? post.tags.join(', ') : post.tags || '',
      imageFile: null,
      existingImageFile: null
    });
    setShowCreateForm(true);
  };

  const handleDelete = async (postId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      try {
        await postsService.delete(postId);
        setPosts(posts.filter(p => p.id !== postId));
      } catch (err) {
        setError('Erreur lors de la suppression: ' + (err.message || err));
      }
    }
  };

  const handleTogglePublish = async (post) => {
    try {
      const payload = {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content || '',
        author: post.author,
        published: !post.published,
        tags: Array.isArray(post.tags) ? post.tags.join(', ') : post.tags || '',
        imageFile: null
      };

      const savedPost = await postsService.update(post.id, payload);
      const normalized = normalizePost(savedPost);
      setPosts(posts.map(p => p.id === post.id ? normalized : p));
    } catch (err) {
      setError('Erreur lors de la mise à jour: ' + (err.message || err));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, imageFile: file });
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      author: '',
      published: false,
      tags: '',
      imageFile: null,
      existingImageFile: null
    });
    setImagePreview('');
    setEditingPost(null);
    setShowCreateForm(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Gestion du Blog</h2>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          {showCreateForm ? 'Annuler' : 'Nouvel Article'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {showCreateForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-gray-50 border rounded-lg p-6 mb-6"
        >
          <h3 className="text-lg font-semibold mb-4">
            {editingPost ? 'Modifier l\'article' : 'Créer un nouvel article'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Titre *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Auteur
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder="Équipe Intersec"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Extrait *
              </label>
              <textarea
                required
                rows={3}
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Résumé court de l'article..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contenu
              </label>
              <textarea
                rows={8}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Contenu complet de l'article..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags (séparés par des virgules)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="innovation, technologie, sécurité"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image de couverture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Aperçu de l'image:</p>
                <img src={imagePreview} alt="Preview" className="max-w-xs h-auto rounded-md border" />
              </div>
            )}

            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="published" className="ml-2 text-sm text-gray-700">
                Publier immédiatement
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                {editingPost ? 'Modifier' : 'Créer'} l'article
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Annuler
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Liste des articles */}
      <div className="space-y-4">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{post.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      post.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {post.published ? 'Publié' : 'Brouillon'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    Par {post.author} • {new Date(post.created).toLocaleDateString('fr-FR')}
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    {post.excerpt}
                  </p>
                  {post.tags && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {(Array.isArray(post.tags) ? post.tags : post.tags.split(',')).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleTogglePublish(post)}
                    className={`p-2 rounded-md ${
                      post.published
                        ? 'text-green-600 hover:text-green-800'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                    title={post.published ? 'Dépublier' : 'Publier'}
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleEdit(post)}
                    className="p-2 text-blue-600 hover:text-blue-800 rounded-md"
                    title="Modifier"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="p-2 text-red-600 hover:text-red-800 rounded-md"
                    title="Supprimer"
                  >
                    <Delete className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Aucun article trouvé</p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="mt-4 inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Créer le premier article
          </button>
        </div>
      )}
    </div>
  );
}

function PartnersTab() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingPartner, setEditingPartner] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    website: '',
    logoFile: null,
    category: '',
    active: true
  });
  const [logoPreview, setLogoPreview] = useState('');

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await partnersService.getAll();
      setPartners(data);
    } catch (err) {
      setError('Erreur lors du chargement des partenaires: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPartner) {
        const updated = await partnersService.update(editingPartner.id, formData);
        setPartners(partners.map(p => p.id === updated.id ? updated : p));
      } else {
        const created = await partnersService.create(formData);
        setPartners([created, ...partners]);
      }
      resetForm();
    } catch (err) {
      console.error('Detailed error:', err);
      let errorMsg = 'Erreur lors de la sauvegarde: ' + err.message;
      if (err.status === 0 || err.message?.includes('ERR_CONNECTION_RESET')) {
        errorMsg = 'Erreur de connexion PocketBase. Assurez-vous que PocketBase est en cours d\'exécution à http://localhost:8090';
      } else if (err.status === 400) {
        errorMsg = 'Erreur de validation. Vérifiez que tous les champs requis sont remplis correctement.';
      } else if (err.status === 403) {
        errorMsg = 'Accès refusé. Vérifiez les règles de permission de la collection dans PocketBase.';
      }
      setError(errorMsg);
    }
  };

  const handleEdit = (partner) => {
    setEditingPartner(partner);
    setFormData({
      name: partner.name || '',
      description: partner.description || '',
      website: partner.website || '',
      logoFile: null,
      category: partner.category || '',
      active: partner.active !== false
    });
    setLogoPreview('');
    setShowCreateForm(true);
  };

  const handleDelete = async (partnerId) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer ce partenaire ?')) return;
    try {
      await partnersService.delete(partnerId);
      setPartners(partners.filter(p => p.id !== partnerId));
    } catch (err) {
      setError('Erreur lors de la suppression: ' + err.message);
    }
  };

  const handleToggleActive = async (partner) => {
    try {
      const updated = await partnersService.update(partner.id, { ...partner, active: !partner.active });
      setPartners(partners.map(p => p.id === updated.id ? updated : p));
    } catch (err) {
      setError('Erreur lors de la mise à jour: ' + err.message);
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, logoFile: file });
      const reader = new FileReader();
      reader.onload = (event) => setLogoPreview(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      website: '',
      logoFile: null,
      category: '',
      active: true
    });
    setLogoPreview('');
    setEditingPartner(null);
    setShowCreateForm(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Gestion des Partenaires</h2>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          {showCreateForm ? 'Annuler' : 'Nouveau Partenaire'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {showCreateForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-gray-50 border rounded-lg p-6 mb-6"
        >
          <h3 className="text-lg font-semibold mb-4">
            {editingPartner ? 'Modifier le partenaire' : 'Ajouter un nouveau partenaire'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom du partenaire *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Site web
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Description du partenaire..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Catégorie
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Sélectionner une catégorie</option>
                  <option value="Technologie">Technologie</option>
                  <option value="Conseil">Conseil</option>
                  <option value="Formation">Formation</option>
                  <option value="Institutionnel">Institutionnel</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Logo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {logoPreview && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Aperçu du logo:</p>
                <img src={logoPreview} alt="Logo preview" className="max-w-xs h-auto rounded-md border" />
              </div>
            )}

            <div className="flex items-center">
              <input
                type="checkbox"
                id="active"
                checked={formData.active}
                onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label htmlFor="active" className="ml-2 text-sm text-gray-700">
                Partenaire actif
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
              >
                {editingPartner ? 'Modifier' : 'Ajouter'} le partenaire
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Annuler
              </button>
            </div>
          </form>
        </motion.div>
      )}

      <div className="space-y-4">
        {partners.map((partner) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      partner.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {partner.active ? 'Actif' : 'Inactif'}
                    </span>
                    {partner.category && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                        {partner.category}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    Ajouté le {new Date(partner.created).toLocaleDateString('fr-FR')}
                  </p>
                  {partner.website && (
                    <p className="text-sm text-blue-600 mb-1">
                      <a href={partner.website} target="_blank" rel="noopener noreferrer">
                        {partner.website}
                      </a>
                    </p>
                  )}
                  {partner.description && (
                    <p className="text-sm text-gray-700 mt-2">
                      {partner.description}
                    </p>
                  )}
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleToggleActive(partner)}
                    className={`p-2 rounded-md ${
                      partner.active
                        ? 'text-green-600 hover:text-green-800'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                    title={partner.active ? 'Désactiver' : 'Activer'}
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleEdit(partner)}
                    className="p-2 text-blue-600 hover:text-blue-800 rounded-md"
                    title="Modifier"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(partner.id)}
                    className="p-2 text-red-600 hover:text-red-800 rounded-md"
                    title="Supprimer"
                  >
                    <Delete className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {partners.length === 0 && (
        <div className="text-center py-12">
          <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Aucun partenaire trouvé</p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="mt-4 inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Ajouter le premier partenaire
          </button>
        </div>
      )}
    </div>
  );
}

function FilialesTab() {
  const [filiales, setFiliales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFiliale, setSelectedFiliale] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    badge: '',
    description: '',
    location: '',
    services: '',
    domains: '',
    details: '',
    contact_email: '',
    contact_phone: '',
    address: '',
    website: '',
    logoFile: null,
    active: true
  });
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    fetchFiliales();
  }, []);

  const fetchFiliales = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await filialesService.getAll();
      setFiliales(data);
    } catch (err) {
      setError('Erreur lors du chargement des filiales: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    resetForm();
    setShowForm(true);
  };

  const handleEdit = (filiale) => {
    setSelectedFiliale(filiale);
    setFormData({
      name: filiale.name || '',
      badge: filiale.badge || '',
      description: filiale.description || '',
      location: filiale.location || '',
      services: filiale.services || '',
      domains: filiale.domains || '',
      details: filiale.details || '',
      contact_email: filiale.contact_email || '',
      contact_phone: filiale.contact_phone || '',
      address: filiale.address || '',
      website: filiale.website || '',
      logoFile: null,
      active: filiale.active !== false
    });
    setImagePreview('');
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer cette filiale ?')) return;
    try {
      await filialesService.delete(id);
      setFiliales(filiales.filter(f => f.id !== id));
    } catch (err) {
      setError('Erreur lors de la suppression: ' + err.message);
    }
  };

  const handleToggleActive = async (filiale) => {
    try {
      const updated = await filialesService.update(filiale.id, { ...filiale, active: !filiale.active });
      setFiliales(filiales.map(f => f.id === filiale.id ? updated : f));
    } catch (err) {
      setError('Erreur lors de la mise à jour: ' + err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedFiliale) {
        const updated = await filialesService.update(selectedFiliale.id, formData);
        setFiliales(filiales.map(f => f.id === selectedFiliale.id ? updated : f));
      } else {
        const created = await filialesService.create(formData);
        setFiliales([created, ...filiales]);
      }
      resetForm();
    } catch (err) {
      console.error('Detailed error:', err);
      let errorMsg = 'Erreur lors de la sauvegarde: ' + err.message;
      if (err.status === 0 || err.message?.includes('ERR_CONNECTION_RESET')) {
        errorMsg = 'Erreur de connexion PocketBase. Assurez-vous que PocketBase est en cours d\'exécution à http://localhost:8090';
      } else if (err.status === 400) {
        errorMsg = 'Erreur de validation. Vérifiez que tous les champs requis sont remplis correctement.';
      } else if (err.status === 403) {
        errorMsg = 'Accès refusé. Vérifiez les règles de permission de la collection dans PocketBase.';
      }
      setError(errorMsg);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, logoFile: file });
      const reader = new FileReader();
      reader.onload = (event) => setImagePreview(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      badge: '',
      description: '',
      location: '',
      services: '',
      domains: '',
      details: '',
      contact_email: '',
      contact_phone: '',
      address: '',
      website: '',
      logoFile: null,
      active: true
    });
    setImagePreview('');
    setSelectedFiliale(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Gestion des Filiales</h2>
        <button
          onClick={handleCreate}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle Filiale
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {filiales.map((filiale) => (
          <motion.div
            key={filiale.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{filiale.name}</h3>
                  {filiale.badge && <p className="text-indigo-100 text-sm">{filiale.badge}</p>}
                </div>
                {filiale.active !== false ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
                    Actif
                  </span>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                    Inactif
                  </span>
                )}
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Présentation</h4>
                <p className="text-sm text-gray-600">{filiale.description}</p>
              </div>
              {filiale.location && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Localisation</h4>
                  <p className="text-sm text-gray-600">{filiale.location}</p>
                </div>
              )}
              {filiale.services && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Services</h4>
                  <p className="text-sm text-gray-600">{filiale.services}</p>
                </div>
              )}
              {filiale.domains && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Domaines</h4>
                  <p className="text-sm text-gray-600">{filiale.domains}</p>
                </div>
              )}
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Contact</h4>
                <p className="text-sm text-gray-600">{filiale.contact_email || 'N/A'}</p>
                {filiale.contact_phone && <p className="text-sm text-gray-600">{filiale.contact_phone}</p>}
              </div>
              {filiale.website && (
                <div>
                  <a href={filiale.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800">
                    {filiale.website}
                  </a>
                </div>
              )}
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => handleToggleActive(filiale)}
                  className="px-3 py-2 bg-green-100 text-green-800 rounded-md text-sm hover:bg-green-200"
                >
                  {filiale.active !== false ? 'Désactiver' : 'Activer'}
                </button>
                <button
                  onClick={() => handleEdit(filiale)}
                  className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(filiale.id)}
                  className="px-3 py-2 bg-red-100 text-red-700 rounded-md text-sm hover:bg-red-200"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {(showForm || selectedFiliale) && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-gray-50 border rounded-lg p-6"
        >
          <h3 className="text-lg font-semibold mb-4">
            {selectedFiliale ? `Modifier ${selectedFiliale.name}` : 'Ajouter une nouvelle filiale'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom de la filiale *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Site web
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                required
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Localisation
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Badge
                </label>
                <input
                  type="text"
                  value={formData.badge}
                  onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                  placeholder="AB'Ynnov and Co"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Services (séparés par des virgules)
              </label>
              <textarea
                rows={2}
                value={formData.services}
                onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                placeholder="Conseil, Formation, Audit"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Domaines (séparés par des virgules)
              </label>
              <textarea
                rows={2}
                value={formData.domains}
                onChange={(e) => setFormData({ ...formData, domains: e.target.value })}
                placeholder="Recrutement, Intérim, Audit"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Détails / points forts
              </label>
              <textarea
                rows={2}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Talent, Expertise, Support"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email de contact *
                </label>
                <input
                  type="email"
                  required
                  value={formData.contact_email}
                  onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone de contact
                </label>
                <input
                  type="tel"
                  value={formData.contact_phone}
                  onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adresse
              </label>
              <textarea
                rows={2}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Logo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Aperçu de l'image:</p>
                <img src={imagePreview} alt="Preview" className="max-w-xs h-auto rounded-md border" />
              </div>
            )}

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="active-filiale"
                  checked={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="active-filiale" className="ml-2 text-sm text-gray-700">
                  Filiale active
                </label>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                {selectedFiliale ? 'Sauvegarder les modifications' : 'Créer la filiale'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Annuler
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
}

function SettingsTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Paramètres Système</h2>
      <p className="text-gray-600 mb-4">
        Configurez les paramètres généraux du site.
      </p>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800">
          Fonctionnalité en développement. Les paramètres système seront configurables ici.
        </p>
      </div>
    </div>
  );
}

function MessagesTab({ admin }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [filter, setFilter] = useState('All');
  const [entityFilter, setEntityFilter] = useState('All');
  const [messageType, setMessageType] = useState('contacts'); // 'contacts' ou 'partnerships'
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Ajuster automatiquement l'onglet selon l'entité sélectionnée
  useEffect(() => {
    if (entityFilter === 'All' || contacts.length === 0) return;

    const entityContacts = contacts.filter(c => c.entity === entityFilter);
    const hasContacts = entityContacts.some(c => !c.partnership_type);
    const hasPartnerships = entityContacts.some(c => c.partnership_type);

    if (messageType === 'contacts' && !hasContacts && hasPartnerships) {
      setMessageType('partnerships');
    }
    if (messageType === 'partnerships' && !hasPartnerships && hasContacts) {
      setMessageType('contacts');
    }
  }, [entityFilter, contacts, messageType]);

  // Charger tous les contacts
  useEffect(() => {
    let isMounted = true;

    const fetchContacts = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log('📡 Appel à getAllContacts...');
        const data = await generalAdminService.getAllContacts();

        console.log('✅ Contacts reçus:', data);
        console.log('📊 Total:', data.length);
        console.log('🔍 Détails par entité:');
        console.log('   Intersec:', data.filter(c => c.entity === 'intersec').length);
        console.log('   AB\'Ynnov:', data.filter(c => c.entity === 'ab-ynnov').length);
        console.log('   H2I:', data.filter(c => c.entity === 'h2i').length);

        // Normaliser les champs is_read et status
        const normalizedData = data.map(contact => ({
          ...contact,
          is_read: contact.is_read === true || contact.is_read === '1' || contact.is_read === 1 ? true : false,
          status: contact.status || 'Draft'
        }));

        if (isMounted) {
          setContacts(normalizedData);
        }
      } catch (err) {
        if (isMounted) {
          setError('Erreur lors du chargement des messages: ' + err.message);
          console.error('❌ Erreur complète:', err);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Filtrer par type de message
  const getMessagesByType = () => {
    if (messageType === 'contacts') {
      return contacts.filter(c => !c.partnership_type);
    } else {
      return contacts.filter(c => c.partnership_type);
    }
  };

  const messagesByType = getMessagesByType();

  // Filtrer par statut
  const statusFiltered = filter === 'All'
    ? messagesByType
    : messagesByType.filter(c => c.status === filter);

  // Filtrer par entité
  const entityFiltered = entityFilter === 'All'
    ? statusFiltered
    : statusFiltered.filter(c => c.entity === entityFilter);

  // Filtrer par recherche
  const filteredContacts = entityFiltered.filter(c =>
    c.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Sélectionner un contact (marque automatiquement comme lu)
  const handleSelectContact = async (contact) => {
    setSelectedContact(contact);

    // Marquer comme lu si pas déjà lu
    if (!contact.is_read) {
      try {
        await generalAdminService.markContactAsRead(contact.id, contact.entity, true);

        // Mettre à jour l'état local
        setContacts(contacts.map(c =>
          c.id === contact.id ? { ...c, is_read: true } : c
        ));

        // Mettre à jour le contact sélectionné aussi
        setSelectedContact(prev => ({ ...prev, is_read: true }));

        console.log('✅ Message marqué comme lu:', contact.id);
      } catch (err) {
        console.error('Erreur lors du marquage comme lu:', err);
      }
    }
  };

  // Gmail link - utilise mailto: pour ouvrir l'application de messagerie par défaut
  const createGmailLink = (contact) => {
    const to = contact.email;
    const subject = contact.partnership_type 
      ? `Re: Demande de partenariat - ${contact.name}`
      : `Re: Demande de contact - ${contact.name}`;
    const body = `Bonjour ${contact.name},\n\n[Votre réponse ici]\n\nCordialement,\n${admin?.full_name || 'Équipe Intersec Group'}`;
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Marquer comme traité
  const handleMarkAsProcessed = async () => {
    if (window.confirm('Marquer cette demande comme traitée ?')) {
      try {
        await generalAdminService.updateContactStatus(selectedContact.id, selectedContact.entity, 'Closed');
        await generalAdminService.markContactAsRead(selectedContact.id, selectedContact.entity, true);

        setContacts(contacts.map(c =>
          c.id === selectedContact.id ? { ...c, status: 'Closed', is_read: true } : c
        ));
        setSelectedContact(null);
        alert('✅ Demande traitée !');
      } catch (err) {
        alert('Erreur: ' + err.message);
      }
    }
  };

  // Réouvrir
  const handleReopenRequest = async () => {
    if (window.confirm('Réouvrir cette demande ?')) {
      try {
        await generalAdminService.updateContactStatus(selectedContact.id, selectedContact.entity, 'Draft');
        setContacts(contacts.map(c =>
          c.id === selectedContact.id ? { ...c, status: 'Draft' } : c
        ));
        setSelectedContact(null);
        alert('✅ Demande réouverte !');
      } catch (err) {
        alert('Erreur: ' + err.message);
      }
    }
  };

  const contactsOnly = contacts.filter(c => !c.partnership_type);
  const partnershipsOnly = contacts.filter(c => c.partnership_type);

  const getStats = (items) => ({
    total: items.length,
    draft: items.filter(c => c.status === 'Draft').length,
    replied: items.filter(c => c.status === 'Replied').length,
    closed: items.filter(c => c.status === 'Closed').length
  });

  const stats = messageType === 'contacts' ? getStats(contactsOnly) : getStats(partnershipsOnly);

  // Réinitialiser la pagination si le filtre change
  useEffect(() => {
    setCurrentPage(1);
  }, [filter, entityFilter, messageType, searchTerm]);

  const unreadCount = messagesByType.filter(c => !c.is_read && c.status !== 'Closed').length;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Draft': return 'bg-gray-100 text-gray-700';
      case 'Replied': return 'bg-blue-100 text-blue-700';
      case 'Closed': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getEntityColor = (entity) => {
    switch (entity) {
      case 'intersec': return 'bg-emerald-100 text-emerald-700';
      case 'ab-ynnov': return 'bg-blue-100 text-blue-700';
      case 'h2i': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getEntityName = (entity) => {
    switch (entity) {
      case 'intersec': return 'Intersec';
      case 'ab-ynnov': return 'AB\'Ynnov';
      case 'h2i': return 'H2I';
      default: return entity;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-800">{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header avec badge de notification */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Gestion des Messages</h2>
            <div className="flex items-center gap-4">
              <span className="text-blue-100">Bienvenue dans le panneau de gestion centralisée</span>
              {unreadCount > 0 && (
                <motion.span
                  className="px-4 py-2 bg-red-500 rounded-full text-sm font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🔔 {unreadCount} nouveau{unreadCount > 1 ? 'x' : ''}
                </motion.span>
              )}
            </div>
          </div>
        </div>

        {/* Toggle Contacts/Partenariats */}
        <div className="mt-6 flex gap-3">
          <motion.button
            onClick={() => { setMessageType('contacts'); setSelectedContact(null); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
              messageType === 'contacts'
                ? 'bg-white text-gray-900 shadow-lg'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <MessageSquare className="h-5 w-5" />
            Contacts ({contactsOnly.length})
          </motion.button>
          <motion.button
            onClick={() => { setMessageType('partnerships'); setSelectedContact(null); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
              messageType === 'partnerships'
                ? 'bg-white text-gray-900 shadow-lg'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Users className="h-5 w-5" />
            Partenariats ({partnershipsOnly.length})
          </motion.button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {[
          { label: 'Total', value: stats.total, icon: messageType === 'contacts' ? MessageSquare : Users, color: 'blue' },
          { label: 'En attente', value: stats.draft, icon: Clock, color: 'yellow' },
          { label: 'Répondus', value: stats.replied, icon: Check, color: 'emerald' },
          { label: 'Fermés', value: stats.closed, icon: EyeOff, color: 'gray' }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                <p className="text-4xl font-black mt-2">{stat.value}</p>
              </div>
              <div
                className={`p-4 rounded-full`}
                style={{
                  backgroundColor: stat.color === 'blue' ? '#eff6ff' :
                                  stat.color === 'yellow' ? '#fefce8' :
                                  stat.color === 'emerald' ? '#f0fdf4' : '#f3f4f6'
                }}
              >
                <stat.icon
                  className="h-7 w-7"
                  style={{
                    color: stat.color === 'blue' ? '#0284c7' :
                          stat.color === 'yellow' ? '#ca8a04' :
                          stat.color === 'emerald' ? '#16a34a' : '#6b7280'
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filtres et recherche */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="🔍 Rechercher par nom, email ou message..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">Tous les statuts</option>
            <option value="Draft">En attente</option>
            <option value="Replied">Répondus</option>
            <option value="Closed">Fermés</option>
          </select>
          <select
            value={entityFilter}
            onChange={(e) => setEntityFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">Toutes les entités</option>
            <option value="intersec">Intersec</option>
            <option value="ab-ynnov">AB'Ynnov</option>
            <option value="h2i">H2I</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Liste des messages */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Message Count */}
            {filteredContacts.length > 0 && (
              <div className="px-4 pt-3 pb-2 bg-gray-50 text-xs text-gray-600 border-b font-medium">
                📊 {filteredContacts.length} résultat{filteredContacts.length > 1 ? 's' : ''}
                {searchTerm && ` (pour "${searchTerm}")`}
              </div>
            )}

            <div className="max-h-[600px] overflow-y-auto">
              {paginatedContacts.map((contact, idx) => (
                <motion.div
                  key={contact.id}
                  onClick={() => handleSelectContact(contact)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`p-4 border-b cursor-pointer transition-all ${
                    selectedContact?.id === contact.id
                      ? 'bg-blue-50 border-l-4 border-l-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 truncate">
                          {contact.name}
                        </h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${getEntityColor(contact.entity)}`}>
                          {getEntityName(contact.entity)}
                        </span>
                        {contact.partnership_type && (
                          <span className="inline-block px-2 py-1 text-xs font-bold bg-purple-100 text-purple-700 rounded-full flex-shrink-0">
                            🤝 Partenariat
                          </span>
                        )}
                        {!contact.is_read && contact.status !== 'Closed' && (
                          <span className="inline-block px-2 py-1 text-xs font-bold bg-red-500 text-white rounded-full flex-shrink-0">
                            Nouveau
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 truncate mb-1">
                        {contact.email}
                      </p>
                      <p className="text-xs text-gray-700 line-clamp-2">
                        {contact.message?.substring(0, 50)}...
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span
                        className={`inline-block px-2 py-1 text-xs font-bold rounded-full ${
                          contact.status === 'Draft' ? 'bg-yellow-100 text-yellow-700' :
                          contact.status === 'Replied' ? 'bg-green-100 text-green-700' :
                          'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {contact.status === 'Draft' ? '⏳' : contact.status === 'Replied' ? '✅' : '🔒'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-4 py-3 bg-gray-50 border-t flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  Page {currentPage} sur {totalPages}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded border transition ${
                      currentPage === 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    ← Précédent
                  </button>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded border transition ${
                      currentPage === totalPages
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    Suivant →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Détails du message sélectionné */}
        <div className="lg:col-span-2">
          {selectedContact ? (
            <motion.div
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {/* Header */}
              <div
                className={`text-white p-6 ${
                  selectedContact.partnership_type
                    ? 'bg-gradient-to-r from-purple-600 to-purple-800'
                    : 'bg-gradient-to-r from-blue-600 to-blue-800'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">
                        {selectedContact.name}
                      </h3>
                      <span className={`px-3 py-1 text-sm font-bold rounded-full ${getEntityColor(selectedContact.entity)}`}>
                        {getEntityName(selectedContact.entity)}
                      </span>
                      <span className={`px-3 py-1 text-sm font-bold rounded-full ${
                        selectedContact.partnership_type
                          ? 'bg-purple-100/30 text-white border border-purple-200'
                          : 'bg-blue-100/30 text-white border border-blue-200'
                      }`}>
                        {selectedContact.partnership_type ? '🤝 Demande de Partenariat' : '💬 Contact'}
                      </span>
                    </div>
                    <p className="text-white/90">
                      {selectedContact.email}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedContact(null)}
                    className="p-2 hover:bg-white/20 rounded-full transition"
                  >
                    <X className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Info Grid */}
                <div className={`grid gap-4 mb-6 ${selectedContact.partnership_type ? 'grid-cols-2' : 'grid-cols-3'}`}>
                  <div>
                    <p className="text-xs text-gray-600 font-bold uppercase">Téléphone</p>
                    <p className="font-semibold text-gray-900 mt-1">
                      {selectedContact.phone || '—'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-bold uppercase">Email</p>
                    <p className="font-semibold text-gray-900 mt-1 break-all">
                      {selectedContact.email || '—'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-bold uppercase">Date</p>
                    <p className="font-semibold text-gray-900 mt-1">
                      {new Date(selectedContact.created).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  {selectedContact.partnership_type && (
                    <>
                      <div>
                        <p className="text-xs text-gray-600 font-bold uppercase">Entreprise</p>
                        <p className="font-semibold text-gray-900 mt-1">
                          {selectedContact.company || '—'}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 font-bold uppercase">Type de Partenariat</p>
                        <p className="font-semibold text-gray-900 mt-1">
                          {selectedContact.partnership_type || '—'}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <p className="text-xs text-gray-600 font-bold uppercase mb-3">Message</p>
                  <div className="bg-gray-50 rounded-lg p-4 text-gray-700 whitespace-pre-wrap border-l-4 border-l-blue-500">
                    {selectedContact.message}
                  </div>
                </div>

                {/* Admin Response if exists */}
                {selectedContact.admin_response && (
                  <div className="mb-6">
                    <p className="text-xs text-gray-600 font-bold uppercase mb-3">Votre réponse</p>
                    <div className="bg-blue-50 rounded-lg p-4 text-gray-700 whitespace-pre-wrap border-l-4 border-l-blue-500">
                      {selectedContact.admin_response}
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      ✅ Envoyé le {new Date(selectedContact.response_date).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                )}
              </div>

              {/* Actions Footer */}
              <div className="border-t border-gray-200 p-6 bg-gray-50 flex gap-3 flex-wrap">
                <a
                  href={createGmailLink(selectedContact)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-semibold min-w-[200px] shadow-lg"
                >
                  <Mail className="h-5 w-5" />
                  Répondre via Gmail
                </a>

                {selectedContact.status !== 'Closed' ? (
                  <motion.button
                    onClick={handleMarkAsProcessed}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition font-semibold min-w-[200px] shadow-lg"
                  >
                    <Check className="h-5 w-5" />
                    ✅ Demande traitée
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={handleReopenRequest}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition font-semibold min-w-[200px] shadow-lg"
                  >
                    <AlertCircle className="h-5 w-5" />
                    🔄 Réouvrir
                  </motion.button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="bg-white rounded-lg shadow-sm p-12 text-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="text-6xl mb-4">📬</div>
              <p className="text-xl text-gray-600 font-semibold">
                Sélectionnez un message pour voir les détails
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {filteredContacts.length === 0 && (
        <div className="text-center py-12">
          <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Aucun message trouvé</p>
        </div>
      )}
    </div>
  );
}