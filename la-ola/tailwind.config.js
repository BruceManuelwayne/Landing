module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        wave:{
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translate(100)' },

        },
      },
      animation : {
        'wave':'wave 5s linear infinite',
      },
      colors: {
        'blue-wave': '#0762aa'
      },
      fontFamily:{
        Montserrat:["Montserrat","sans-serif"],
        TTNormsReg:["TTNormsReg","sans-serif"],
        TTNormsLight:["TTNormsLight","sans-serif"],
        CustomOla:["CustomOla","sans-serif"],
        CustomOla2:["CustomOla2","sans-serif"]
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
