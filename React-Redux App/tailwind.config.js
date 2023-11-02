/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html","./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    fontSize: {
      58: "58px",
      46: "46px",
      40: "40px",
      32: `32px`,
      28: `28px`,
      26: `26px`,
      24: `24px`,
      21: `21px`,
      20: `20px`,
      19: `19px`,
      18: `18px`,
      16: "16px",
      15: "15px",
      14: "14px",
      13: "13px",
      12: "12px",
      11: "11px",
      10: "10px",
      9:  "9px",
    },
    colors: {
      white : '#FFFFFF',
      black : '#000000',
      primaryColor : '#3498db',
      gray : '#E9E9E9',
      headerBG : '#ECECEC',
      optionsBG : '#FBFBFB',
      border : '#D9D9D9',
      red : '#E6312A',
      lightgreen : '#34D126'
    }
  },
  plugins: [

  ],
  
}