/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          10: '#F2F2F2',
          30: '#A7A7A7',
          50: '#808080',
          80: '#303030'
        },
        blue: {
          100: '#597DFE'
        },
        yellow: {
          10: '#FAB854',
          20: '#FB3D3D'
        },
        dark: {
          100: '#505050',
          200: '#3F3F3F',
          300: '#1B1B1B',
          400: '#000000' 
        },
        light: {
          100: '#303030',
          200: '#A7A7A7',
          300: '#FFFFFF',
          400: '#EDEDED'
        },
        both: {
          100: '#393939'
        }
      },
      boxShadow: {
        "gray-10": "0px -50px 40px rgba(0, 0, 0, 0.3)",
        "gray-20": "0px 0px 40px 0px rgba(0, 0, 0, 0.1)",
        "blue-10": "0px 0px 20px 2px rgba(89, 135, 254, 0.7)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      }
    },
    screens: {
      se: "320px",
      ie: "375px",
      xs: "414px",
      ss: "622px",
      sm: "744px",
      md: "1000px",
    }
  },
  plugins: [],
}
