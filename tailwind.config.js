const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F5E1D1",
        brownDark: "#b45f06",
      },
      fontFamily: {
        cursive: ["Cookie"],
        shadowsIntoLight: ["Shadows Into Light"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
