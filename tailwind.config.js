// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '104': '26rem',
        '112': '28rem',
        '40rem': '40rem',
      },
      fontFamily: {
        gloria: [`Gloria`]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require(`@tailwindcss/typography`),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: `Gloria`,
            src: `url("/src/assets/fonts/GloriaHallelujah-Regular.ttf")`,
            fontStyle: `regular`,
            fontWeight: `400`,
            fontDisplay: `swap`,
          }
        }
      ])
    },
  ],
}
