/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      maxHeight: {
        inherit: 'inherit',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        'th-darker-gray': '#212121',
        'th-lighter-gray': '#2F2F2F',
        'th-medium-gray': '#4E4E4E',
        'th-medium-light-gray-1': '#B4B4B4',
        'th-medium-light-gray-2': '#B2B2B2',
        'th-medium-light-gray-2.5': '#080808',
        'th-medium-light-gray-3': '#0D0D0D',
        'th-light-gray': '#F9F9F9',
        'th-light-gray-2': '#F4F4F4',
        'th-light-gray-3': '#D7D7D7',
        'th-light-gray-4': '#ECECEC',
        'lighter-gray-1': '#262931',
        'darker-gray-1': '#212429',
        'neon-pink': '#9461fd',
      },
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [],
};
