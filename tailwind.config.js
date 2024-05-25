/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {},
      backgroundImage: {},
      fontFamily: {
        georgia: ["var(--font-georgia)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
