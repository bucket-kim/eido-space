/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "sm": { "min": "390px", "max": "640px" },
    },
    fontFamily: {
      "NimbusSansL": ["NimbusSansL", "sans-serif"],
    },
  },
  plugins: [],
};
