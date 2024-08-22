import React from "react";
import { Divider, ErrorBoundary } from "@/components";
import ProductsSliderSection from "./sections/ProductsSliderSection";

export const DetailedCategoriesSection = () => {
  return (
    <ErrorBoundary>
      <section className="flex flex-col gap-8 py-6 md:py-16 max-xl:px-4">
        <ProductsSliderSection
          category="recent-components"
          sectionHeading="Recent Components"
        />
        <Divider />
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
        />
      </section>
    </ErrorBoundary>
  );
};

export default DetailedCategoriesSection;
