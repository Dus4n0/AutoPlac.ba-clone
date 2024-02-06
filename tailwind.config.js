/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "860px",
      lg: "996px",
      xl: "1440px",
      xxl: "1700px",
      xxxl: "1950px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/header-background.svg')",
      },
    },
  },
  plugins: [],
};
