import { motion } from 'framer-motion';
import MainLayout from '../layout/MainLayout';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Sénégal, Afrique",
      subtext: "Siège social du Groupe INTERSEC"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+223 XXXX XXXX",
      subtext: "Disponible du lundi au vendredi"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@intersec.ml",
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-gradient-to-br from-intersec-green to-intersec-dark flex items-center justify-center relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center text-white">
              <motion.p
                className="text-6xl mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                📍
              </motion.p>
              <h3 className="text-3xl font-bold mb-3">Sénégal, Afrique</h3>
              <p className="text-xl text-white/90">Siège social du Groupe INTERSEC</p>
              <p className="text-white/80 mt-4 max-w-md mx-auto">
                Implantés stratégiquement en Afrique de l'Ouest pour servir au mieux nos clients régionaux
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
