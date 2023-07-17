/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: [
    'content/**/*.md', 
    'layouts/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.violet,
        secondary: colors.slate,
      },
      boxShadow: {
        1 : '-15px -15px 30px #FAFBFF, 15px 15px 30px #A6ABBD',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}

