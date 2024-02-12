/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    
    extend: {
      width: {
        '192': '48rem',
      },
      colors:{
        lovelypurple:"#7c3aed"
      },
    },
  },
  plugins: [],
}

