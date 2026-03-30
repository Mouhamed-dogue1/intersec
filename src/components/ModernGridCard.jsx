import React, { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

/**
 * ModernGridCard Component
 * Carte moderne pour les grilles de services/activités/projets
 */
export default function ModernGridCard({
  title,
  description,
  image = null,
  icon: Icon = null,
  badge = null,
  gradient = "from-blue-600 to-cyan-600",
  delay = 0,
  features = [],
  onClick = null
}) {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay }
    },
    hover: {
      y: -15,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="group cursor-pointer h-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      viewport={{ once: true, margin: "-50px" }}
      onClick={onClick}
    >
      {/* Glow Background */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 blur-2xl group-hover:opacity-60 transition duration-500`}
        animate={{ opacity: isHovered ? 0.6 : 0 }}
      />

      {/* Card Container */}
      <div className="relative bg-white/98 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-white/20">
        {/* Top Accent Bar */}
        <motion.div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
          animate={{ scaleX: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
          style={{ originX: 0 }}
        />

        {/* Image Section */}
        {image && (
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <OptimizedImage
              src={image}
              alt={title}
              containerClassName="w-full h-full"
              className="w-full h-full group-hover:scale-110"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {/* Content Section */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Icon + Badge */}
          <div className="flex items-start justify-between mb-4">
            {Icon && (
              <motion.div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}
                animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icon size={24} className="text-white" />
              </motion.div>
            )}
            {badge && (
              <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white`}>
                {badge}
              </span>
            )}
          </div>

          {/* Title */}
          <motion.h3
            className={`text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300`}
            style={{
              backgroundImage: isHovered ? `linear-gradient(to right, rgb(37, 99, 235), rgb(34, 197, 94))` : 'none',
              WebkitBackgroundClip: isHovered ? 'text' : 'unset',
              color: isHovered ? 'transparent' : 'inherit'
            }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">
            {description}
          </p>

          {/* Features if any */}
          {features.length > 0 && (
            <motion.ul
              className="space-y-2 mb-4 text-sm"
              animate={{ opacity: isHovered ? 1 : 0.6 }}
            >
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
                  {feature}
                </li>
              ))}
            </motion.ul>
          )}

          {/* CTA Arrow */}
          <motion.div
            className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            En savoir plus
            <motion.span animate={{ x: isHovered ? 3 : 0 }}>→</motion.span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
