import React from "react";
import {
  Categories,
  ContactUs,
  DetailedCategoriesSection,
  HeroSection,
  WhatMakesUsDifferent,
} from "./components";
import dynamic from "next/dynamic";
import { Loading } from "@/components";

// const DetailedCategoriesSection = dynamic(
//   () => import("./components/DetailedCategoriesSection"),
//   { loading: () => <Loading />, ssr: false }
// );
// const WhatMakesUsDifferent = dynamic(
//   () => import("./components/WhatMakesUsDifferent"),
//   { loading: () => <Loading />, ssr: false }
// );
// const ContactUs = dynamic(() => import("./components/ContactUs"), {
//   loading: () => <Loading />,
//   ssr: false,
// });
export const LandingPage = () => {
  return (
    <>
      <HeroSection
        setSearchIconhidden={(visible) => {
          console.log(visible);
        }}
      />
      <Categories />
      <DetailedCategoriesSection />
      <WhatMakesUsDifferent />
      <ContactUs />
    </>
  );
};

export default LandingPage;
