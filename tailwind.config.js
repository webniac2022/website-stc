const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: { xs: "320px", ...defaultTheme.screens },
    extend: {
      colors: {
        textColors: {
          DEFAULT: "#686B6C",
          50: "#C5C6C7",
          100: "#BABCBD",
          200: "#A6A8A9",
          300: "#919495",
          400: "#7C8081",
          500: "#686B6C",
          600: "#4C4F4F",
          700: "#313233",
          800: "#151616",
          900: "#000000",
        },
        components: {
          DEFAULT: "#0482B0",
          50: "#70D6FC",
          100: "#5CD1FB",
          200: "#34C5FA",
          300: "#0CBAF9",
          400: "#059FD8",
          500: "#0482B0",
          600: "#035979",
          700: "#023142",
          800: "#00080B",
          900: "#000000",
        },
      },
      backgroundImage: {
        firstGradient: "linear-gradient(to right, #bdc3c7, #2c3e50)",
        secondGradient: "linear-gradient(to right, #304352, #d7d2cc)",
        thirdGradient: "linear-gradient(to right, #232526, #414345)",
      },
    },
  },
  plugins: [],
};
