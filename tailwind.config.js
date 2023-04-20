/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
      bellefair: ["Bellefair","serif"],
      barlowCondensed: ["Barlow Condensed","sans-serif"],
      barlow: ["Barlow","sans-serif"],
    },
    screens:{
      'md': '890px',
      'fs': '1440px'
    },
  },
  plugins: [],
}

