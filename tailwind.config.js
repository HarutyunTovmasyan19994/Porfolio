/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx,css}",],
  theme: {
    extend: {
      colors:{
        primary:{
          "black":"#000000",
          "white":"#F2F3F4",
          "green":"#145A32",
        }
      },
      screens:{
        "tablet":"640px"
      }
    },
  },
  plugins: [],
}
