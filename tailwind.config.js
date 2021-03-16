module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT: '#ff8080',
          hover: '#c46363',
        },
        secondary:{
          DEFAULT: '#ffba92',
        },
        third: {
          DEFAULT: '#e0f5b9',
        },
        fourth: {
          DEFAULT: '#c6f1d6',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
