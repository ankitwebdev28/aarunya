/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        seagram: ["Seagram", "sans-serif"], // Register the font
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
