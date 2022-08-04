/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-dark": "#0f57db",
        blue: "#176AE5",
        pink: "#eebacb",
        back: "#2f2f30",
        orange: "#F67748",
        customWhite: "#F9EFE4",
      },
      fontSize: {
        small: ["14px", { lineHeight: "1.6em" }],
        medium: "16px",
        large: ["32px", { lineHeight: "1.25em" }],
        xl: [
          "42px",
          {
            lineHeight: "1.25em",
          },
        ],
        "2xl": [
          "60px",
          {
            lineHeight: "1.1em",
            fontWeight: "600",
          },
        ],
      },
      screens: {
        large: "1670px",
      },
      width: {
        "fit-content": "fit-content(20em)",
      },
    },
  },
  plugins: [],
};
