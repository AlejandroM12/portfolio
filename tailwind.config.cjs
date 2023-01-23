/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#FFFFFF",
        "gray-50": "#F5F8FC",
        "gray-100": "#666",
        "gray-200": "#7e7e7e",
        "gray-500": "#1a1a1a",
        "primary-100": "#F5F5F5",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#34495e",
        "secondary-500": "#191c26",
      },
      boxShadow: {
        'sm': `0 3px 5px rgb(0 0 0 / 10%)`
      },
      backgroundImage: (theme) => ({
      }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
