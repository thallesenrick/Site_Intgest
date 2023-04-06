/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#022E65',
          200: '#005275',
          300: '#EFEFEF',
          400: '#198DA8',
          500: '#0F65B8',
        }
      },
      screens: {
        '3xl': '1800px',
      },
      fontFamily: {
        'montserrat': ['Montserrat']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}