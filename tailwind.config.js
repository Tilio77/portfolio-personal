export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: 'Poppins',
      Delicious: 'Delicious Handrawn'
    },
    container: {
      padding: '4rem',
    },
    extend: {
      colors: {
        white_cream: '#f8f8ec',
        black_site: '#000000',
        gray_site: '#737373',
      },
      backgroundImage: {
        heroLinear: "linear-gradient(130deg, #999999 30%, #737373 100%)"
      }
    },
  },
  plugins: [],
}

