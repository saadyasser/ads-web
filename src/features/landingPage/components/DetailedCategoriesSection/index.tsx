import React from "react";
import { RecentComponentsSection, MobileTemplatesSection } from "./sections";

export const DetailedCategoriesSection = () => {
  return (
    <section className="flex flex-col gap-16 py-6 md:py-16">
      <RecentComponentsSection />
      <MobileTemplatesSection />
    </section>
  );
};

export default DetailedCategoriesSection;
