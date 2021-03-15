module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          100: '#fdffbc',
          200: '#ffeebb',
          300: '#ffdcb8',
          400: '#ffc1b6'
        }
      },
      backgroundImage: theme => ({
        'image-home': "url('./images/filler-home.jpeg')",
        'image-about': "url('./images/filler-about.jpeg')",
        'image-enroll': "url('./images/filler-enroll.jpeg')",
      })
    }
  }
}
