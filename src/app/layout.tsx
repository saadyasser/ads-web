"use client";
import type { Metadata } from "next";
import React, { Suspense } from "react";
// import dynamic from "next/dynamic";
import { SessionProvider } from "next-auth/react";
import clsx from "clsx";

import { gilroy } from "./fonts"; // Ensure the font import is correct
import { ErrorBoundary, Logo, Providers, ThemeHandler } from "@/components";
import "@/styles/globals.css";
import QueryProvider from "@/providers/QueryProvider";

// const Providers = dynamic(() => import("@/components/Providers"), {
//   ssr: true,
// });
// const ThemeHandler = dynamic(() => import("@/components/ThemeHandler"), {
//   ssr: true,
// });
// const Logo = dynamic(() => import("@/components/Logo"), { ssr: true });

const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: {
    default: "Azaiza Design Studio",
    template: "%s | Azaiza Design Studio",
  },
  description:
    "Explore our collection of handmade UI components, templates, design systems, and color themes. All in one designed Figma Library.",
  openGraph: {
    title: "Azaiza Design Studio | Figma Library",
    description:
      "Explore our collection of handmade UI components, templates, design systems, and color themes. All in one designed Figma Library.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azaiza Design Studio | Figma Library",
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
      <body>
        <SessionProvider>
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
                <QueryProvider>{children}</QueryProvider>
                <ThemeHandler />
              </Providers>
            </Suspense>
          </ErrorBoundary>
        </SessionProvider>
      </body>
    </html>
  );
}
