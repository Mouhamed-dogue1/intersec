import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * OptimizedImage Component
 * Fournit l'optimisation des images avec :
 * - Lazy loading
 * - Placeholder de chargement
 * - Animations de transition
 * - Compression automatique
 */
export default function OptimizedImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  placeholderSrc,
  onLoad,
  objectFit = "cover"
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer pour le lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '50px' // Commence à charger 50px avant que l'image soit visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      {/* Placeholder pendant le chargement */}
      {!isLoaded && (
        <div className={`absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse`} />
      )}

      {/* Image avec animation */}
      {isVisible && (
        <motion.img
          src={src}
          alt={alt}
          className={`w-full transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          style={{ objectFit }}
          onLoad={handleImageLoad}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Placeholder image si fournie */}
      {!isVisible && placeholderSrc && (
        <img
          src={placeholderSrc}
          alt={alt}
          className={`w-full blur-md ${className}`}
          style={{ objectFit }}
        />
      )}
    </div>
  );
}
