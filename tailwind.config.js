module.exports = {
  purge: [],
  theme: {
    darkSelector: ".dark-mode",
    fontFamily: {
      sans: ['Monument Grotesk', 'sans-serif'],
      serif: ['Self Modern', 'serif'],
    },
    colors: {
      white: '#FFFFFF',
      black: '#050210',
      blue: '#3475AA',
    }
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"],
    fontStyle: ['responsive', 'hover'],
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
