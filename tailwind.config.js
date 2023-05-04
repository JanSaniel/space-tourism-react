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
      'md': '1040px',
      'fs': '1440px',
      'ts': '530px',
    },
    backgroundImage: {
      'home-desktop': "url('./assets/home/background-home-desktop.jpg')",
      'home-tablet': "url('./assets/home/background-home-tablet.jpg')",
      'home-mobile': "url('./assets/home/background-home-mobile.jpg')",
    }
  },
  plugins: [],
}

