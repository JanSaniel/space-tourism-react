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
      'destination-desktop': "url('./assets/destination/background-destination-desktop.jpg')", 
      'destination-tablet': "url('./assets/destination/background-destination-tablet.jpg')", 
      'destination-mobile': "url('./assets/destination/background-destination-mobile.jpg')",
      'crew-desktop': "url('./assets/crew/background-crew-desktop.jpg')", 
      'crew-tablet': "url('./assets/crew/background-crew-tablet.jpg')", 
      'crew-mobile': "url('./assets/crew/background-crew-mobile.jpg')", 
      'technology-desktop': "url('./assets/technology/background-technology-desktop.jpg')", 
      'technology-tablet': "url('./assets/technology/background-technology-tablet.jpg')", 
      'technology-mobile': "url('./assets/technology/background-technology-mobile.jpg')", 
    }
  },
  plugins: [], 
}

