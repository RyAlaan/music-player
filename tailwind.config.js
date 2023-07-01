/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "420px",
      md: "840px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#121212",
        secondairy: "#2A2A2A",
        tertiaty: "#1ED760",
        text: "#BEBEBE",
      },
    },
  },
  plugins: [],
};
