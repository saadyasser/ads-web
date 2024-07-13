"use client";
import { GridWithSlider } from "@/components";
import { mobileTemplatesData } from "@/features/data";
import { Navigation } from "swiper/modules";

export const MobileTemplatesSection = () => {
  {
    /* Here will fetch data from API */
  }
  return (
    <>
      <GridWithSlider
        modules={[Navigation]}
        rewind
        navigation
        gridData={mobileTemplatesData}
        heading={{ label: "Mobile Templates", value: "web_mobile-templates" }}
      />
    </>
  );
};

export default MobileTemplatesSection;
