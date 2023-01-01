const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,tsx,jsx}',
    './pages/**/*.{html,js,ts,tsx,jsx}',
    './components/**/*.{html,js,ts,tsx,jsx}'
  ],
  theme: {},
  plugins: [require('daisyui')],

  daisyui: {
    themes: ['forest', 'light']
  }
};
