/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#27374D', 
        secondary: '#526D82', 
        text_heading: '#9DB2BF', 
        text_light: '#DDE6ED', 
      },
    },
  },
  plugins: [],
}

