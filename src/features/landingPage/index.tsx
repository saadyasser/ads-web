import { Container } from "@/components";
import React from "react";
import {
  Categories,
  HeroSection,
  DetailedCategoriesSection,
} from "./components";

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <DetailedCategoriesSection />
    </>
  );
};

export default LandingPage;
