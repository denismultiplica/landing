module.exports = {
  content: ['./src/**/*.{pug,js}'],
  theme: {
    colors: {
      'transparent': 'transparent',
      'accent': '#FBD784',
      'dark': '#0B1D26',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    fontFamily: {
      sans: ['Gilroy', 'sans-serif'],
      serif: ['Chronicle', 'serif'],
    },
    extend: {
      fontSize: {
        '10xl': ['12rem', '1'],
      }
    }
  },
  plugins: []
}
