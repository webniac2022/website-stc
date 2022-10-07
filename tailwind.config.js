/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        components: {
          DEFAULT: "#2A669F",
          50: "#78D7DB",
          100: "#6CCED8",
          200: "#53BAD1",
          300: "#3BA2CB",
          400: "#3183B7",
          500: "#2A669F",
          600: "#234B83",
          700: "#1B3366",
          800: "#14204A",
          900: "#0C102E",
        },
      },
    },
  },
  plugins: [],
};
