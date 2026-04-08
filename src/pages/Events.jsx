import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight, Sparkles, Star, Zap } from 'lucide-react';
import { eventsService, getFileUrl } from '../services/pocketbase';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const publishedEvents = await eventsService.getPublished();
        setEvents(publishedEvents);
      } catch (err) {
        setError('Impossible de charger les événements.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  // Séparer événements à venir et passés
  const now = new Date();
  const upcomingEvents = events.filter(e => new Date(e.event_date) >= now).sort((a, b) => new Date(a.event_date) - new Date(b.event_date));
  const pastEvents = events.filter(e => new Date(e.event_date) < now).sort((a, b) => new Date(b.event_date) - new Date(a.event_date));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const EventCard = ({ event, isUpcoming = false }) => (
    <motion.article
      variants={itemVariants}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
      whileHover={{
        y: -4,
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      onClick={() => setSelectedEvent(event)}
    >
      {/* Petite image en haut si disponible */}
      {(event.image_file?.length || event.image) && (
        <div className="relative h-32 overflow-hidden bg-gray-100">
          <img
            src={event.image_file?.length ? getFileUrl(event, 'image_file') : event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
          />
          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
              isUpcoming
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-500 text-white'
            }`}>
              {isUpcoming ? 'À venir' : 'Passé'}
            </span>
          </div>
        </div>
      )}

      {/* Contenu compact */}
      <div className="p-4">
        {/* Titre */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-intersec-green transition-colors">
          {event.title}
        </h3>

        {/* Date et lieu */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4 text-intersec-green" />
            <span className="font-medium">
              {new Date(event.event_date).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}
            </span>
          </div>

          {event.location && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-blue-500" />
              <span className="truncate">{event.location}</span>
            </div>
          )}
        </div>

        {/* Description courte */}
        <p className="text-sm text-gray-500 mt-3 line-clamp-2">
          {event.description}
        </p>

        {/* Bouton Voir détails */}
        <div className="mt-4 flex justify-end">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-intersec-green group-hover:text-emerald-600 transition-colors">
            Voir détails
            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.article>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-intersec-green/10 to-emerald-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/5 to-orange-200/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center justify-center gap-2 mb-8 px-6 py-3 bg-gradient-to-r from-intersec-green/10 to-emerald-100/50 rounded-full border border-intersec-green/20 backdrop-blur-sm"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-5 w-5 text-intersec-green" />
            <span className="text-sm font-bold text-intersec-green">Événements Exceptionnels</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nos Événements
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Découvrez nos moments clés, conférences inspirantes et rassemblements mémorables qui façonnent l'avenir de notre groupe.
          </motion.p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {loading && (
          <motion.div
            className="flex flex-col items-center justify-center py-32"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="relative">
              <div className="w-20 h-20 border-4 border-intersec-green/20 border-t-intersec-green rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-emerald-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
            </div>
            <p className="mt-8 text-gray-600 font-bold text-lg">Chargement des événements magiques...</p>
          </motion.div>
        )}

        {error && (
          <motion.div
            className="max-w-2xl mx-auto rounded-3xl bg-gradient-to-r from-red-50 to-red-50/50 border border-red-200 p-10 text-center shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>
            <p className="text-red-700 font-bold text-xl">{error}</p>
          </motion.div>
        )}

        {!loading && !error && events.length === 0 && (
          <motion.div
            className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200 p-16 text-center shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 mb-8 shadow-lg">
              <Calendar className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">Aucun événement pour le moment</h3>
            <p className="text-xl text-gray-600 leading-relaxed">Les événements à venir seront affichés ici avec toute leur splendeur.</p>
          </motion.div>
        )}

        {/* Upcoming Events */}
        {!loading && !error && upcomingEvents.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-24"
          >
            <div className="flex items-center justify-center gap-4 mb-16">
              <motion.div
                className="w-2 h-12 bg-gradient-to-b from-intersec-green to-emerald-400 rounded-full"
                animate={{ scaleY: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-intersec-green to-emerald-600 bg-clip-text text-transparent">
                Événements à Venir
              </h2>
              <motion.div
                className="w-2 h-12 bg-gradient-to-b from-intersec-green to-emerald-400 rounded-full"
                animate={{ scaleY: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} isUpcoming={true} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Past Events */}
        {!loading && !error && pastEvents.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center justify-center gap-4 mb-16">
              <motion.div
                className="w-2 h-12 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full"
                animate={{ scaleY: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <h2 className="text-4xl sm:text-5xl font-black text-gray-800">
                Événements Passés
              </h2>
              <motion.div
                className="w-2 h-12 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full"
                animate={{ scaleY: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isUpcoming={false} />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
              >
                ✕
              </button>

              {/* Modal Content */}
              {(selectedEvent.image_file?.length || selectedEvent.image) && (
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={selectedEvent.image_file?.length ? getFileUrl(selectedEvent, 'image_file') : selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              <div className="p-8">
                <h2 className="text-4xl font-black text-gray-900 mb-4">{selectedEvent.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{selectedEvent.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-6 w-6 text-intersec-green" />
                    <span className="font-bold text-lg">
                      {new Date(selectedEvent.event_date).toLocaleDateString('fr-FR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  {selectedEvent.location && (
                    <div className="flex items-center gap-4">
                      <MapPin className="h-6 w-6 text-intersec-green" />
                      <span className="font-bold text-lg">{selectedEvent.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}