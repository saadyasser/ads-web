import React from "react";
import { Divider, ErrorBoundary } from "@/components";
import ProductsSliderSection from "./sections/ProductsSliderSection";
import { listCategories } from "@/lib/actions";
import { CategoryDocument } from "@/types/app-write.types";
import { cleanPath } from "@/utils";

export const DetailedCategoriesSection = async () => {
  const categoriesList = await listCategories();
  console.log(
    "🚀 ~ DetailedCategoriesSection ~ categoriesList:",
    categoriesList
  );
  return (
    <ErrorBoundary>
      <section className="flex flex-col gap-8 py-6 md:py-16 max-xl:px-4">
        {categoriesList.data &&
          categoriesList.data?.map((category: CategoryDocument) => (
            <>
              <ProductsSliderSection
                key={category.$id}
                category={category.name}
                sectionHeading={cleanPath(category.name)}
              />
              <Divider />
            </>
          ))}
        {/* <Divider />
        <ProductsSliderSection
          category="mobile-templates"
          sectionHeading="Mobile Templates"
        />
        <Divider />
        <ProductsSliderSection
          category="web-templates"
          sectionHeading="Web Templates"
        />
        <Divider />
        <ProductsSliderSection
          category="design-systems"
          sectionHeading="Design Systems"
        />
        <ProductsSliderSection
          category="color-themes"
          sectionHeading="Color Themes"
        /> */}
      </section>
    </ErrorBoundary>
  );
};

export default DetailedCategoriesSection;
