"use client";
import { ErrorBoundary, Footer, Navbar, SearchBar } from "@/components";
import { HeroSection } from "@/features/landingPage/components";
import { useState } from "react";
import { set } from "react-hook-form";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchIconhidden, setSearchIconhidden] = useState(false);

  console.log(searchIconhidden, "earchHidden");

  return (
    <body className="!overflow-y-auto">
      <Navbar searchIconhidden={searchIconhidden} />
      <main>
        <ErrorBoundary>
          <HeroSection setSearchIconhidden={setSearchIconhidden} />
          {children}
        </ErrorBoundary>
      </main>
      <Footer />
    </body>
  );
}
