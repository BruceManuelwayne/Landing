module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
     
      'md': '768px',
      

      'lg': '1024px',
 

      'xl': '1280px',
    

      '2xl': '1536px',
      
    },
    extend: {
      padding:{
        '1/3': '33.33333%',
        '2/3': '66.66667%',
      },

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
        CustomOla2:["CustomOla2","sans-serif"],
        BoldItalic:["BoldItalic","sans-serif"]
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
      sm : "640px",
      md : "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1124px"
      },
    },
  },
  plugins: [],
}
