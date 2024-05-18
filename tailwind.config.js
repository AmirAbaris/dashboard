/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'open-sans': ['"Open Sans"', 'sans-serif'], // add the Open Sans font
    },
    colors: {
      charcoalBlue: '#344767', // Custom color
      slateBlue: '#67748E'
    },
  },
  plugins: [],
}

