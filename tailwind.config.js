/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    fontSize: {
      'giant': '20vw'
    },
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      dm: ['DM Sans', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    }
  }
},
  plugins: [],
}
