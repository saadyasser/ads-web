"use client";
import { useTheme } from "next-themes";
import { CardShapeType } from "./CardShape.types";
import Image from "next/image";
import { Card } from "@/components";

export const CardShape = ({
  heading,
  description,
  lightImagePath,
  darkImagePath,
  navigationPath,
}: CardShapeType) => {
  const { theme } = useTheme();
  const imagePath = theme === "dark" ? darkImagePath : lightImagePath;
  return (
    <Card
      className="!items-start !justify-start gap-4 hover-zoom-effect"
      navigateTo={navigationPath}
      hoverEffect
    >
      {/* <div className="flex items-center justify-center max-lg:h-[150px] max-lg:[157px] lg:h-[200px] rounded-lg !w-full 2xl:h-[241px] relative overflow-hidden"> */}
      <div className="flex items-center justify-center rounded-lg !w-full relative overflow-hidden">
        <Image
          src={imagePath}
          width={334}
          height={241}
          alt={heading}
          className="!w-full !h-full rounded-lg transition-all peer"
        />
      </div>
      <div className="w-full text-black dark:text-white">
        <h3 className="mb-1 text-lg font-bold capitalize truncate ">
          {heading}
        </h3>
        <p className="text-sm truncate">{description}</p>
      </div>
    </Card>
  );
};
export default CardShape;
