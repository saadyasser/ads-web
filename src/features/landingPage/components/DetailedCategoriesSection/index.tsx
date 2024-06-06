import React from "react";
import {
  RecentComponentsSection,
  MobileTemplatesSection,
  WebTemplatesSection,
  DesignSystemsSection,
  ColorThemesSection,
} from "./sections";
import { Divider } from "@/components";

export const DetailedCategoriesSection = () => {
  return (
    <section className="flex flex-col gap-8 py-6 md:py-16">
      <RecentComponentsSection />
      <Divider />
      <MobileTemplatesSection />
      <Divider />
      <WebTemplatesSection />
      <Divider />
      <DesignSystemsSection />
      <Divider />
      <ColorThemesSection />
    </section>
  );
};

export default DetailedCategoriesSection;
