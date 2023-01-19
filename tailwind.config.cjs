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
        "secondary-400": "#34495e",
        "secondary-500": "#191c26",
      },
      backgroundImage: (theme) => ({
      }),
      fontFamily: {
        poppins: ["Poppins", sans-serif],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
