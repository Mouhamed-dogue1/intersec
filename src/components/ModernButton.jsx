import React from 'react';
import { motion } from 'framer-motion';

/**
 * ModernButton Component
 * Bouton moderne et stylé avec plusieurs variations
 */
export default function ModernButton({
  children,
  variant = "primary",
  size = "md",
  icon: Icon = null,
  onClick = null,
  className = "",
  gradient = "from-blue-600 to-cyan-600",
  ...props
}) {
  const variants = {
    primary: `bg-gradient-to-r ${gradient} text-white shadow-xl hover:shadow-2xl`,
    secondary: `bg-white/10 text-white border border-white/30 backdrop-blur-md hover:bg-white/20`,
    outline: `border-2 border-current text-current hover:bg-current/5`,
    ghost: `text-current hover:bg-current/10`
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      className={`
        inline-flex items-center justify-center gap-2
        rounded-xl font-semibold
        transition-all duration-300
        active:scale-95
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </motion.button>
  );
}
