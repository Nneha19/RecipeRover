/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        customRed:'#AD192A',
        customBrown:'#A94438',
        customliteRed:'#A94438',
        customGray:'#E4DEBE'
      }
    },
  },
  plugins: [],
}

