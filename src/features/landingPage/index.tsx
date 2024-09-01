import React from "react";
import { Categories, HeroSection } from "./components";
import dynamic from "next/dynamic";
import { Loading } from "@/components";

const DetailedCategoriesSection = dynamic(
  () => import("./components/DetailedCategoriesSection"),
  { loading: () => <Loading />, ssr: true }
);
const WhatMakesUsDifferent = dynamic(
  () => import("./components/WhatMakesUsDifferent"),
  { loading: () => <Loading />, ssr: true }
);
const ContactUs = dynamic(() => import("./components/ContactUs"), {
  loading: () => <Loading />,
  ssr: true,
});
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
