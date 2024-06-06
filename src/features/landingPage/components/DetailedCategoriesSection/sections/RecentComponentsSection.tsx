"use client";
import { GridWithSlider } from "@/components";
import { recentComponentsData } from "@/features/data";
import { Navigation, Mousewheel } from "swiper/modules";

export const RecentComponentsSection = () => {
  {
    /* Here will fetch data from API */
  }
  return (
    <>
      <GridWithSlider
        modules={[Navigation]}
        rewind
        navigation
        gridData={recentComponentsData}
        heading="Recent Components"
      />
    </>
  );
};

export default RecentComponentsSection;
