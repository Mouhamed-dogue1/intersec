import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Reply, Check, Clock, AlertCircle, LogOut, Trash2, Eye, EyeOff, X } from 'lucide-react';

export default function AdminDashboard({ 
  contactService, 
  admin, 
  entityName,
  onLogout,
  brandColor = 'blue'
}) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [filter, setFilter] = useState('all');

  // Couleurs
  const colorMap = {
    green: {
      primary: '#228b22',
      dark: '#1a472a',
      light: '#f0f4f0',
      gradient: 'from-emerald-600 to-emerald-800',
      badge: 'bg-emerald-100 text-emerald-700'
    },
    blue: {
      primary: '#3498db',
      dark: '#2c3e50',
      light: '#ecf0f1',
      gradient: 'from-blue-600 to-blue-800',
      badge: 'bg-blue-100 text-blue-700'
    }
  };

  const colors = colorMap[brandColor] || colorMap.blue;

  // Charger les contacts
  useEffect(() => {
    let isMounted = true;

    const fetchContacts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await contactService.getAll();
        if (isMounted) {
          setContacts(data);
        }
      } catch (err) {
        if (isMounted) {
          setError('Erreur lors du chargement: ' + err.message);
          console.error(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchContacts();
    return () => { isMounted = false; };
  }, []);

  // Filtrer
  const filteredContacts = filter === 'all' 
    ? contacts 
    : contacts.filter(c => c.status === filter);

  // Sélectionner un contact
  const handleSelectContact = async (contact) => {
    setSelectedContact(contact);
    if (!contact.is_read) {
      try {
        await contactService.markAsRead(contact.id);
        setContacts(contacts.map(c => 
          c.id === contact.id ? { ...c, is_read: true } : c
        ));
      } catch (err) {
        console.error('Erreur:', err);
      }
    }
  };

  // Gmail link
  const createGmailLink = (contact) => {
    const to = contact.email;
    const subject = `Re: Demande de contact - ${contact.name}`;
    const body = `Bonjour ${contact.name},\n\n[Votre réponse ici]\n\nCordialement,\n${admin.full_name}`;
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Marquer comme traité
  const handleMarkAsProcessed = async () => {
    if (window.confirm('Marquer cette demande comme traitée ?')) {
      try {
        await contactService.updateStatus(selectedContact.id, 'Closed');
        setContacts(contacts.map(c => 
          c.id === selectedContact.id ? { ...c, status: 'Closed' } : c
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
        await contactService.updateStatus(selectedContact.id, 'Draft');
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

  const stats = {
    total: contacts.length,
    draft: contacts.filter(c => c.status === 'Draft').length,
    replied: contacts.filter(c => c.status === 'Replied').length,
    closed: contacts.filter(c => c.status === 'Closed').length
  };

  const unreadCount = contacts.filter(c => !c.is_read).length;

  return (
    <motion.div
      className="min-h-screen"
      style={{ backgroundColor: colors.light }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header Premium */}
      <div 
        className="text-white sticky top-0 z-50 shadow-2xl"
        style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.dark})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1"
            >
              <h1 className="text-5xl font-black tracking-tight">
                {entityName}
              </h1>
              <div className="mt-3 flex items-center gap-2">
                <p className="text-white/80 text-lg">Bienvenue</p>
                <span className="font-bold text-xl">{admin.full_name}</span>
                {unreadCount > 0 && (
                  <motion.span 
                    className="ml-4 px-3 py-1 bg-red-500 rounded-full text-sm font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🔔 {unreadCount} nouveau{unreadCount > 1 ? 'x' : ''}
                  </motion.span>
                )}
              </div>
            </motion.div>
            <motion.button
              onClick={onLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold shadow-lg"
            >
              <LogOut size={20} />
              Déconnexion
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {[
            { label: 'Total', value: stats.total, icon: Mail, color: 'blue' },
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
                    size={28}
                    color={stat.color === 'blue' ? '#0284c7' : 
                          stat.color === 'yellow' ? '#ca8a04' :
                          stat.color === 'emerald' ? '#16a34a' : '#6b7280'}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Error Alert */}
        {error && (
          <motion.div
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700">{error}</p>
          </motion.div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* List Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Filter */}
            <div className="bg-white rounded-2xl p-5 shadow-lg mb-5">
              <p className="font-bold text-gray-900 mb-4">Filtrer</p>
              <div className="space-y-2">
                {['all', 'Draft', 'Replied', 'Closed'].map(status => (
                  <motion.button
                    key={status}
                    onClick={() => setFilter(status)}
                    whileHover={{ x: 5 }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition font-medium ${
                      filter === status
                        ? 'text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    style={filter === status ? { backgroundColor: colors.primary } : {}}
                  >
                    {status === 'all' ? '📧 Tous' : status === 'Draft' ? '⏳ En attente' : status === 'Replied' ? '✅ Répondus' : '🔒 Fermés'}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Contacts List */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="max-h-[600px] overflow-y-auto">
                {loading ? (
                  <div className="p-8 text-center text-gray-500">
                    <div className="animate-spin text-4xl mb-3">⏳</div>
                    Chargement...
                  </div>
                ) : filteredContacts.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <div className="text-4xl mb-3">📭</div>
                    Aucune demande
                  </div>
                ) : (
                  filteredContacts.map((contact, idx) => (
                    <motion.div
                      key={contact.id}
                      onClick={() => handleSelectContact(contact)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ x: 5 }}
                      className={`p-4 border-b cursor-pointer transition-all ${
                        selectedContact?.id === contact.id 
                          ? 'bg-blue-50 border-l-4'
                          : 'hover:bg-gray-50'
                      }`}
                      style={selectedContact?.id === contact.id ? { borderLeftColor: colors.primary } : {}}
                    >
                        <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-gray-900 truncate">
                              {contact.name}
                            </h3>
                            {!contact.is_read && (
                              <span className="inline-block px-2 py-1 text-xs font-bold bg-red-500 text-white rounded-full flex-shrink-0">
                                Nouveau
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 truncate mb-1">
                            {contact.email}
                          </p>
                          <p className="text-xs text-gray-700 line-clamp-2">
                            {contact.message.substring(0, 50)}...
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
                  ))
                )}
              </div>
            </div>
          </motion.div>

          {/* Detail Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {selectedContact ? (
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                {/* Header with Close Button */}
                <div 
                  className="text-white p-8"
                  style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.dark})` }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-3xl font-black">
                        {selectedContact.name}
                      </h2>
                      <p className="text-white/90 mt-2">
                        {selectedContact.email}
                      </p>
                    </div>
                    <motion.button
                      onClick={() => setSelectedContact(null)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:bg-white/20 rounded-full transition"
                    >
                      <X size={28} className="text-white" />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 max-h-[550px] overflow-y-auto">
                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <p className="text-xs text-gray-600 font-bold uppercase">Téléphone</p>
                      <p className="font-semibold text-gray-900 mt-1">
                        {selectedContact.phone || '—'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-bold uppercase">Entreprise</p>
                      <p className="font-semibold text-gray-900 mt-1">
                        {selectedContact.company || '—'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-bold uppercase">Type</p>
                      <p className="font-semibold text-gray-900 mt-1">
                        {selectedContact.partnership_type || '—'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-bold uppercase">Date</p>
                      <p className="font-semibold text-gray-900 mt-1">
                        {new Date(selectedContact.created).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <p className="text-xs text-gray-600 font-bold uppercase mb-3">Message</p>
                    <div className="bg-gray-50 rounded-xl p-4 text-gray-700 whitespace-pre-wrap border-l-4" style={{ borderLeftColor: colors.primary }}>
                      {selectedContact.message}
                    </div>
                  </div>

                  {/* Admin Response if exists */}
                  {selectedContact.admin_response && (
                    <div className="mb-8">
                      <p className="text-xs text-gray-600 font-bold uppercase mb-3">Votre réponse</p>
                      <div className="bg-blue-50 rounded-xl p-4 text-gray-700 whitespace-pre-wrap border-l-4 border-l-blue-500">
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
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg transition font-semibold min-w-[200px] shadow-lg"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <Mail size={20} />
                    Répondre via Gmail
                  </a>

                  {selectedContact.status !== 'Closed' ? (
                    <motion.button
                      onClick={handleMarkAsProcessed}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition font-semibold min-w-[200px] shadow-lg"
                    >
                      <Check size={20} />
                      ✅ Demande traitée
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={handleReopenRequest}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition font-semibold min-w-[200px] shadow-lg"
                    >
                      <AlertCircle size={20} />
                      🔄 Réouvrir
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-12 text-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="text-6xl mb-4">📬</div>
                <p className="text-xl text-gray-600 font-semibold">
                  Sélectionnez une demande pour voir les détails
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
