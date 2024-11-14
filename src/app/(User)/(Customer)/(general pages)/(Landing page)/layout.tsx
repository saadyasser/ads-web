"use client";
import { ErrorBoundary, Navbar } from "@/components";
import { useCategories } from "@/features/Categories/providers";
import { HeroSection } from "@/features/landingPage/components";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchIconhidden, setSearchIconhidden] = useState(false);
  console.log(searchIconhidden, "is icon hidden");

  const { categories } = useCategories();
  return (
    <main>
      <ErrorBoundary>
        <Navbar searchIconhidden={searchIconhidden} categories={categories} />
        <HeroSection
          setSearchIconhidden={(visible) => {
            setSearchIconhidden(visible);
          }}
        />
        {children}
      </ErrorBoundary>
    </main>
  );
}
