require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        /* General */
        'Header-B': 'Orbitron-B',
        'Text-R': 'Hurme-Geometric-R',

        'Anton-R': 'Anton-R',

        'Orbitron-B': 'Orbitron-B',
        'Orbitron-BO': 'Orbitron-BO',
        'Orbitron-EB': 'Orbitron-EB',
        'Orbitron-V': 'Orbitron-V',

        // Old fonts
        'Hurme-Geometric-BO': 'Hurme-Geometric-BO',
        'Hurme-Geometric-N': 'Hurme-Geometric-N',
        'Hurme-Geometric-R': 'Hurme-Geometric-R',
      },
      opacity: ['disabled'],
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

        'lime-unco': '#dbff43',
        'lime-unco-gray': '#E0E0E0',
        'cyan-unco': '#45d4ff',
        'cyan-unco-gray': '#ADADAD',
        'black-unco': '#231f20',
        'black-unco-gray': '#212121',
        'white-unco': '#ffffff'
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
