import { Container } from "@/components";
import React from "react";
import { Categories, HeroSection } from "./components";

export const LandingPage = () => {
  return (
    <Container>
      <HeroSection />
      <Categories />
    </Container>
  );
};

export default LandingPage;
