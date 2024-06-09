"use client";
import { useTheme } from "next-themes";
import { CategoriesCardType } from "../categories.types";
import Image from "next/image";
import { Card } from "@/components";
import { H2, H3 } from "@/components/theme";

export const CategoriesCard = ({
  heading,
  description,
  lightImagePath,
  darkImagePath,
  navigationPath,
}: CategoriesCardType) => {
  const { theme } = useTheme();
  const imagePath = theme === "dark" ? darkImagePath : lightImagePath;
  return (
    <Card
      hoverEffect
      className="gap-2 lg:gap-8 max-lg:min-h-[254px] min-w-[175px] lg:min-w-[233px]"
      navigateTo={navigationPath}
    >
      <div className="py-4 text-center text-black dark:text-white">
        <H3 className="mb-2 font-inter">{heading}</H3>
        <p className="text-xs md:text-sm">{description}</p>
      </div>
      <div className="flex items-center justify-center h-[175px] max-lg:w-[190px] p-2 lg:h-[200px] 2xl:h-[258px]">
        <Image
          src={imagePath}
          width={345}
          height={239}
          alt={heading}
          className="!w-full !h-full rounded-lg"
        />
      </div>
    </Card>
  );
};
export default CategoriesCard;
