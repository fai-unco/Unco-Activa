/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Hurme-Geometric-BO': 'Hurme-Geometric-BO',
        'Hurme-Geometric-N': 'Hurme-Geometric-N',
      },
      colors: {
        'yellow': '#EBA51E',        
        'blue-high': '#006E91',
        'blue-dark': '#00375A',
        'blue-cyan': '#00AAE1',
        // 'blue-h': '#023859',
        'board': '#782332',
        'gray-light': '#E6E6E6',
        'gray': '#D2D3D5',
        'gray-dark': '#606062',
        'gray-darker': '#27272a',
      },
      height: {
        'input': '34px',
      }
    },
    
  },
  plugins: [],
}
