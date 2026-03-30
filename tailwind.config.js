/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // INTERSEC colors
        intersec: {
          dark: '#1a472a',
          green: '#228b22',
          light: '#f0f4f0'
        },
        // AB'YNNOV colors
        abynnov: {
          dark: '#2c3e50',
          blue: '#3498db',
          light: '#ecf0f1'
        },
        // H2i colors
        h2i: {
          blue: '#0066cc',
          light: '#e8f1ff'
        },
        // Modern gradient colors
        'gradient-start': '#3b82f6',
        'gradient-mid': '#8b5cf6',
        'gradient-end': '#ec4899'
      },
      backgroundImage: {
        'gradient-modern': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-premium': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-tech': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-nature': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'gradient-fire': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        }
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.4)',
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.4)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.4)',
        'glow-green': '0 0 30px rgba(34, 197, 94, 0.4)',
        'smooth': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'smooth-lg': '0 20px 60px rgba(0, 0, 0, 0.12)'
      },
      backdropBlur: {
        'xl': '20px',
        'xxl': '40px'
      }
    }
  },
  plugins: []
}
