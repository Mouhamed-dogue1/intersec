import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedCard Component
 * Carte moderne avec effets de hover sophistiqués et animations fluides
 */
export default function AnimatedCard({
  icon: Icon,
  title,
  description,
  features = [],
  gradient = "from-blue-600 to-cyan-600",
  delay = 0,
  onClick = null
}) {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      viewport={{ once: true, margin: "-100px" }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      {/* Glow Effect on Hover */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 blur-xl group-hover:opacity-50 transition duration-500 -z-10`}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
      />

      {/* Card */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 h-full border border-white/20">
        {/* Top Accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-t-2xl`} />

        {/* Icon Container */}
        <motion.div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg`}
          animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {Icon && <Icon size={28} className="text-white" />}
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" style={{
          backgroundImage: isHovered ? `linear-gradient(to right, rgb(37, 99, 235), rgb(34, 197, 94))` : 'none',
          WebkitBackgroundClip: isHovered ? 'text' : 'unset',
          backgroundClip: isHovered ? 'text' : 'unset'
        }}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        {features.length > 0 && (
          <motion.ul
            className="space-y-2 mb-6"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                <motion.span
                  className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs mt-0.5`}
                  animate={{ scale: isHovered ? 1.2 : 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  ✓
                </motion.span>
                {feature}
              </li>
            ))}
          </motion.ul>
        )}

        {/* CTA Button */}
        <motion.button
          className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${gradient} group-hover:shadow-lg transition-all duration-300 text-sm uppercase tracking-wider`}
          animate={{
            scale: isHovered ? 1.02 : 1,
            boxShadow: isHovered ? `0 20px 25px -5px rgba(59, 130, 246, 0.3)` : `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
          }}
        >
          En savoir plus
        </motion.button>
      </div>
    </motion.div>
  );
}
