import React from "react";
import {
  Categories,
  ContactUs,
  DetailedCategoriesSection,
  HeroSection,
  WhatMakesUsDifferent,
} from "@/features/landingPage/components";
// import dynamic from "next/dynamic";
import { Button, Container, Loading } from "@/components";
import CardLoading from "@/features/landingPage/components/Categories/CardLoading";
import { ChevronLeft } from "@/lib/@iconsax";

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
      <Container className="flex w-full gap-2">
        <Button intent="primary">test</Button>
        <Button intent="primaryLight">test</Button>
        <Button intent="secondary">test</Button>
        <Button intent="secondaryLight">test</Button>
        <Button intent="danger">test</Button>
        <Button intent="dangerLight">test</Button>
        <Button intent="alert">test</Button>
        <Button intent="alertLight">test</Button>
        <Button intent="success">test</Button>
        <Button intent="successLight">test</Button>
        <Button intent="primary" icon={<ChevronLeft />} iconPosition="before">
          test
        </Button>
        <Button
          intent="primaryLight"
          icon={<ChevronLeft />}
          iconPosition="after"
        >
          test
        </Button>
      </Container>
      {/* <DetailedCategoriesSection /> */}
      <WhatMakesUsDifferent />
      <ContactUs />
    </>
  );
}
