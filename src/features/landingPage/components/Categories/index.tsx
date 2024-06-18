import { Container } from "@/components";
import React from "react";
import ResponsiveCategories from "./ResponsiveCategories";
import CategoriesCard from "./CategoriesCard";
import { categoriesData } from "@/features/data";

export const Categories = () => {
  return (
    <section className="bg-[#F8F9FA] dark:bg-background-dark">
      <Container className="py-2 md:py-16">
        <div className="items-center hidden w-full grid-cols-4 gap-4 lg:grid">
          {categoriesData?.map((item) => (
            <CategoriesCard key={item.heading} {...item} />
          ))}
        </div>
        <ResponsiveCategories />
      </Container>
    </section>
  );
};

export default Categories;
