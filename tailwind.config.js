/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'th-darker-gray': '#212121',
        'th-lighter-gray': '#2F2F2F',
        'th-medium-light-gray-1': '#B4B4B4',
        'th-medium-light-gray-2': '#B2B2B2',
        'th-medium-light-gray-3': '#0D0D0D',
        'lighter-gray-1': '#262931',
        'darker-gray-1': '#212429',
        'neon-pink': '#9461fd',
        'dark-theme-bg': '#121212',
      },
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [],
};
