"use client";
import { Button, Container, Logo } from "@/components";
import { H2 } from "@/components/theme";
import React, { useEffect, useState } from "react";
import FeaturesCards from "./FeaturesCards";
import { useTheme } from "next-themes";
import clsx from "clsx";

export const WhatMakesUsDifferent = () => {
  const { theme } = useTheme();

  const sectionClasses = clsx(
    "bg-[linear-gradient(97.03deg,_#01112D_0%,_#001C4C_100%)] dark:bg-what-makes-us-different py-16",
    theme === "dark" && " dark:bg-no-repeat bg-origin-content bg-[#655CFE]"
  );
  return (
    <section className={sectionClasses}>
      <Container className="grid items-center grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-15">
        <div className="flex flex-col gap-8 text-white">
          <div className="flex flex-col items-start gap-5 max-lg:items-center">
            {theme === "dark" ? (
              <Logo src="/images/logos/ads_logo_without_text_dark.svg" />
            ) : (
              <Logo src="/images/logos/ads_logo_without_text.svg" />
            )}
            <H2>what makes us different?</H2>
            <p className="max-lg:text-center">
              Access a wide variety of pre-designed UI components including
              buttons, forms, icons, and more, streamlining the design process.
            </p>
          </div>
          {theme === "dark" ? (
            <Button variant="secondary">Get Started Today!</Button>
          ) : (
            <Button>Get Started Today!</Button>
          )}
        </div>
        <div className="">
          <FeaturesCards />
        </div>
      </Container>
    </section>
  );
};

export default WhatMakesUsDifferent;
