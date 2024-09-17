import { Container, Loading } from "@/components";
import React from "react";

import { categoriesData } from "@/features/data";
import dynamic from "next/dynamic";
import CategoriesCard from "./CategoriesCard";

const ResponsiveCategories = dynamic(() => import("./ResponsiveCategories"), {
  loading: () => <Loading />,
});

export const Categories = () => {
  return (
    <section className="bg-[#F8F9FA] dark:bg-background-dark">
      <Container className="py-2 md:py-16 max-xl:px-4">
        <div className="items-center hidden w-full grid-cols-4 gap-4 lg:grid">
          {categoriesData?.map((item, index) => (
            <CategoriesCard key={item.heading || index} {...item} />
          ))}
        </div>
        <ResponsiveCategories />
      </Container>
    </section>
  );
};

export default Categories;
