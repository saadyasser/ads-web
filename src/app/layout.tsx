import type { Metadata } from "next";

import { gilroy } from "./fonts";
import clsx from "clsx";

import { ErrorBoundary } from "@/components";

import "@/styles/globals.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Providers = dynamic(() => import("@/components/Providers"), {
  ssr: true,
});
const ThemeHandler = dynamic(() => import("@/components/ThemeHandler"), {
  ssr: true,
});
const Logo = dynamic(() => import("@/components/Logo"), { ssr: true });
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),

  title: {
    default: "Azaiza Design Studio",
    template: "%s | Azaiza Design Studio",
  },
  description:
    "Explore our collection of handmade UI components, templates, design systems, and color themes. All in one designed Figma Library.",
  openGraph: {
    title: "Azaiza Design Studio | Figma Library ",
    description:
      "Explore our collection of handmade UI components, templates, design systems, and color themes. All in one designed Figma Library.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azaiza Design Studio | Figma Library ",
    description:
      "Explore our collection of handmade UI components, templates, design systems, and color themes. All in one designed Figma Library.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = clsx(gilroy.variable, "font-gilroy scroll-smooth h-auto");
  return (
    <html lang="en" className={classes}>
      <body className="pt-[70px] xl:pt-[83px] bg-background-light dark:bg-background-dark">
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-[60vh]">
                <div className="animate-pulse">
                  <Logo />
                </div>
              </div>
            }
          >
            <Providers>
              <ThemeHandler />
              {children}
            </Providers>
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
