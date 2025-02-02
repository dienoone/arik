/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  fontFamily: {
    sans: ['Satoshi', 'sans-serif'],
    gambetta: ['Gambetta', 'serif'],
    chillax: ['Chillax', 'sans-serif'],
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '3rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '4rem',
        },
      },
      fontSize: {
        meta: [
          '0.813rem',
          {
            lineHeight: '1.3rem',
            letterSpacing: '0.094em',
            fontWeight: '400',
          },
        ],
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        gambetta: ['Gambetta', 'serif'],
        chillax: ['Chillax', 'sans-serif'],
      },
      colors: {
        background: '#0E0E0E',
        primary: {
          100: 'hsla(35, 41%, 75%, 0.05)', // icons-bg cards-bg
          200: 'hsla(35, 41%, 75%, 0.15)', // border
          300: 'hsla(35, 41%, 75%, 0.6)',
          400: 'hsl(35, 41%, 75%)', // #DAC5A7
        },
        secondary: '#1A1A1A', //
        white: {
          100: 'hsla(0, 0%, 100%, 0.07)',
          200: 'hsla(0, 0%, 100%, 0.12)',
          300: 'hsla(0, 0%, 100%, 0.6)',
        },
      },
      borderColor: {
        DEFAULT: 'hsla(35, 41%, 75%, 0.15)',
      },
    },
  },
  plugins: [],
};
