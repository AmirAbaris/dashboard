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
      charcoalBlue: '#344767',
      slateBlue: '#67748E',
      magenta: '#CB0C9F',
      white: '#FFFFFF',
      mutedPurple: '#999db5',
      ghostWhite: '#f8f9fa'
    },
  },
  plugins: [],
}

