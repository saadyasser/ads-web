import React from "react";
import { Divider, ErrorBoundary } from "@/components";
import ProductsSliderSection from "./sections/ProductsSliderSection";

export const DetailedCategoriesSection = () => {
  return (
    <ErrorBoundary>
      <section className="flex flex-col gap-8 py-6 md:py-16 max-xl:px-4">
        <ProductsSliderSection
          category="recent_components"
          sectionHeading="Recent Components"
        />
        <Divider />
        <ProductsSliderSection
          category="mobile_templates"
          sectionHeading="Mobile Templates"
        />
        <Divider />
        <ProductsSliderSection
          category="web_templates"
          sectionHeading="Web Templates"
        />
        <Divider />
        <ProductsSliderSection
          category="design_systems"
          sectionHeading="Design Systems"
        />
        <ProductsSliderSection
          category="color_themes"
          sectionHeading="Color Themes"
        />
      </section>
    </ErrorBoundary>
  );
};

export default DetailedCategoriesSection;
