import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

/**
 * ContentSection Component
 * Section avec texte et image/contenu, moderne et flexible
 */
export default function ContentSection({
  title,
  subtitle,
  content,
  image,
  imageAlt,
  imagePosition = "right",
  gradient = "from-blue-600 to-cyan-600",
  features = [],
  cta = null,
  imageType = "image" // 'image' ou 'custom'
}) {
  const isImageRight = imagePosition === "right";

  const contentVariants = {
    hidden: { opacity: 0, x: isImageRight ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: isImageRight ? 50 : -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.4 }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className={`absolute top-1/4 ${isImageRight ? '-left-32' : '-right-32'} w-96 h-96 bg-gradient-to-r ${gradient} rounded-full mix-blend-multiply filter blur-3xl opacity-10`}
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isImageRight ? '' : 'lg:grid-flow-dense'}`}>
          {/* Content */}
          <motion.div
            className={isImageRight ? '' : 'lg:order-2'}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={contentVariants}
          >
            {/* Tag */}
            {subtitle && (
              <span className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${gradient} text-white inline-block mb-6 shadow-lg`}>
                ✨ {subtitle}
              </span>
            )}

            {/* Title */}
            <h2 className={`text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent leading-tight`}>
              {title}
            </h2>

            {/* Divider */}
            <div className={`h-1 w-16 bg-gradient-to-r ${gradient} rounded-full mb-8`} />

            {/* Main Content */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {content}
            </p>

            {/* Features */}
            {features.length > 0 && (
              <motion.ul
                className="space-y-4 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}

            {/* CTA */}
            {cta && (
              <motion.button
                className={`px-8 py-4 bg-gradient-to-r ${gradient} text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {cta}
              </motion.button>
            )}
          </motion.div>

          {/* Image/Content */}
          <motion.div
            className={isImageRight ? '' : 'lg:order-1'}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={imageVariants}
          >
            {image && imageType === "image" ? (
              <div className="relative">
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-4 bg-gradient-to-r ${gradient} rounded-2xl opacity-20 blur-2xl`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl">
                  <OptimizedImage
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                    containerClassName="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
                </div>
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 p-8 min-h-96 flex items-center justify-center">
                {image}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
