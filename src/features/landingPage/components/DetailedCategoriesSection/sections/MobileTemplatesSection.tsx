"use client";
import { GridWithSlider } from "@/components";
import { mobileTemplatesData } from "@/features/data";
import { Navigation, Mousewheel } from "swiper/modules";

export const MobileTemplatesSection = () => {
  {
    /* Here will fetch data from API */
  }
  return (
    <>
      <GridWithSlider
        modules={[Navigation, Mousewheel]}
        rewind
        navigation
        mousewheel
        gridData={mobileTemplatesData}
        heading="Mobile Templates"
      />
    </>
  );
};

export default MobileTemplatesSection;
