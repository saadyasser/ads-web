"use client";
import { useTheme } from "next-themes";
import { CategoriesCardType } from "../categories.types";
import Image from "next/image";
import { Card } from "@/components";

export const CategoriesCard = ({
  heading,
  description,
  lightImagePath,
  darkImagePath,
}: CategoriesCardType) => {
  const { theme } = useTheme();
  const imagePath = theme === "dark" ? darkImagePath : lightImagePath;
  return (
    <Card hoverEffect className="max-lg:mr-4 gap-8 min-w-[233px] ">
      <div className="text-center text-black dark:text-white">
        <h3 className="mb-2 text-xl font-bold">{heading}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex items-center justify-center lg:h-[200px] 2xl:w-[325px] 2xl:h-[258px]">
        <Image src={imagePath} width={345} height={350} alt={heading} />
      </div>
    </Card>
  );
};
export default CategoriesCard;
