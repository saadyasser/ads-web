"use client";
import { GridWithSlider } from "@/components";
import { colorThemesData } from "@/features/data";
import { Navigation } from "swiper/modules";

export const ColorThemesSection = () => {
  {
    /* Here will fetch data from API */
  }
  return (
    <>
      <GridWithSlider
        modules={[Navigation]}
        rewind
        navigation
        gridData={colorThemesData}
        heading={{ label: "Color Themes", value: "color-themes" }}
      />
    </>
  );
};

export default ColorThemesSection;
