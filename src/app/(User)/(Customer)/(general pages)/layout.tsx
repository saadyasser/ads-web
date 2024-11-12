// app/layout.tsx (RootLayout)
import { Footer, Navbar } from "@/components";
import React from "react";
import { CategoryType } from "@/types";

// RootLayout component that fetches categories and passes them as props to children
const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  // Fetch categories data at build time
  const response = await fetch("https://api.azaiza.com/api/product/category/", {
    cache: "force-cache", // Cache at build time
  });

  const data = await response.json();
  const categories: CategoryType[] = data.data.categories;

  return (
    <div>
      <div>
        <Navbar categories={categories} className="bg-white" />

        {/* Pass categories as a prop to children */}
        {React.Children.map(children, (child) =>
          React.cloneElement(child as React.ReactElement, {
            categories, // Passing the categories to the child
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
