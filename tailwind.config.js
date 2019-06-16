module.exports = {
  theme: {
    fontFamily: {
      display: ['Ubuntu', 'sans-serif'],
      body: ['Ubuntu', 'sans-serif']
    },
    extend: {}
  },
  variants: {},
  plugins: [
      require('tailwindcss-card')()
  ]
}
