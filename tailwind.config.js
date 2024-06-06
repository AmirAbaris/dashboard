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
      ghostWhite: '#f8f9fa',
      blueGray: '#9fa3b9',
      isabelline: '#f0ecec',
      blueGray: '#9fa3b9',
      paleGreen: '#cdf59b',
      lawnGreen: '#67b108',
      paleRed: '#f5b7b1',
      crimsonRed: '#b10808'
    },
  },
  plugins: [],
}

