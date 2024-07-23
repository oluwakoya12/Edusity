/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(8, 0, 58, 0.7), rgba(8, 0, 58, 0.7)), url('/src/assets/hero.png')",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"]
      },
    },
  },
  plugins: [],
}
