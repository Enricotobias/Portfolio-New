/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary : '#69BDFF',
        secondary : '#D9D9D9',
        light : '#DDE6ED',
        dark : '#0E131B',
      },
      screens: {
        '2xl' : '1320px'
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};

