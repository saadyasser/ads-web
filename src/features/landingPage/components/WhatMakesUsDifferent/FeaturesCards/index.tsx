"use client";
import { Card, Container } from "@/components";
import { H2, H3 } from "@/components/theme";
import { FEATURES_DATA } from "@/features/data/features_data";
import dynamic from "next/dynamic";
import { createElement } from "react";

const Slider = dynamic(() => import("@/components/Slider"));
export const FeaturesCards = () => {
  return (
    <>
      <ul
        role="list"
        className="hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 md:grid-rows-2"
      >
        {FEATURES_DATA.map((feature) => (
          <li className="list-none" key={feature.id} role="listitem">
            <Card
              hoverEffect
              className="flex flex-col col-span-1 p-6 text-center text-white rounded-lg !bg-[#011943] dark:!bg-primary-hover h-full hover:border-b-white"
            >
              <div className="flex flex-col items-start justify-start flex-1 gap-2 text-left">
                <div className="flex items-center justify-center p-3 rounded-full bg-[#01112D] dark:bg-primary w-fit">
                  {createElement(feature?.icon)}
                </div>
                <H3 className="font-gilroy">{feature.heading}</H3>
                <p>{feature.description}</p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
      <div className="flex md:hidden">
        <Container>
          <Slider
            slides={FEATURES_DATA}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              390: {
                slidesPerView: 1,
              },
            }}
            className=""
            slideShape={(feature) => (
              <Card
                hoverEffect
                className="flex flex-col justify-center col-span-1 p-6 text-center text-white rounded-lg !bg-[#011943] dark:!bg-primary-hover h-full hover:border-b-white min-h-[330px] "
              >
                <div className="flex flex-col items-start gap-4 text-left">
                  <div className="flex items-center justify-center p-3 rounded-full bg-[#01112D] dark:bg-primary w-fit">
                    {createElement(feature?.icon)}
                  </div>
                  <H3 className="font-gilroy">{feature.heading}</H3>
                  <p>{feature.description}</p>
                </div>
              </Card>
            )}
          />
        </Container>
      </div>
    </>
  );
};
export default FeaturesCards;
