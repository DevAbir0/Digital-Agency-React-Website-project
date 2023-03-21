/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'container': '1200px',
      },

      fontFamily: {
        man:["Manrope", "sans-serif"]
      },

      colors:{

        primary:'#3734A9'
      }
    

      
    },
  },
  plugins: [],
};