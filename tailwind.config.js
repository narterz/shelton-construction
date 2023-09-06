/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CEEAC4",
        secondary: "#4B7B4D",
        text: "#164A41",
        accent: '#6DE88F'
      },
      fontWeight: {
        light: 200,
        regular: 400,
        semibold: 600,
        bold: 800,
      },
      fontFamily: {
        Roboto: "Roboto"
      },
      fontSize: {
        small: "0.875rem",
        body: "1.05rem",
        bodymd: "1.3rem",
        bodyLg: "2.3rem",
        heading: "3rem",
        headingMd: "4rem",
        headingLg: "3rem",
        subheading: "1.5rem",
        inputField: "0.925rem"
      },
      screens: {
        xsm: "320px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xlg: "1280px"
      },
    },
  },
  plugins: [],
}

