"use client";
import React, { createContext, useContext } from "react";
import { CategoryType } from "@/types";

// Define the type for the context value
interface CategoriesContextProps {
  categories: CategoryType[] | null;
}

// Create the context
const CategoriesContext = createContext<CategoriesContextProps | undefined>(
  undefined
);

// Create a provider component
export const CategoriesProvider: React.FC<{
  categories: CategoryType[];
  children: React.ReactNode;
}> = ({ categories, children }) => {
  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

// Custom hook to use the CategoriesContext
export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
};
