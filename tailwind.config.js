/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1': '20px',
        '2': '40px',
        '3': '60px',
        '4': '80px',
        '5': '100px',
        '6': '120px',
        '7': '140px',
        '8': '160px',
        '9': '180px',
        '10': '200px',
      },
    },
  },
  plugins: [],
}

