/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Our custom dark theme color palette
      colors: {
        background: "#121212", // Main dark background
        surface: "#1e1e1e", // Card and element backgrounds
        primary: "#03dac6", // Vibrant Teal
        secondary: "#bb86fc", // Vibrant Purple
        "text-primary": "#ffffff", // White text
        "text-secondary": "#b3b3b3", // Grey text
      },
      // The default font for the entire application
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      // The custom animation for the gradient background effect
      animation: {
        "gradient-flow": "gradient-flow 15s ease infinite",
      },
      keyframes: {
        "gradient-flow": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
