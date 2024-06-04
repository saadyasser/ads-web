import { Container } from "@/components";
import React from "react";
import ResponsiveCategories from "./ResponsiveCategories";
import CategoriesCard from "./CategoriesCard";
import { categoriesData } from "@/features/data";

export const Categories = () => {
  return (
    <section className="bg-[#F8F9FA] dark:bg-background-dark">
      <Container className="py-6 md:py-16">
        <div className="items-center justify-center hidden w-full md:gap-4 sm:gap-8 xl:gap-8 lg:flex">
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
