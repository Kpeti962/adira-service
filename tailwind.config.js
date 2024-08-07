/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        
      },
    
      keyframes: {
        rotate: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg)' }
        }
      },
      animation: {
        rotate: 'rotate 70s linear infinite',
      },
      backgroundColor: {
        'primary': '#0d2542',
        'secondary': '#d98723',
      },
      textColor: {
        'primary': '#0d2542',
        'secondary': '#d98723',
      },
      borderColor: {
        'primary': '#0d2542',
        'secondary': '#d98723',
      },

    },
  },
  plugins: [require('flowbite/plugin'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-custom': {
          clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
