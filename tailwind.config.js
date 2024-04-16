/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        primary: "#DF7934",
        primaryOrange: "#E75D14",
        primaryGreen: "#9BC175",
        secondary: "#C5D7A1",
        secondaryPink: "#FEDBB3",
      },
      boxShadow: {
        shadow100: "4px 3px 11.2px rgba(0, 0, 0, 0.25)",
        shadow200: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

