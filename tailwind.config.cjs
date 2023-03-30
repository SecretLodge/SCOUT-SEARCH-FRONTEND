/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-10": "#F2F2F2",
        "gray-30": "#A7A7A7",
        "gray-50": "#808080",
        "gray-80": "#303030",
        "blue-10": "#597DFE",
        "yellow-10": "#FAB854",
        "yellow-20": "#FB3D3D"
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
