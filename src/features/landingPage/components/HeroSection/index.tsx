"use client";
import Image from "next/image";
import { Container, Button, H1 } from "@/components";
import { ArrowRight } from "iconsax-react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import AnimatedHero from "./AnimatedHero";

export const HeroSection = () => {
  const { theme } = useTheme();
  const heroImagePath =
    theme === "dark"
      ? "/images/hero_image.svg"
      : "/images/hero_image_light.svg";
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
          <Image
            src={heroImagePath}
            alt="hero image"
            width={616}
            height={616}
            className="w-full h-auto"
            priority
          />
          {/* <AnimatedHero /> */}
          <ButtonGroup className="flex items-center justify-center xl:hidden" />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;

const ImageGroup = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex p-2 -space-x-4 overflow-hidden">
        <Image
          className="inline-block w-8 h-8 rounded-full md:w-10 md:h-10 ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          width={50}
          height={50}
        />
        <Image
          className="inline-block w-8 h-8 rounded-full md:w-10 md:h-10 ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          width={50}
          height={50}
        />
        <Image
          className="inline-block w-8 h-8 rounded-full md:w-10 md:h-10 ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
          width={50}
          height={50}
        />
        <Image
          className="inline-block w-8 h-8 rounded-full md:w-10 md:h-10 ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          width={50}
          height={50}
        />
        <div className="flex items-center justify-center w-8 h-8 font-bold text-center rounded-full md:w-10 md:h-10 ring-2 ring-white bg-primary-light text-primary">
          +2
        </div>
      </div>
      <p className="font-bold">Designers !</p>
    </div>
  );
};

const ButtonGroup = ({ className }: { className?: string }) => {
  const { push } = useRouter();

  const classes = clsx("flex flex-col justify-center my-6", className);
  return (
    <div className={classes}>
      <div className="flex flex-col items-center w-full gap-4 my-6 lg:flex-row md:my-10">
        <Button
          onClick={() => push("/ui-components")}
          className=" w-full max-xl:!text-sm truncate"
          icon={<ArrowRight size="24" />}
        >
          Discover our UI Components
        </Button>
        <Button
          variant="secondary"
          className="w-full max-xl:!text-sm dark:!text-black"
        >
          Full Access for Figma Library!
        </Button>
      </div>
      <ImageGroup />
    </div>
  );
};
