import { Container } from "@/components";
import React from "react";
import { CategoriesCardType } from "./categories.types";
import ResponsiveCategories from "./ResponsiveCategories";
import CategoriesCard from "./CategoriesCard";

const categoriesData = [
  {
    heading: "UI Components",
    description: "+2k components ready to use!",
    lightImagePath: "/images/categories/light/ui_components_category.svg",
    darkImagePath: "/images/categories/dark/dark_ui_components_category.svg",
  },
  {
    heading: "Mobile Templates",
    description: "+2k components ready to use!",
    lightImagePath: "/images/categories/light/mobile_templates_category.svg",
    darkImagePath: "/images/categories/dark/dark_mobile_templates_category.svg",
  },
  {
    heading: "Web Components",
    description: "+2k components ready to use!",
    lightImagePath: "/images/categories/light/web_components_category.svg",
    darkImagePath: "/images/categories/dark/dark_web_components_category.svg",
  },
  {
    heading: "Design Systems",
    description: "+2k components ready to use!",
    lightImagePath: "/images/categories/light/design_systems_category.svg",
    darkImagePath: "/images/categories/dark/dark_design_systems_category.svg",
  },
] as CategoriesCardType[];
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
