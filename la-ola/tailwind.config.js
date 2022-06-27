module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-wave': '#0762aa'
      },
      fontFamily:{
        Montserrat:["Montserrat","sans-serif"],
        TTNormsReg:["TTNormsReg","sans-serif"],
        TTNormsLight:["TTNormsLight","sans-serif"]
      },
      container: {
        padding: '3.5rem',
        center: true
      },
      backgroundImage: theme => ({
        'hero': "url('/src/assets/Hero.png')"
      }),
    },
    container:{
      center: true,
      padding:"1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      },
    },
  },
  plugins: [],
}
