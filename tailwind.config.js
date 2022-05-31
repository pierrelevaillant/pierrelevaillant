module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./content/**/*.{md,yml,json,yaml,toml,csv}",
    "./app.vue"
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      "sans": ['NHaasGrotesk', 'sans-serif'],
      "serif": ['Reckless', 'serif']
    },
    extend: {
      colors: {
        black: "#0f0e12",
        white: "#f0f0ef"
      }
    },
  },
  plugins: [],
}
