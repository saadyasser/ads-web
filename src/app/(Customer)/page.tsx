import React from "react";
import { Categories, ContactUs, DetailedCategoriesSection, HeroSection, WhatMakesUsDifferent } from "@/features/landingPage/components";
import dynamic from "next/dynamic";
import { Loading } from "@/components";
import CardLoading from "@/features/landingPage/components/Categories/CardLoading";

// const Categories = dynamic(
//   () => import("@/features/landingPage/components/Categories"),
//   {
//     loading: () => (
//       <div className="overflow-hidden">
//         {[1, 2, 3, 4].map((val) => (
//           <CardLoading key={val} />
//         ))}
//       </div>
//     ),
//     ssr: true,
//   }
// );

// const DetailedCategoriesSection = dynamic(
//   () => import("@/features/landingPage/components/DetailedCategoriesSection"),
//   {
//     loading: () => <Loading />,
//     ssr: true,
//   }
// );

// const WhatMakesUsDifferent = dynamic(
//   () => import("@/features/landingPage/components/WhatMakesUsDifferent"),
//   {
//     loading: () => <Loading />,
//     ssr: true,
//   }
// );

// const ContactUs = dynamic(
//   () => import("@/features/landingPage/components/ContactUs"),
//   {
//     loading: () => <Loading />,
//     ssr: true,
//   }
// );

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <Categories />
      
      {/* <DetailedCategoriesSection /> */}
      <WhatMakesUsDifferent />
      <ContactUs />
    </>
  );
}
