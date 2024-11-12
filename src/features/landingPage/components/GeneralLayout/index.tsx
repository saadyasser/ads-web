// app/layout.tsx or app/(your-layout-folder)/layout.tsx
import { Footer, Navbar } from "@/components";
import React from "react";
import { CategoryType } from "@/types";

// RootLayout component that receives children
export const GeneralLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Fetch the categories data at build time (server-side)
  const response = await fetch("https://api.azaiza.com/api/product/category/", {
    cache: "force-cache", // Ensure it's cached at build time
  });

  const data = await response.json();
  const categories: CategoryType[] = data.data.categories;

  return (
    <div>
      <div className="pt-[85px] md:pt-[89px] xl:pt-[109px] !overflow-y-auto min-h-screen">
        <Navbar categories={categories} className="bg-white" />
        {/* Render children here */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default GeneralLayout;
