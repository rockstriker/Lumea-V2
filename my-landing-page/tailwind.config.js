import { defineConfig } from 'vite'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#0052FF',
        'secondary': '#FF6D00',
      }
    },
  },
  plugins: [],
} 