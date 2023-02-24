/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "sm": { "max": "400px" },
    },
    fontFamily: {
      "NimbusSansL": ["NimbusSansL", "sans-serif"],
    },
  },
  plugins: [],
};
