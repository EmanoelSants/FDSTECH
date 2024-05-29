/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX()' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-200deg)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' },
        },
        flipIn: {
          '0%': { transform: 'rotateY(90deg)', opacity: '0' },
          '100%': { transform: 'rotateY(0)', opacity: '1' },
        },
        dropIn: {
          '0%': { transform: 'translateY(-200%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },

      },
      animation: {
        fadeIn: 'fadeIn 1s forwards',
        slideInLeft: 'slideInLeft 1s forwards',
        slideInRight: 'slideInRight 1s forwards',
        slideInTop: 'slideInTop 1s forwards',
        slideInBottom: 'slideInBottom 1s forwards',
        zoomIn: 'zoomIn 1s forwards',
        bounceIn: 'bounceIn 1s forwards',
        rotateIn: 'rotateIn 1s forwards',
        flipIn: 'flipIn 1s forwards',
        dropIn: 'dropIn 1s forwards',
      },

      transitionDelay: {
        '0': '0s',
        '100': '0.1s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s',
        '600': '0.6s',
        '700': '0.7s',
        '800': '0.8s',
        '900': '0.9s',
        '1000': '1s',
      },

      textIndent: {
        '2em': '2em',
      },
      
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif']
      },

    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-indent-2em': {
          textIndent: '2em',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}