import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { contactService, intersecContactService } from '../services/pocketbase';

export default function ContactForm({ isPartnership = false, entityService = null }) {
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Déterminer quel service utiliser
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        company: formData.company || '',
        partnership_type: formData.partnership_type || '',
        message: formData.message
      };

      console.log('📤 Données envoyées à PocketBase:', dataToSend);

      // Utiliser le service de l'entité si fourni, sinon utiliser intersecContactService
      const service = entityService || intersecContactService;
      
      await service.create(dataToSend);
      
      setStatus({ 
        type: 'success', 
        message: isPartnership 
          ? 'Demande de partenariat envoyée avec succès! L\'admin vous répondra bientôt.'
          : 'Message envoyé avec succès! Nous vous répondrons sous peu.'
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

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Status Messages */}
      {status && (
        <motion.div
          className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
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
          <span>{status.message}</span>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Nom complet
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-intersec-green focus:border-transparent outline-none transition"
            placeholder="Votre nom"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-intersec-green focus:border-transparent outline-none transition"
            placeholder="votre@email.com"
          />
        </div>

        {/* Phone (visible for partnership and filiales) */}
        {isPartnership && (
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-intersec-green focus:border-transparent outline-none transition"
              placeholder="+223 XXXX XXXX"
            />
          </div>
        )}

        {/* Company (Partnership only) */}
        {isPartnership && (
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Entreprise
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-intersec-green focus:border-transparent outline-none transition"
              placeholder="Nom de votre entreprise"
            />
          </div>
        )}

        {/* Subject / Partnership Type */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            {isPartnership ? 'Type de partenariat' : 'Sujet'}
          </label>
          {isPartnership ? (
            <select
              name="partnership_type"
              value={formData.partnership_type}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-intersec-green focus:border-transparent outline-none transition"
            >
              <option value="">Sélectionner un type</option>
              <option value="Investisseur">Investisseur</option>
              <option value="Fournisseur">Fournisseur</option>
              <option value="Distributeur">Distributeur</option>
              <option value="Collaborateur">Collaborateur</option>
              <option value="Autre">Autre</option>
            </select>
          ) : (
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-intersec-green focus:border-transparent outline-none transition"
              placeholder="Sujet du message"
            />
          )}
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-intersec-green focus:border-transparent outline-none transition resize-none"
          placeholder="Votre message..."
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={loading}
        className="mt-6 w-full bg-intersec-green hover:bg-intersec-dark text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send size={20} />
            Envoyer le message
          </>
        )}
      </motion.button>
    </motion.form>
  );
}
