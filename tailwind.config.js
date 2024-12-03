/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-dark': '#212121',
        'gray-medium': '#2F2F2F',
        'gray-light-1': '#B4B4B4',
        'gray-light-2': '#B2B2B2',
        'black-muted': '#0D0D0D',
        'gray-light-muted': '#262931',
        'gray-dark-muted': '#212429',
        'neon-purple': '#9461fd',
        'theme-dark-bg': '#121212',
      },
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [],
};
