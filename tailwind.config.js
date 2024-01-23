/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Inter':('Inter','sans-serif'),
        'Rubik':('Rubik')
      },
      boxShadow:{
        'light-red':('0px 2px 5px 0px rgba(57,23,119,0.53)')
      }
    },
  },
  plugins: [],
}
