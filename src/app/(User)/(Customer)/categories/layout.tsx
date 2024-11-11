"use client";

import {
  Breadcrumb,
  BreadcrumbCta,
  CopyCurrentPathButton,
  ErrorBoundary,
  Navbar,
  SearchBar,
} from "@/components";
import { ProductsFilter } from "@/features/Categories/components";
import React from "react";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="pt-[85px] md:pt-[89px]   xl:pt-[109px] !overflow-y-auto min-h-screen !overflow-auto">
      <Navbar className="bg-white" />
      <main>
        <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:justify-between  md:items-center p-4 md:px-8 xl:px-20 ">
          <Breadcrumb homeElement="Home" capitalizeLinks />
          <SearchBar
            className="w-full md:max-w-[461px] md:mb-0 mx-0 bg-background-light"
            withFilter={true}
            withCategories={false}
            withSearchResults={false}
          />
        </div>
        <div className=" p-4  md:px-8 md:pt-6 xl:px-20 bg-background-light">
          <ErrorBoundary>
            <div className="grid gap-4 grid-cols-1 xl:grid-cols-4 grid-rows-4 overflow-y-hidden">
              <aside className="hidden xl:block xl:col-span-1">
                <ProductsFilter />
              </aside>
              {children}
            </div>
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
