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
      // className="max-lg:mr-4 gap-8 min-w-[233px]"
      navigateTo={navigationPath}
    >
      <div className="flex items-center justify-center lg:h-[200px] 2xl:w-[325px] 2xl:h-[258px]">
        <Image src={imagePath} width={345} height={239} alt={heading} />
      </div>
      <div className="text-center text-black dark:text-white">
        <h3 className="mb-2 text-xl font-bold">{heading}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </Card>
  );
};
export default CardShape;
