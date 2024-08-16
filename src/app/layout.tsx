import type { Metadata } from "next";

import Providers from "@/components/Providers";
import { georgia, inter } from "./fonts";
import clsx from "clsx";

import { ThemeHandler } from "@/components";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Azaiza Design Studio | Home",
  description: "Azaiza design studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = clsx(
    georgia.variable,
    inter.variable,
    "scroll-smooth h-auto"
  );
  return (
    <html lang="en" className={classes}>
      <body className="pt-[70px] xl:pt-[83px] bg-background-light dark:bg-background-dark">
        <Providers>
          <ThemeHandler />
          {children}
        </Providers>
      </body>
    </html>
  );
}
