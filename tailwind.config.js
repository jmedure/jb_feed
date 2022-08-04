/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
