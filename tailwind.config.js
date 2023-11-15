/** @type {import('tailwindcss').Config} */
// import plaiceholder from '@plaiceholder/tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['neue-haas-unica', 'sans'],
        serif: ['merriweather', 'serif'],
        bask: ['Libre Baskerville', 'serif'],
        grotesk: ['neue-haas-grotesk-display', 'sans'],
        text: ['neue-haas-grotesk-text', 'sans'],
        fruit: ['CardinalFruit', ...defaultTheme.fontFamily.serif],
        mont: ['NeueMontreal', ...defaultTheme.fontFamily.sans],
        mono: ['Space Mono', 'monospace', ...defaultTheme.fontFamily.mono],
        jbd: ['NeueMontreal', ...defaultTheme.fontFamily.sans],
        jbt: ['JBSansText', 'sans'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
