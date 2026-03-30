import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionHeader Component
 * En-tête de section moderne et élégant
 */
export default function SectionHeader({
  tag = "Découvrez",
  title,
  subtitle,
  gradient = "from-blue-600 via-purple-600 to-pink-600",
  align = "center",
  animated = true
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const gradientVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <motion.div
      className={`mb-12 ${alignClasses[align]}`}
      initial={animated ? "hidden" : "visible"}
      whileInView={animated ? "visible" : "visible"}
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Tag */}
      {tag && (
        <motion.div
          className="inline-block mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${gradient} text-white shadow-lg`}>
            ✨ {tag}
          </span>
        </motion.div>
      )}

      {/* Title with Gradient */}
      <motion.h2
        className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent leading-tight`}
        initial={animated ? { opacity: 0, y: 20 } : "visible"}
        whileInView={animated ? { opacity: 1, y: 0 } : "visible"}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      {/* Decorative line */}
      {align === "center" && (
        <motion.div 
          className={`h-1.5 w-24 bg-gradient-to-r ${gradient} rounded-full mb-6`}
          style={{ margin: "0 auto" }}
          variants={gradientVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      )}

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed"
          style={align === "center" ? { margin: "0 auto" } : {}}
          initial={animated ? { opacity: 0 } : "visible"}
          whileInView={animated ? { opacity: 1 } : "visible"}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
