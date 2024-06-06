"use client";
import { GridWithSlider } from "@/components";
import { webTemplatesData } from "@/features/data";
import { Navigation } from "swiper/modules";

export const WebTemplatesSection = () => {
  {
    /* Here will fetch data from API */
  }
  return (
    <>
      <GridWithSlider
        modules={[Navigation]}
        rewind
        navigation
        gridData={webTemplatesData}
        heading="Web Templates"
      />
    </>
  );
};

export default WebTemplatesSection;
