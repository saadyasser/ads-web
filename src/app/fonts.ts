import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const georgia = localFont({
  src: [
    {
      path: "../../public/fonts/Georgia.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Georgia-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-georgia",
  adjustFontFallback: "Arial",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
