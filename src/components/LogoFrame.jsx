import { motion } from 'framer-motion';

export default function LogoFrame({ src, alt, size = 'md', variant = 'light', className = '' }) {
  const sizeClasses = {
    sm: 'h-12 w-auto',
    md: 'h-16 w-auto',
    lg: 'h-20 w-auto',
    xl: 'h-24 w-auto',
    xxl: 'h-40 w-auto',
    huge: 'h-52 w-auto'
  };

  const variantClasses = {
    light: 'bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-200',
    dark: 'bg-white/10 backdrop-blur-sm border border-white/40',
    green: 'bg-intersec-light border-2 border-intersec-green/40',
    white: 'bg-white/15 backdrop-blur-sm border border-white/30'
  };

  return (
    <motion.div
      className={`inline-block p-4 rounded-lg transition-all hover:shadow-lg ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.1, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={src}
        alt={alt}
        className={`object-contain ${sizeClasses[size]}`}
      />
    </motion.div>
  );
}
