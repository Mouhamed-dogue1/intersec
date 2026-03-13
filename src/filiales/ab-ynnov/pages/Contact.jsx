import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { abYnnovContactService } from '../../../services/pocketbase';

export default function ABYnniovContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    partnership_type: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        company: formData.company || '',
        partnership_type: formData.partnership_type || '',
        message: formData.message
      };

      await abYnnovContactService.create(dataToSend);

      setStatus({ 
        type: 'success', 
        message: 'Message reçu ! Nous vous recontacterons bientôt.' 
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        partnership_type: '',
        subject: '',
        message: ''
      });

      // Clear status after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Erreur lors de l\'envoi. Veuillez réessayer.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-black mb-6">Nous contacter</h1>
            <p className="text-xl text-blue-100">Nous sommes impatients de discuter de votre projet</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black mb-12 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Coordonnées
            </h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="space-y-8"
            >
              {/* Email */}
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex gap-4 group"
              >
                <motion.div
                  className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl group-hover:shadow-lg transition"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Mail size={28} />
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:contact@abynnov.com" className="text-blue-600 hover:underline text-lg">
                    contact@abynnov.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex gap-4 group"
              >
                <motion.div
                  className="p-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl group-hover:shadow-lg transition"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Phone size={28} />
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Téléphone</h4>
                  <a href="tel:+212" className="text-blue-600 hover:underline text-lg">
                    +212 (0) 5XX XXX XXX
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex gap-4 group"
              >
                <motion.div
                  className="p-4 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl group-hover:shadow-lg transition"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <MapPin size={28} />
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Adresse</h4>
                  <p className="text-gray-700 text-lg">Casablanca, Maroc</p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex gap-4 group"
              >
                <motion.div
                  className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl group-hover:shadow-lg transition"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Clock size={28} />
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Horaires</h4>
                  <p className="text-gray-700 text-lg">Lun - Ven : 08:00 - 17:00</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Messages */}
              {status && (
                <motion.div
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    status.type === 'success'
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.type === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span className="font-semibold">{status.message}</span>
                </motion.div>
              )}

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <label className="block text-gray-900 font-bold mb-2">Nom Complet *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition text-lg disabled:opacity-50"
                  placeholder="Votre nom"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <label className="block text-gray-900 font-bold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition text-lg disabled:opacity-50"
                  placeholder="votre@email.com"
                />
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label className="block text-gray-900 font-bold mb-2">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition text-lg disabled:opacity-50"
                  placeholder="Votre téléphone"
                />
              </motion.div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label className="block text-gray-900 font-bold mb-2">Sujet *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition text-lg disabled:opacity-50"
                  placeholder="Sujet de votre message"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label className="block text-gray-900 font-bold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition resize-none text-lg disabled:opacity-50"
                  placeholder="Votre message"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-bold hover:shadow-xl transition flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={22} />
                    Envoyer le message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600"
          >
            <div className="flex items-start gap-4">
              <MessageCircle className="text-blue-600 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Réponse rapide garantie</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Nous répondons à tous les messages dans les 24 heures. Pour les demandes urgentes, appelez-nous directement ou utilisez notre formulaire en priorité.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
