/** @type {import('tailwindcss').Config} */
// import plaiceholder from '@plaiceholder/tailwindcss';
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 30s ease-in-out infinite',
      },
      fontFamily: {
        display: ['neue-haas-unica', 'sans'],
        serif: ['merriweather', 'serif'],
        bask: ['Libre Baskerville', 'serif'],
        grotesk: ['neue-haas-grotesk-display', 'sans'],
        text: ['neue-haas-grotesk-text', 'sans'],
        fruit: ['CardinalFruit', ...defaultTheme.fontFamily.serif],
        mont: ['NeueMontreal', ...defaultTheme.fontFamily.sans],
        mono: ['Space Mono', 'monospace', ...defaultTheme.fontFamily.mono],
        jbd: [
          'NeueMontreal',
          'apple-system',
          'sans',
          ...defaultTheme.fontFamily.sans,
        ],
        jbt: ['JBSansText', 'sans'],
      },
      colors: {
        neutral: {
          950: '#0a0a0a',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
