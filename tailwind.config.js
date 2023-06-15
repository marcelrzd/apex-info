/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d92929",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "light"],
  },
};