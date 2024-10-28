/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appBlue: "#1e3a8a",
        appSecondBlue: "#60a5fa"
      }
    },
  },
  plugins: [],
}
