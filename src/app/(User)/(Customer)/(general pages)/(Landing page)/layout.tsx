"use client";
import { ErrorBoundary, Navbar } from "@/components";
import { GeneralLayout, HeroSection } from "@/features/landingPage/components";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [searchIconhidden, setSearchIconhidden] = useState(false);

  return (
    <main>
      <ErrorBoundary>
        <HeroSection />
        {children}
      </ErrorBoundary>
    </main>
  );
}
