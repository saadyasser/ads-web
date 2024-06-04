import { GridWithSlider } from "@/components";
import { recentComponentsData } from "@/features/data";
import React from "react";

export const RecentComponents = () => {
  {
    /* Here will fetch data from API */
  }
  return (
    <>
      <GridWithSlider
        gridData={recentComponentsData}
        heading="Recent Components"
      />
    </>
  );
};

export default RecentComponents;
