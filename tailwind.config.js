/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white-one': "#fefefe",
      'white-two': "#f5f5fa",
      'white-two': "#f5f5f7",
      'main-red': "#ff808b",
      'secondary-purple': "#9598d6",
      'main-purple': "#4e4cac",
      'main-blue': "#5e81f4",
      'main-green': "#04a640",
      'text-dark': "#121336",
      'text-light': "#9797bb",
      'text-dark-2': "#332f4f",
    },
    extend: {},
  },
  plugins: [],
}