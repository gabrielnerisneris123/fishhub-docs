/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          light: '#3388DD',
          dark: '#004499',
        },
        success: {
          DEFAULT: '#00AA55',
          light: '#33BB77',
          dark: '#008844',
        },
        warning: {
          DEFAULT: '#FF8800',
          light: '#FFAA33',
          dark: '#CC6600',
        },
        danger: {
          DEFAULT: '#CC0000',
          light: '#DD3333',
          dark: '#990000',
        },
      },
    },
  },
  plugins: [],
}
