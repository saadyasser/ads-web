"use client";
import { Container } from "@/components";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { CategoriesCardType } from "./categories.types";

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
        <div className="flex items-center w-full gap-8">
          {categoriesData?.map((item) => (
            <CategoriesCard key={item.heading} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;

const CategoriesCard = ({
  heading,
  description,
  lightImagePath,
  darkImagePath,
}: CategoriesCardType) => {
  const { theme } = useTheme();
  const imagePath = theme === "dark" ? darkImagePath : lightImagePath;
  return (
    <div className="flex flex-col justify-center gap-8 px-4 py-6 bg-white border-white rounded-lg dark:bg-black dark:border-black hover:shadow-xl hover:border-b-primary hover:dark:border-b-white border-b-[6px]">
      <div className="text-center text-black dark:text-white">
        <h3 className="mb-2 text-xl font-bold">{heading}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="">
        <Image src={imagePath} width={345} height={368} alt={heading} />
      </div>
    </div>
  );
};
