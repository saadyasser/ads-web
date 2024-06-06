import React from "react";
import {
  Categories,
  HeroSection,
  DetailedCategoriesSection,
  WhatMakesUsDifferent,
} from "./components";

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <DetailedCategoriesSection />
      <WhatMakesUsDifferent />
    </>
  );
};

export default LandingPage;
