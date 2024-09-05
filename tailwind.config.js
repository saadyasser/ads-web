/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "what-makes-us-different": "url('/images/what-makes-us-different.png')",
      },
      fontFamily: {
        georgia: ["var(--font-georgia)"],
        inter: ["var(--font-inter)"],
      },
      screens: {
        lg: "1025px",
      },
      colors: {
        primary: {
          DEFAULT: "#655CFE",
          hover: "#5B53E5",
          active: "#514ACB",
          light: "#F0EFFF",
          "light-hover": "#E8E7FF",
          "light-active": "#CFCCFF",
          dark: "#4C45BF",
          darkHover: "#3D3798",
          darkActive: "#2D2972",
          darker: "#232059",
          shadow: "rgba(81, 74, 203, 0.31)",
        },
        secondary: {
          DEFAULT: "#01112D",
          hover: "#010F29",
          active: "#010E24",
          light: "#E6E7EA",
          "light-hover": "#D9DBE0",
          "light-active": "#B0B5BE",
          dark: "#010D22",
          darkHover: "#010A1B",
          darkActive: "#000814",
          darker: "#000610",
          shadow: "rgba(121, 121, 121, 0.31)",
        },
        black: {
          DEFAULT: "#0D0D0D",
          hover: "#0C0C0C",
          active: "#0A0A0A",
          light: "#E7E7E7",
          "light-hover": "#DBDBDB",
          "light-active": "#B4B4B4",
          dark: "#0A0A0A",
          "dark-hover": "#080808",
          "dark-active": "#060606",
          darker: "#050505",
        },
        white: {
          DEFAULT: "#FFFFFF",
          hover: "#E6E6E6",
          active: "#CCCCCC",
          light: "#FFFFFF",
          "light-hover": "#FFFFFF",
          "light-active": "#FFFFFF",
          dark: "#BFBFBF",
          darkHover: "#999999",
          darkActive: "#737373",
          darker: "#595959",
        },
        danger: {
          DEFAULT: "#B91313",
          hover: "#A71111",
          active: "#940F0F",
          light: "#F8E7E7",
          "light-hover": "#F5DCDC",
          "light-active": "#E9B6B6",
          dark: "#8B0E0E",
          darkHover: "#6F0B0B",
          darkActive: "#530909",
          darker: "#410707",
          shadow: "rgba(148, 15, 15, 0.3)",
        },
        success: {
          DEFAULT: "#0A9927",
          hover: "#098A23",
          active: "#087A1F",
          light: "#E7F5E9",
          "light-hover": "#DAF0DF",
          "light-active": "#B3DFBC",
          dark: "#08731D",
          darkHover: "#065C17",
          darkActive: "#054512",
          darker: "#04360E",
          shadow: "rgba(9, 138, 35, 0.3)",
        },
        alert: {
          DEFAULT: "#C77605",
          hover: "#B36A05",
          active: "#9F5E04",
          light: "#F9F1E6",
          "light-hover": "#F7EADA",
          "light-active": "#EED5B2",
          dark: "#955904",
          "dark-hover": "#774703",
          "dark-active": "#5A3502",
          darker: "#462902",
          shadow: "rgba(179, 106, 5, 0.3)",
        },
        background: {
          light: "#FBFBFB",
          dark: "#0A0A0A",
        },
      },
      boxShadow: {
        custom: "0px 3px 7px 0px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out forwards",
        "fade-out": "fade-out 0.4s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
