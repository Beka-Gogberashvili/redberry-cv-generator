/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        shutterstock: "url('/src/assets/img/shutterstock.png')",
      },
      fontFamily: {
        helvetica: ["Helvetica Neue Bold Caps", "sans-serif"],
        helveticaT: ["Helvetica Neue Thin", "sans-serif"],
        helveticaL: ["Helvetica Neue Light", "sans-serif"],
        helveticaR: ["Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
