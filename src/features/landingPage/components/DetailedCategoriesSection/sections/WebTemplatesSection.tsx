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
        heading={{ label: "Web Templates", value: "web_mobile-templates" }}
      />
    </>
  );
};

export default WebTemplatesSection;
