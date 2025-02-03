/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Roboto Condensed"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
