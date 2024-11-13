/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode switching with a 'class' strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specify paths to all components for Tailwind to process
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2", // Example custom color for primary theme elements
        secondary: "#50E3C2", // Example secondary color
      },
    },
  },
  plugins: [],
};
