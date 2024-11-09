"use client";
import { ErrorBoundary, Footer, Navbar, SearchBar } from "@/components";
import { HeroSection } from "@/features/landingPage/components";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchIconhidden, setSearchIconhidden] = useState(false);

  return (
    <div>
      <Navbar searchIconhidden={searchIconhidden} />
      <main>
        <ErrorBoundary>
          <HeroSection
            setSearchIconhidden={(visible) => {
              setSearchIconhidden(visible);
            }}
          />
          {children}
        </ErrorBoundary>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
