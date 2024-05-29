"use client";
import { Button } from "@/components/Button";
import { ArrowRightHiIcon, ArrowRightIcon } from "@/lib/@react-icons";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="grid items-start w-full grid-cols-1 gap-8 py-6 lg:grid-cols-2">
      <div className="order-1 pt-6 md:pt-10">
        {/* change it to Heading component */}
        <h1 className="text-3xl font-bold text-left max-lg:text-center lg:text-5xl font-georgia !leading-[54px]">
          The Ultimate Design <br className="max-lg:hidden" /> Toolkit for
          Streamlining <br className="max-lg:hidden" /> Your Projects
        </h1>
        <p className="mt-6 text-lg max-lg:text-center">
          With our extensive library of pre-built components and resources, you
          <br className="max-lg:hidden" />
          can kickstart any project and save thousands of hours of design work.
        </p>
        <div className="flex items-center w-full gap-4 my-10">
          <Button
            className="!font-bold w-full max-lg:!text-sm"
            icon={<ArrowRight size="24" />}
          >
            Discover our UI Components
          </Button>
          <Button variant="secondary" className="w-full">
            Full Access for Figma Library!
          </Button>
        </div>
        <ImageGroup />
      </div>
      <div className="order-2">
        <Image
          src="/images/hero_svg.svg"
          alt="hero image"
          width={616}
          height={616}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;

const ImageGroup = () => {
  return (
    <div className="flex p-2 -space-x-2 overflow-hidden">
      <Image
        className="inline-block w-10 h-10 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
        width={50}
        height={50}
      />
      <Image
        className="inline-block w-10 h-10 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
        width={50}
        height={50}
      />
      <Image
        className="inline-block w-10 h-10 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        alt=""
        width={50}
        height={50}
      />
      <Image
        className="inline-block w-10 h-10 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
        width={50}
        height={50}
      />
    </div>
  );
};
