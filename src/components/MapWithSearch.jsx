import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';

export default function MapWithSearch() {
  const [searchAddress, setSearchAddress] = useState('454, Cité du Golf de Cambérène, Dakar, Sénégal');
  const [mapUrl, setMapUrl] = useState(
    `https://maps.google.com/maps?q=454+Cité+du+Golf+de+Cambérène,+Dakar+Sénégal&output=embed`
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchAddress.trim()) {
      const encodedAddress = encodeURIComponent(searchAddress);
      setMapUrl(`https://maps.google.com/maps?q=${encodedAddress}&output=embed`);
    }
  };

  const handleInputChange = (e) => {
    setSearchAddress(e.target.value);
  };

  const handleDefaultLocation = () => {
    setSearchAddress('454, Cité du Golf de Cambérène, Dakar, Sénégal');
    setMapUrl(
      `https://maps.google.com/maps?q=454+Cité+du+Golf+de+Cambérène,+Dakar+Sénégal&output=embed`
    );
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <motion.form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row gap-3"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-intersec-green" size={20} />
          </div>
          <input
            type="text"
            value={searchAddress}
            onChange={handleInputChange}
            placeholder="Entrez une adresse (ex: 454 Cité du Golf de Cambérène, Dakar)"
            className="w-full pl-12 pr-4 py-3 border-2 border-intersec-green/30 rounded-lg focus:border-intersec-green focus:outline-none transition text-gray-900 placeholder-gray-500"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-intersec-green text-white font-semibold rounded-lg hover:bg-intersec-dark transition"
        >
          Chercher
        </button>
      </motion.form>

      {/* Map Container */}
      <motion.div
        className="rounded-2xl overflow-hidden shadow-2xl h-96 relative border-2 border-intersec-green/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <iframe
          key={mapUrl}
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </motion.div>

      {/* Quick Access Button */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <button
          onClick={handleDefaultLocation}
          className="inline-flex items-center gap-2 px-4 py-2 text-intersec-green hover:text-intersec-dark transition font-semibold"
        >
          <MapPin size={18} />
          Voir notre siège social
        </button>
      </motion.div>
    </div>
  );
}
