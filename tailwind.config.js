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
      fontSize: {
        "3xl": "32px",
        "4xl": "40px",
      },
      backgroundImage: {
        "what-makes-us-different": "url('/images/what-makes-us-different.png')",
      },
      fontFamily: {
        gilroy: ["var(--font-gilroy)"],
      },
      screens: {
        lg: "1025px",
      },
      colors: {
        primary: {
          DEFAULT: "#473BF0",
          hover: "#4035D8",
          active: "#392FC0",
          light: "#FBFBFA",
          "light-hover": "#F8F9F8",
          "light-active": "#F1F2F1",
          shadow: "rgba(81, 74, 203, 0.31)",
        },
        secondary: {
          DEFAULT: "#D4F03C",
          hover: "#BFD836",
          active: "#AAC030",
          light: "#FBFEEC",
          "light-hover": "#F9FDE2",
          "light-active": "#F2FAC3",
          darker: "#4A5415",
          shadow: "rgba(121, 121, 121, 0.31)",
        },
        accent: {
          dark: {DEFAULT:"#0E2841", hover:"#0D243B"},
          gray: {DEFAULT: "#D3D4D1", light: "F1F2F1"}
        },
        black: {
          DEFAULT: "#0D0D0D",
          hover: "#0C0C0C",
          active: "#0A0A0A",
          light: "#E7E7E7",
          "light-hover": "#DBDBDB",
          "light-active": "#B4B4B4",
          darker: "#050505",
        },
        white: {
          DEFAULT: "#FFFFFF",
          hover: "#E6E6E6",
          active: "#CCCCCC",
          light: "#FFFFFF",
          "light-hover": "#FFFFFF",
          "light-active": "#FFFFFF",
          darker: "#595959",
        },
        danger: {
          DEFAULT: "#F45A51",
          hover: "#DC5149",
          active: "#C34841",
          light: "#FEEFEE",
          "light-hover": "#FDE6E5",
          "light-active": "#FCCCC9",
          dark: "#B7443D",
          darker: "#551F1C",
          shadow: "rgba(148, 15, 15, 0.3)",
        },
        alert: {
          DEFAULT: "#F8CB42",
          hover: "#DFB73B",
          active: "#C6A235",
          light: "#FEFAEC",
          "light-hover": "#FEF7E3",
          "light-active": "#FDEFC4",
          darker: "#574717",
          shadow: "rgba(179, 106, 5, 0.3)",
        },
        success: {
          DEFAULT: "#45DB77",
          hover: "#3EC56B",
          active: "#37AF5F",
          light: "#ECFBF1",
          "light-hover": "#E3FAEB",
          "light-active": "#C5F4D5",
          darker: "#184D2A",
          shadow: "rgba(9, 138, 35, 0.3)",
        },
        background: {
          light: "#F4F7FA",
          dark: "#0E2841",
        },
        border: {
          DEFAULT: "#E7E9ED",
        },
      },
      boxShadow: {
        custom: "0px 3px 7px 0px",
      },
      keyframes: {
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-out-to-top': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
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
        'slide-in-from-bottom': 'slide-in-from-bottom 0.7s ease-in-out',
        'slide-out-to-top': 'slide-out-to-top 0.7s ease-in-out',
        "fade-in": "fade-in 0.5s ease-in-out forwards",
        "fade-out": "fade-out 0.4s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
