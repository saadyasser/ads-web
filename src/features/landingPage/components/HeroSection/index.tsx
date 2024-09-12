import dynamic from "next/dynamic";

import { Container, H1, Loading } from "@/components";
import HeroImage from "./HeroImage";

const ButtonGroup = dynamic(() => import("./ButtonGroup"), {
  loading: () => <Loading />,
});

export const HeroSection = () => {
  return (
    <Container className="max-xl:px-4">
      <section className="grid items-start w-full grid-cols-1 gap-8 lg:py-6 xl:grid-cols-2">
        <div className="order-1 pt-3 lg:pt-10">
          <H1 className="text-left max-xl:text-center">
            The Ultimate Design Toolkit for Streamlining Your Projects
          </H1>
          <p className="mt-6 max-xl:text-center">
            With our extensive library of pre-built components and resources,
            you can kickstart any project and save thousands of hours of design
            work.
          </p>
          <ButtonGroup className="hidden xl:flex" />
        </div>
        <div className="order-2">
          <HeroImage />
          <ButtonGroup className="flex items-center justify-center xl:hidden" />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
