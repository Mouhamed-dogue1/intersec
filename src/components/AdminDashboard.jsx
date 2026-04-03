import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Reply, Check, Clock, AlertCircle, LogOut, Trash2, Eye, EyeOff } from 'lucide-react';
import { emailService } from '../services/pocketbase';

export default function AdminDashboard({ 
  contactService, 
  admin, 
  entityName,
  onLogout,
  brandColor = 'blue' // 'green' pour Intersec, 'blue' pour AB'Ynnov/H2I
}) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [sendingReply, setSendingReply] = useState(false);
  const [filter, setFilter] = useState('Draft');
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Charger les contacts
  useEffect(() => {
    let isMounted = true;

    const fetchContacts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await contactService.getAll();
        
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
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchContacts();

    return () => {
      isMounted = false;
    };
  }, []);

  // Filtrer les contacts
  const statusFiltered = filter === 'all' 
    ? contacts 
    : contacts.filter(c => c.status === filter);

  // Filtrer par recherche
  const filteredContacts = statusFiltered.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedContacts = filteredContacts.slice(startIndex, startIndex + itemsPerPage);

  // Réinitialiser la pagination si le filtre change
  useEffect(() => {
    setCurrentPage(1);
  }, [filter, searchTerm]);

  // Sélectionner un contact ET le marquer comme lu
  const handleSelectContact = async (contact) => {
    setSelectedContact(contact);
    setReplyText(contact.admin_response || '');
    setShowReplyBox(false);

    // Marquer comme lu si non lu
    if (!contact.is_read) {
      try {
        await contactService.markAsRead(contact.id);
        // Mettre à jour la liste localement
        setContacts(contacts.map(c => 
          c.id === contact.id ? { ...c, is_read: true } : c
        ));
      } catch (err) {
        console.error('Erreur lors du marquage comme lu:', err);
      }
    }
  };

  // Créer le lien mailto pour Gmail
  const createGmailLink = (contact) => {
    const to = contact.email;
    const subject = `Re: Demande de contact - ${contact.name}`;
    const body = `Bonjour ${contact.name},\n\n[Votre réponse ici]\n\nCordialement,\n${admin.full_name}`;
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Envoyer une réponse
  const handleSendReply = async () => {
    if (!replyText.trim()) {
      alert('Veuillez entrer un message');
      return;
    }

    setSendingReply(true);
    try {
      // 1. Mettre à jour le statut et la réponse dans PocketBase
      await contactService.addResponse(selectedContact.id, replyText);

      // 2. Envoyer un email au visiteur
      await emailService.sendResponse(
        selectedContact.email,
        `Re: ${selectedContact.message.substring(0, 50)}...`,
        replyText,
        admin.full_name
      );

      // 3. Rafraîchir la liste
      await fetchContacts();
      
      alert('Réponse envoyée avec succès!');
      setShowReplyBox(false);
      setReplyText('');
      setSelectedContact(null);
    } catch (err) {
      alert('Erreur lors de l\'envoi: ' + err.message);
    } finally {
      setSendingReply(false);
    }
  };

  // Marquer comme traité (Closed)
  const handleMarkAsProcessed = async () => {
    if (window.confirm('Voulez-vous marquer cette demande comme traitée avec succès ?')) {
      try {
        await contactService.updateStatus(selectedContact.id, 'Closed');
        await contactService.markAsRead(selectedContact.id);
        setContacts(contacts.map(c => 
          c.id === selectedContact.id ? { ...c, status: 'Closed', is_read: true } : c
        ));
        setSelectedContact({ ...selectedContact, status: 'Closed', is_read: true });
        alert('✅ Demande marquée comme traitée !');
      } catch (err) {
        alert('Erreur: ' + err.message);
      }
    }
  };

  // Réouvrir une demande fermée
  const handleReopenRequest = async () => {
    if (window.confirm('Voulez-vous réouvrir cette demande ?')) {
      try {
        await contactService.updateStatus(selectedContact.id, 'Draft');
        setContacts(contacts.map(c => 
          c.id === selectedContact.id ? { ...c, status: 'Draft' } : c
        ));
        setSelectedContact({ ...selectedContact, status: 'Draft' });
        alert('✅ Demande réouverte !');
      } catch (err) {
        alert('Erreur: ' + err.message);
      }
    }
  };

  // Marquer comme fermé
  const handleCloseRequest = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir fermer cette requête?')) {
      try {
        await contactService.closeRequest(id);
        await fetchContacts();
      } catch (err) {
        alert('Erreur: ' + err.message);
      }
    }
  };

  // Stats
  const stats = {
    total: contacts.length,
    draft: contacts.filter(c => c.status === 'Draft').length,
    replied: contacts.filter(c => c.status === 'Replied').length,
    closed: contacts.filter(c => c.status === 'Closed').length
  };

  // Map couleurs
  const colorMap = {
    green: {
      bg: 'from-intersec-green to-intersec-dark',
      bgLight: 'bg-intersec-light',
      btn: 'bg-intersec-green hover:bg-intersec-dark',
      text: 'text-intersec-green',
      border: 'border-intersec-green',
      accent: 'from-intersec-green to-intersec-dark'
    },
    blue: {
      bg: 'from-abynnov-blue to-abynnov-dark',
      bgLight: 'bg-abynnov-light',
      btn: 'bg-abynnov-blue hover:bg-abynnov-dark',
      text: 'text-abynnov-blue',
      border: 'border-abynnov-blue',
      accent: 'from-abynnov-blue to-abynnov-dark'
    }
  };

  const colors = colorMap[brandColor] || colorMap.blue;

  return (
    <motion.div
      className={`min-h-screen bg-gradient-to-br ${colors.bg} ${colors.bgLight}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header Premium */}
      <div className={`bg-gradient-to-r ${colors.bg} text-white sticky top-0 z-50 shadow-2xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-black">
              🎯 {entityName}
            </h1>
            <p className="text-gray-100 mt-2 font-light">
              Panel d'Administration - Bienvenue <span className="font-bold">{admin.full_name}</span>
            </p>
          </motion.div>
          <motion.button
            onClick={onLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition font-semibold shadow-lg"
          >
            <LogOut size={20} />
            Déconnexion
          </motion.button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total" value={stats.total} icon={Mail} color="blue" />
          <StatCard label="En attente" value={stats.draft} icon={Clock} color="yellow" />
          <StatCard label="Répondus" value={stats.replied} icon={Check} color="green" />
          <StatCard label="Fermés" value={stats.closed} icon={EyeOff} color="gray" />
        </div>

        {/* Error Alert */}
        {error && (
          <motion.div
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700">{error}</p>
          </motion.div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contacts List */}
          <div className="lg:col-span-1">
            {/* Filter Buttons */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <p className="text-sm font-semibold text-gray-700 mb-3">Filtrer par:</p>
              <div className="space-y-2">
                {['all', 'Draft', 'Replied', 'Closed'].map(status => (
                  <button
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      filter === status
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {status === 'all' ? 'Tous' : status}
                  </button>
                ))}
              </div>
            </div>

            {/* Contacts List */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-100">
              {/* Search Bar */}
              <div className="p-3 border-b bg-gray-50">
                <input
                  type="text"
                  placeholder="🔍 Rechercher par nom ou email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              {/* Message Count */}
              {filteredContacts.length > 0 && (
                <div className="px-3 pt-2 pb-1 bg-gray-50 text-xs text-gray-600 border-b font-medium">
                  📊 {filteredContacts.length} résultat{filteredContacts.length > 1 ? 's' : ''}
                  {searchTerm && ` (pour "${searchTerm}")`}
                  {filter === 'all' && ` — Affichage pagination 15/page`}
                </div>
              )}

              <div className="h-96 overflow-y-auto bg-white">
                {loading ? (
                  <div className="p-8 text-center text-gray-500">
                    Chargement...
                  </div>
                ) : filteredContacts.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    Aucun message
                  </div>
                ) : (
                  paginatedContacts.map((contact, idx) => (
                    <motion.div
                      key={contact.id}
                      onClick={() => handleSelectContact(contact)}
                      className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-blue-50 transition ${
                        selectedContact?.id === contact.id ? 'bg-blue-100 border-l-4 border-l-blue-500' : ''
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-gray-900 truncate">
                              {contact.name}
                            </h3>
                            {!contact.is_read && contact.status !== 'Closed' && (
                              <span className="inline-block px-2 py-1 text-xs font-semibold bg-red-500 text-white rounded-full">
                                Nouveau
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 truncate">
                            {contact.email}
                          </p>
                          <p className="text-xs text-gray-600 truncate mt-1">
                            {contact.message.substring(0, 40)}...
                          </p>
                        </div>
                        <div className="ml-2 flex-shrink-0">
                          <StatusBadge status={contact.status} />
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="px-4 py-3 bg-gray-50 border-t flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    Page {currentPage} sur {totalPages}
                  </span>
                  <div className="flex gap-2">
                    <motion.button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
                      className={`px-3 py-1 rounded border transition text-xs ${
                        currentPage === 1
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      ← Précédent
                    </motion.button>
                    <motion.button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
                      className={`px-3 py-1 rounded border transition text-xs ${
                        currentPage === totalPages
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      Suivant →
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            {selectedContact ? (
              <motion.div
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {/* Contact Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedContact.name}
                    </h2>
                    <p className="text-gray-600">
                      {selectedContact.email}
                    </p>
                  </div>
                  <StatusBadge status={selectedContact.status} />
                </div>

                {/* Contact Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Téléphone</p>
                    <p className="font-semibold text-gray-900">
                      {selectedContact.phone || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Entreprise</p>
                    <p className="font-semibold text-gray-900">
                      {selectedContact.company || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Type de partenariat</p>
                    <p className="font-semibold text-gray-900">
                      {selectedContact.partnership_type || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(selectedContact.created).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6 border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Message</h3>
                  <div className="bg-gray-50 rounded-lg p-4 text-gray-700 whitespace-pre-wrap">
                    {selectedContact.message}
                  </div>
                </div>

                {/* Admin Response */}
                {selectedContact.admin_response && (
                  <div className="mb-6 border-t border-gray-200 pt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Votre réponse</h3>
                    <div className="bg-blue-50 rounded-lg p-4 text-gray-700 whitespace-pre-wrap border-l-4 border-l-blue-500">
                      {selectedContact.admin_response}
                    </div>
                    {selectedContact.response_date && (
                      <p className="text-xs text-gray-500 mt-2">
                        Envoyé le {new Date(selectedContact.response_date).toLocaleDateString('fr-FR')}
                      </p>
                    )}
                  </div>
                )}

                {/* Reply Box */}
                <div className="flex gap-3 mt-6 border-t border-gray-200 pt-6 flex-wrap">
                  <a
                    href={createGmailLink(selectedContact)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 ${colors.btn} text-white rounded-lg transition font-semibold min-w-max`}
                  >
                    <Mail size={20} />
                    Répondre via Gmail
                  </a>
                  
                  {selectedContact.status !== 'Closed' ? (
                    <motion.button
                      onClick={handleMarkAsProcessed}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition font-semibold min-w-max shadow-lg"
                    >
                      <Check size={20} />
                      ✅ Demande traitée
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={handleReopenRequest}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition font-semibold min-w-max shadow-lg"
                    >
                      <AlertCircle size={20} />
                      🔄 Réouvrir
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center text-gray-500">
                <Mail size={48} className="mx-auto mb-4 opacity-50" />
                <p>Sélectionnez un message pour voir les détails</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Composant pour les cartes de statistiques
function StatCard({ label, value, icon: Icon, color }) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    gray: 'bg-gray-50 text-gray-600 border-gray-200'
  };

  return (
    <motion.div
      className={`${colorClasses[color]} border rounded-lg p-6`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-75">{label}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <Icon size={32} className="opacity-25" />
      </div>
    </motion.div>
  );
}

// Composant pour le badge de statut
function StatusBadge({ status }) {
  const statusConfig = {
    Draft: { bg: 'bg-gray-100', text: 'text-gray-700', label: 'En attente' },
    Replied: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Répondu' },
    Closed: { bg: 'bg-green-100', text: 'text-green-700', label: 'Fermé' }
  };

  const config = statusConfig[status] || statusConfig.Draft;

  return (
    <span className={`${config.bg} ${config.text} px-3 py-1 rounded-full text-xs font-semibold`}>
      {config.label}
    </span>
  );
}
