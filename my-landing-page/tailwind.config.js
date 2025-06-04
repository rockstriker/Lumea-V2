import { defineConfig } from 'vite'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#0052FF',
        'secondary': '#FF6D00',
      }
    },
  },
  plugins: [],
} 