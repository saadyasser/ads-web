// app/layout.tsx (RootLayout)
import { Footer, Navbar } from "@/components";
import React from "react";
import { CategoryType } from "@/types";
import { CategoriesProvider } from "@/features/Categories/providers";

// RootLayout component that fetches categories and passes them as props to children
const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  // Fetch categories data at build time
  const response = await fetch("https://api.azaiza.com/api/product/category/", {
    cache: "force-cache", // Cache at build time
  });

  const data = await response.json();
  const categories: CategoryType[] = data.data.categories;

  return (
    <CategoriesProvider categories={categories}>
      <div>
        <div>{children}</div>
      </div>
    </CategoriesProvider>
  );
};

export default RootLayout;
