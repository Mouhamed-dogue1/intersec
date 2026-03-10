import { motion } from 'framer-motion';

export default function MainLayout({ children }) {
  return (
    <motion.div
      className="min-h-screen flex flex-col bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
