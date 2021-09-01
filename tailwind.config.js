const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        transblack: "rgba(0,0,0,.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
