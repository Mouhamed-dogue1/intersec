import React from 'react';
import { motion } from 'framer-motion';

/**
 * StatsCard Component
 * Cartes de statistiques modernes et élégantes
 */
export default function StatsCard({
  number,
  label,
  icon: Icon = null,
  gradient = "from-blue-600 to-cyan-600",
  delay = 0
}) {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 blur-xl group-hover:opacity-70 transition duration-500 -z-10`}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Card */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 border border-white/20">
        {/* Top accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-t-2xl`} />

        {/* Icon */}
        {Icon && (
          <motion.div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Icon size={24} className="text-white" />
          </motion.div>
        )}

        {/* Number */}
        <motion.div
          className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          {number}
        </motion.div>

        {/* Label */}
        <p className="text-gray-600 font-medium">{label}</p>
      </div>
    </motion.div>
  );
}
