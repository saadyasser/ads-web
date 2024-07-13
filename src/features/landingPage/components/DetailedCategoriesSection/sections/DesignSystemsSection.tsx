"use client";
import { GridWithSlider } from "@/components";
import { designSystemsData } from "@/features/data";
import { Navigation } from "swiper/modules";

export const DesignSystemsSection = () => {
  {
    /* Here will fetch data from API */
  }
  return (
    <>
      <GridWithSlider
        modules={[Navigation]}
        rewind
        navigation
        gridData={designSystemsData}
        heading={{ label: "Design Systems", value: "design-systems" }}
      />
    </>
  );
};

export default DesignSystemsSection;
