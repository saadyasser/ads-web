import { Card } from "@/components";
import { StackedLayersIcon } from "@/components/svg";
import { H3 } from "@/components/theme";
import { Description } from "@headlessui/react";
import { cloneElement } from "react";

const features = [
  {
    id: 1,
    heading: "Extensive Component Selection",
    description:
      "Access a wide variety of pre-designed UI components including buttons, forms, icons, and more, streamlining the design process.",
    icon: <StackedLayersIcon />,
  },
  {
    id: 2,
    heading: "Extensive Component Selection",
    description:
      "Access a wide variety of pre-designed UI components including buttons, forms, icons, and more, streamlining the design process.",
    icon: <StackedLayersIcon />,
  },
  {
    id: 3,
    heading: "Extensive Component Selection",
    description:
      "Access a wide variety of pre-designed UI components including buttons, forms, icons, and more, streamlining the design process.",
    icon: <StackedLayersIcon />,
  },
  {
    id: 4,
    heading: "Extensive Component Selection",
    description:
      "Access a wide variety of pre-designed UI components including buttons, forms, icons, and more, streamlining the design process.",
    icon: <StackedLayersIcon />,
  },
];

export const FeaturesCard = () => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2"
    >
      {features.map((feature) => (
        <Card
          key={feature.id}
          hoverEffect
          className="flex flex-col col-span-1 p-6 text-center text-white rounded-lg !bg-[#011943] dark:!bg-primary-hover hover:border-b-white"
        >
          <div className="flex flex-col items-start justify-start flex-1 gap-2 text-left">
            <div className="flex items-center justify-center p-3 rounded-full bg-[#01112D] dark:bg-primary w-fit">
              {feature?.icon}
            </div>
            <H3 className="font-inter">{feature.heading}</H3>
            <p>{feature.description}</p>
          </div>
        </Card>
      ))}
    </ul>
  );
};
export default FeaturesCard;
