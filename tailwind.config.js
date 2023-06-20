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
    themes: [
      "dark",
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          p: {
            color: "rgb(75 85 99 / var(--tw-text-opacity));",
          },
        },
      },
    ],
  },
};
