/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#0d2542',
        'secondary': '#d98723',
      },
      textColor: {
        'primary': '#0d2542',
        'secondary': '#d98723',
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
}
