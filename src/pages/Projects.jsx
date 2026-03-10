import { motion } from 'framer-motion';
import MainLayout from '../layout/MainLayout';
import { Building2, ShoppingCart, Leaf, Truck, MapPin, Zap } from 'lucide-react';

const ProjectCard = ({ icon: Icon, name, description, details }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-intersec-green rounded-lg mb-6">
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{name}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {details.map((detail, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="text-intersec-green mt-1 text-xl">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      icon: Building2,
      name: "Projet Immobilier",
      description: "Construction et développement d'immeubles résidentiels et commerciaux modernes.",
      details: [
        "Immeubles de standing avec commodités modernes",
        "Architecte réputé et construction de qualité",
        "Localisation stratégique dans les zones urbaines",
        "Financement flexible pour les acquéreurs",
        "Livraison respectant les délais"
      ]
    },
    {
      icon: ShoppingCart,
      name: "Projet Commerce",
      description: "Création et gestion de boutiques et commerces dans les zones stratégiques.",
      details: [
        "Points de vente bien localisés et accessibles",
        "Équipements commerciaux modernes",
        "Conseil en gestion commerciale",
        "Marges bénéficiaires attrayantes",
        "Support marketing et promotion"
      ]
    },
    {
      icon: Leaf,
      name: "Projet Agrobusiness",
      description: "Développement d'activités agricoles durables et de transformation agroalimentaire.",
      details: [
        "Cultures stratégiques et rentables",
        "Techniques agricoles modernes et durables",
        "Accès garantie aux marchés",
        "Transformation agroalimentaire",
        "Création d'emplois ruraux"
      ]
    },
    {
      icon: Truck,
      name: "Projet Transport",
      description: "Développement d'une flotte de transport et services logistiques intégrés.",
      details: [
        "Véhicules modernes et bien entretenus",
        "Couverture nationale et régionale",
        "Services logistiques complets",
        "Suivi en temps réel des expéditions",
        "Tarifs compétitifs et fiables"
      ]
    }
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-intersec-dark via-intersec-green to-intersec-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nos Projets
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Une vision ambitieuse couvrant immobilier, commerce, agrobusiness et transport.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                icon={project.icon}
                name={project.name}
                description={project.description}
                details={project.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              INTERSEC Group envisage un développement holistique à travers des projets transversaux 
              qui créent de la valeur ajoutée, de l'emploi et contribuent au développement durable 
              de l'Afrique.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "Expansion géographique", desc: "Présence dans plusieurs pays africains" },
              { icon: Zap, title: "Innovation continue", desc: "Adoption de technologies modernes" },
              { icon: Building2, title: "Développement urbain", desc: "Contribution à l'urbanisation positive" },
              { icon: Leaf, title: "Durabilité", desc: "Projets respectueux de l'environnement" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-intersec-light rounded-lg mx-auto mb-4">
                    <Icon size={32} className="text-intersec-green" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
