/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#990931",
        secondary: "#7D072A",
        dark: "#1A0108",
      },
    },
  },
  plugins: [],
}