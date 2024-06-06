import { Button, Container, Logo } from "@/components";
import { H2 } from "@/components/theme";
import React from "react";
import FeaturesCard from "./FeaturesCard";

export const WhatMakesUsDifferent = () => {
  return (
    <section className="bg-[linear-gradient(97.03deg,_#01112D_0%,_#001C4C_100%)] py-16">
      <Container className="grid items-center grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-15">
        <div className="flex flex-col gap-8 text-white">
          <div className="flex flex-col items-start gap-5 max-lg:items-center">
            <Logo src="/images/logos/ads_logo_without_text.svg" />
            <H2>what makes us different?</H2>
            <p>
              Access a wide variety of pre-designed UI components including
              buttons, forms, icons, and more, streamlining the design process.
            </p>
          </div>
          <Button>Get Started Today!</Button>
        </div>
        <div className="">
          <FeaturesCard />
        </div>
      </Container>
    </section>
  );
};
// background: linear-gradient(97.03deg, #01112D 0%, #001C4C 100%);

export default WhatMakesUsDifferent;
