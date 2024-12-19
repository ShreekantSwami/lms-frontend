/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["corporate", "dim"],
    darkTheme: "dim",
  },
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        secondFont: ["Sacramento", "cursive"], // Add 'cursive' or a fallback font family
      },
    },
  },
  plugins: [require("daisyui")],
};
