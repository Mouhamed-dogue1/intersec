import { motion } from 'framer-motion';
import MainLayout from '../layout/MainLayout';
import ContactForm from '../components/ContactForm';
import MapWithSearch from '../components/MapWithSearch';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "454, Cité du Golf de Cambérène",
      subtext: "BP 7607 Dakar, Sénégal"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+221 33 835 3108",
      subtext: "Disponible du lundi au vendredi"
    },
    {
      icon: Mail,
      title: "Email",
      content: "intersec@interimsecurite.com",
      subtext: "Réponse en 24h"
    },
    {
      icon: Clock,
      title: "Heures d'ouverture",
      content: "Lun - Ven: 8h00 - 17h00",
      subtext: "Heure locale (GMT+0)"
    }
  ];

  return (
    <MainLayout>
      <div className="pt-16"></div>

      {/* Hero */}
      <section className="py-32 bg-gradient-to-br from-intersec-dark via-intersec-green to-intersec-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contactez-nous
          </motion.h1>
          <motion.div
            className="h-1 w-24 bg-white rounded-full mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Nous sommes à votre écoute pour discuter de vos projets et besoins professionnels.
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Comment Nous Joindre</h2>
            <p className="text-xl text-gray-600">Plusieurs façons de nous contacter pour vos projets</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-white to-intersec-light p-10 rounded-2xl shadow-lg border border-intersec-green/20 hover:border-intersec-green/60 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-intersec-green rounded-2xl mx-auto mb-6">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{info.title}</h3>
                  <p className="text-gray-800 font-semibold text-center mb-2">{info.content}</p>
                  <p className="text-gray-600 text-sm text-center">{info.subtext}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Formulaire de Contact</h2>
            <div className="h-1 w-24 bg-intersec-green rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Aidez-nous à mieux comprendre vos besoins. Notre équipe vous répondra dans les plus brefs délais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm isPartnership={false} />
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Trouvez Notre Localisation</h2>
            <p className="text-xl text-gray-600">Recherchez une adresse ou consultez notre siège social</p>
          </motion.div>

          <MapWithSearch />

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border border-intersec-green/20">
              <MapPin className="text-intersec-green mb-3" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">Adresse Exacte</h3>
              <a
                href="https://maps.google.com/?q=454+Cité+du+Golf+de+Cambérène,+Dakar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-intersec-green hover:text-intersec-dark transition font-semibold"
              >
                454, Cité du Golf de Cambérène
                <br />
                BP 7607 Dakar, Sénégal
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-intersec-green/20">
              <Phone className="text-intersec-green mb-3" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">Appelez-nous</h3>
              <a
                href="tel:+221338353108"
                className="text-intersec-green hover:text-intersec-dark transition font-semibold"
              >
                +221 33 835 3108
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-intersec-green/20">
              <Mail className="text-intersec-green mb-3" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">Écrivez-nous</h3>
              <a
                href="mailto:intersec@interimsecurite.com"
                className="text-intersec-green hover:text-intersec-dark transition font-semibold"
              >
                intersec@interimsecurite.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
