/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#FFF",
        "gray-50": "#F5F8FC",
        "gray-100": "#666",
        "gray-200": "#7e7e7e",
        "gray-300": "#e7e7e7",
        "gray-400": "#e5e5e5",
        "gray-500": "#1a1a1a",
        "primary-100": "#F5F5F5",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-300": "#333",
        "secondary-400": "#34495e",
        "secondary-500": "#191c26",
      },
      boxShadow: {
        'sm': `0 3px 5px rgb(0 0 0 / 10%)`,
        'md': `0 0 10px rgb(0 0 0 / 10%)`,
      },
      backgroundImage: (theme) => ({
        'hero-shape': "url('./assets/background-image.svg')",
      }),
      maskSize: {
        'auto': 'auto'
      },
      maskImage: (theme) => ({
        'hero-shape': "url('./assets/background-image.svg')",
    }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    
    fontSize: {
      'xs': ['0.875rem', {
        lineHeight: '1.875rem',
      }],
      'sm': ['1.375rem', {
        lineHeight: '1.5',
      }],
      'base': ['1.063rem', {
        lineHeight: '1.875rem',
      }],
      'lg': ['1.125rem', {
        lineHeight: '1.875rem',
      }],
      'xl': ['1.25rem', {
        lineHeight: '1.5',
      }],
      '5xl': ['2.75rem', {
        lineHeight: '1.2',
      }],
      '6xl': ['2.813rem', {
        lineHeight: '1',
      }],
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
    animation: {
      '1s': '1s'
    },
    fillMode: {
      'both': 'both',
    },
    heyframes: {
      slideInDown: {
        '0%' : { transform: 'translate3d(0, -100%, 0)', visibilty: 'visible'},
        'to' : { transform: 'translateZ(0)'}
      }
    }
  },
  variants: {
    backgroundImage: ['responsive'],
    maskSize: ['responsive'],
    maskImage: ['responsive'],
    animation: ['responsive'],
  },
  plugins: [
   
  ],
};
