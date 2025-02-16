/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#1F2B21", // Deep Green (Main Brand Color)
          700: "#3A523F", // Muted Forest Green
          500: "#61946E", // Softer Natural Green
        },
        accent: {
          500: "#D5A021", // Warm Golden Yellow
          400: "#E7B859", // Softer Warm Gold
        },
        neutral: {
          900: "#121212", // Almost Black (Background)
          700: "#2C2C2C", // Dark Gray
          500: "#4A4A4A", // Medium Gray
          200: "#E5E5E5", // Light Gray
          100: "#F8F8F8", // Almost White (Soft Background)
        },
        contrast: {
          500: "#A0415B", // Deep Muted Red (Good for highlights)
          300: "#C47A8C", // Softer Pinkish-Red
        },
      },
    },
  },
  plugins: [],
};
