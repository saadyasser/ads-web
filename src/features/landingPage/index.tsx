import React from "react";
import {
  Categories,
  HeroSection,
  DetailedCategoriesSection,
  WhatMakesUsDifferent,
  ContactUs,
} from "./components";

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <DetailedCategoriesSection />
      <WhatMakesUsDifferent />
      <ContactUs />
    </>
  );
};

export default LandingPage;
