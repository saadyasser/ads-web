import localFont from "next/font/local";

export const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-UltraLight.ttf",
      weight: "200",
      style: "extraLight",
    },
    {
      path: "../../public/fonts/Gilroy-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "semiBold",
    },
    {
      path: "../../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "extraBold",
    },
    {
      path: "../../public/fonts/Gilroy-Heavy.ttf",
      weight: "900",
      style: "heavy",
    },
  ],
  preload: true,
  display: "swap",
  variable: "--font-gilroy",
  adjustFontFallback: "Arial",
});

export default gilroy;
