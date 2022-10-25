/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#D8E9A8",

          secondary: "#3A4750",

          accent: "#be185d",

          neutral: "#EEEEEE",

          "base-100": "#303841",

          info: "#6CADEF",

          success: "#22c55e",

          warning: "#DD870E",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
