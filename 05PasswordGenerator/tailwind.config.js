/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      textColor: {
        'custom-green': '#16a34a',
        'custom-green-700': '#15803d', 
      },
    },
  },
  plugins: [],
}