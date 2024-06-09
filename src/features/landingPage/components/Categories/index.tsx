import { Container } from "@/components";
import React from "react";
import ResponsiveCategories from "./ResponsiveCategories";
import CategoriesCard from "./CategoriesCard";
import { categoriesData } from "@/features/data";

export const Categories = () => {
  return (
    <section className="bg-[#F8F9FA] dark:bg-background-dark">
      <Container className="py-2 md:py-16">
        <div className="items-center justify-between hidden w-full gap-4 lg:flex">
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
