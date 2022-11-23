/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      grotleyItalic: ["Grotley-Italic"],
      grotleyRegular: ["Grotley-Regular"],
      bagero: ["Bagero"],
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
