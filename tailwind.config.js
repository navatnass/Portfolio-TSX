/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      "primary-gray": "#A4A2A4",
      "secondary-gray": "#B9B7A7",
      "khaki": "#B5AA9D",
      "davi": "#2C2E3A",
      "cream": "#FADCD9",
      "k2": "#f7cac6",
      "but": "#ece9e9",
      "kremas": "#fffdfc",
      "kremas4": "#fafafa",
      "line": "#ff3c78",
      "pilka": "#ececec",
      "balta": "#ffffff",
      "text": "#3d3d3d",
      "p-textas": "#b2afad",
      "rose": "#F8AFA6",
      "text-gray": "#f2f2f2",
      "gray-50": "#b3b3b3",
      "gray-100": "#DFCCCC",
      "gray-500": "#5E0000",
      "primary-100": "#FFE1E0",
      "primary-300": "#FFA6A3",
      "primary-500": "#FF6B66",
      "secondary-400": "#FFCD58",
      "secondary-500": "#FFC132",
    },
    backgroundImage: (theme) => ({
      "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
      "mobile-home": "url('./assets/HomePageGraphic.png')"
    }),
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      pop: ['Poppins-Regular']
    },
    content: {
      evolvetext: "url('./assets/EvolveText.png')",
      abstractwaves: "url('./assets/AbstractWaves.png')",
      sparkles: "url('./assets/Sparkles.png')",
      circles: "url('./assets/Circles.png')",
    }
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px"
  }
  },
  plugins: [],
}