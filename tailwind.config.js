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
      backgroundImage: {},
      fontFamily: {
        georgia: ["var(--font-georgia)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        primary: {
          DEFAULT: "#655CFE",
          hover: "#5B53E5",
          active: "#514ACB",
          light: "#F0EFFF",
          lightHover: "#E8E7FF",
          lightActive: "#CFCCFF",
          dark: "#4C45BF",
          darkHover: "#3D3798",
          darkActive: "#2D2972",
          darker: "#232059",
        },
        secondary: {
          DEFAULT: "#01112D",
          hover: "#010F29",
          active: "#010E24",
          light: "#E6E7EA",
          lightHover: "#D9DBE0",
          lightActive: "#B0B5BE",
          dark: "#010D22",
          darkHover: "#010A1B",
          darkActive: "#000814",
          darker: "#000610",
        },
        black: {
          light: "#E6E7E8",
          lightHover: "#D9DADC",
          lightActive: "#B0B3B7",
          normal: "#010A18",
          normalHover: "#010916",
          normalActive: "#010813",
          dark: "#010812",
          darkHover: "#01060E",
          darkActive: "#00050B",
          darker: "#000408",
        },
        white: {
          light: "#FFFFFF",
          lightHover: "#FFFFFF",
          lightActive: "#FFFFFF",
          normal: "#FFFFFF",
          normalHover: "#E6E6E6",
          normalActive: "#CCCCCC",
          dark: "#BFBFBF",
          darkHover: "#999999",
          darkActive: "#737373",
          darker: "#595959",
        },
        danger: {
          light: "#F8E7E7",
          lightHover: "#F5DCDC",
          lightActive: "#E9B6B6",
          normal: "#B91313",
          normalHover: "#A71111",
          normalActive: "#940F0F",
          dark: "#8B0E0E",
          darkHover: "#6F0B0B",
          darkActive: "#530909",
          darker: "#410707",
        },
        success: {
          light: "#E7F5E9",
          lightHover: "#DAF0DF",
          lightActive: "#B3DFBC",
          normal: "#0A9927",
          normalHover: "#098A23",
          normalActive: "#087A1F",
          dark: "#08731D",
          darkHover: "#065C17",
          darkActive: "#054512",
          darker: "#04360E",
        },
        alert: {
          light: "#F9F1E6",
          lightHover: "#F7EADA",
          lightActive: "#EED5B2",
          normal: "#C77605",
          normalHover: "#B36A05",
          normalActive: "#9F5E04",
          dark: "#955904",
          darkHover: "#774703",
          darkActive: "#5A3502",
          darker: "#462902",
        },
      },
    },
  },
  plugins: [],
};
