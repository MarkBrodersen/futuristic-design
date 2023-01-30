/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#a9e4e9",
          200: "#2c5cdd",
          300: "#243c9c",
          400: "#2c3955",
          500: "#c29b8e",
          600: "#ae8981",
        },
        bg: {
          100: "#ff124f",
          200: "#ff00a0",
          300: "#fe75fe",
          400: "#7a04eb",
          500: "#120468",
        },
      },
    },
  },
  plugins: [],
};
