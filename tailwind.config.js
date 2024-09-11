// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        background: '#1a202c', // Dark Charcoal
        primaryText: '#f7fafc', // Light Gray
        accent: '#3182ce',      // Blue
        secondaryText: '#a0aec0', // Cool Gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
