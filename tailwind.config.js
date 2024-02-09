/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        font1: ["Protest Strike", "sans-serif"],
        font2: [],
      },
      variants: {
        backgroundImage: ["dark"],
      },
    },
  },
  plugins: [],
};
