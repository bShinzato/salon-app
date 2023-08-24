const {nextui} = require("@nextui-org/theme")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins:[nextui()],
}
