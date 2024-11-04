"use client";
import { ErrorBoundary, Footer, Navbar, SearchBar } from "@/components";
import { HeroSection } from "@/features/landingPage/components";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [searchIconhidden, setSearchIconhidden] = useState(false);

  return (
    <div className="!overflow-y-auto">
      <Navbar searchIconhidden={false} />
      <main>
        <ErrorBoundary>
          <HeroSection setSearchIconhidden={() => {}} />
          {children}
        </ErrorBoundary>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
