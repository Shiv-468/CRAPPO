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
        'light-red':(' 0px 10px 10px #391777')
      }
    },
  },
  plugins: [],
}
