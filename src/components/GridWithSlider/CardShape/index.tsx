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
      className="!items-start !justify-start gap-4 hover-zoom-effect h-[285px] lg:h-[326px] 2xl:h-auto"
      navigateTo={navigationPath}
      hoverEffect
    >
      <div className="flex items-center justify-center h-[150px] lg:h-[200px] rounded-lg !w-full 2xl:h-[241px] relative overflow-hidden">
        <Image
          src={imagePath}
          width={334}
          height={241}
          alt={heading}
          className="!w-full !h-full rounded-lg transition-all peer"
        />
      </div>
      <div className="text-black dark:text-white">
        <h3 className="mb-1 text-lg font-bold capitalize">{heading}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </Card>
  );
};
export default CardShape;
