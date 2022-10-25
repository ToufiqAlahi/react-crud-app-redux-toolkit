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
          
          primary: "#facc15",

          secondary: "#34d399",

          accent: "#be185d",

          neutral: "#3E2640",

          "base-100": "#111827",

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
