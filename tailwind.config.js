/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['neue-haas-unica', 'sans'],
        serif: ['merriweather', 'serif'],
        grotesk: ['neue-haas-grotesk-display', 'sans'],
        text: ['neue-haas-grotesk-text', 'sans'],
        fruit: ["CardinalFruit", ...defaultTheme.fontFamily.serif],
        mont: ["NeueMontreal", ...defaultTheme.fontFamily.sans],
        mono: ["Space Mono", 'monospace', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
