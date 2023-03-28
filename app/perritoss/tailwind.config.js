/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter']
      },
      colors: {
        'blue': '#C5FFF6'
      },
    },
  },
  plugins: [],
}
