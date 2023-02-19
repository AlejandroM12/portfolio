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
        'about-perfil': "url('./assets/about-image-example.jpg')",
        'services-1': "url('./assets/services/services-1.jpg')",
        'services-2': "url('./assets/services/services-2.jpg')",
        'services-3': "url('./assets/services/services-3.jpg')",
        'services-4': "url('./assets/services/services-4.jpg')",
        'portfolio-1': "url('./assets/portfolio/portfolio-image-1.jpg')",
        'portfolio-2': "url('./assets/portfolio/portfolio-image-2.jpg')",
        'portfolio-3': "url('./assets/portfolio/portfolio-image-3.jpg')",
        'portfolio-4': "url('./assets/portfolio/portfolio-image-4.jpg')",
        'portfolio-5': "url('./assets/portfolio/portfolio-image-5.jpg')",
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
      'x': ['0.875rem'],
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
      'xll': ['0.875rem', {
        lineHeight: '1.625rem',
      }],
      '1xl': ['1.438rem',],
      '2xl': ['2.063rem',],
      '3xl': ['1.563rem', {
        lineHeight: '1.5',
      }],
      '4xl': ['2.188rem', {
        lineHeight: '1.5',
      }],
      '5xl': ['2.75rem', {
        lineHeight: '1.2',
      }],
      '6xl': ['2.813rem', {
        lineHeight: '1',
      }],
      '7xl': ['2.5rem', {
        lineHeight: '1',
      }],
      
    },
    fontWeight: {
      light: 300,
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
    
    fillMode: {
      'both': 'both',
    },
    heyframes: {
      slideLeft: {
        '0%': {
          opacity: 0,
          transform: 'translateX(-20px)',
        },
        'to': {
          opacity: 1,
          transform: 'none',
        },
      },
    },
    animation: {
      '1s': '1s',
      slideLeft: 'slideLeft 1s ease-out',
    },
    flex: {
      '2': '0 0 auto',
      '3': '0 0 50%',
      '4': '0 0 75%',
      '5': '0 0 25%',
    },
    transitionTimingFunction: {
      'in-expo': 'cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
    }
  },
  variants: {
    backgroundImage: ['responsive'],
    animation: ['responsive', 'hover'],
    maskSize: ['responsive'],
    maskImage: ['responsive'],
    animation: ['responsive'],
    extend: {
      content: ['hover'],
    }
  },
  plugins: [
   
  ],
};
