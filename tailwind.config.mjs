/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx}'
  ],

  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#FFFFFF',
        canvas: '#F5F5F3',
        mist: '#EAEAE7',
        graphite: '#666666',
        subtle: '#929292'
      },

      fontFamily: {
        sans: [
          'Inter',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ]
      },

      letterSpacing: {
        tighter: '-0.075em',
        tightest: '-0.09em'
      },

      maxWidth: {
        studio: '1440px'
      },

      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },

  plugins: []
};
