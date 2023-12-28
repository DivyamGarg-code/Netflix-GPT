/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',  // Small screens, like phones
        'md': '768px',  // Medium screens, like tablets
        'lg': '1024px', // Large screens, like laptops
        'xl': '1400px', // Extra large screens, like desktops
      }
    },
  },
  plugins: [],
}