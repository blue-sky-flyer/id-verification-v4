/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#002855',
        secondary: '#FFC72C'
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'sans-serif']
      }
    },
  },
  plugins: [],
}