/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          600: '#40CBB5'
        },
        gold: {
          400: '#FFD700'
        }
      }
    },
  },
  plugins: [],
}