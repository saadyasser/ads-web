"use client";
import { useTheme } from "next-themes";
import { CategoriesCardType } from "../categories.types";
import Image from "next/image";

export const CategoriesCard = ({
  heading,
  description,
  lightImagePath,
  darkImagePath,
}: CategoriesCardType) => {
  const { theme } = useTheme();
  const imagePath = theme === "dark" ? darkImagePath : lightImagePath;
  return (
    <div className="flex flex-col justify-center gap-8 px-4 py-6 bg-white border-white rounded-lg dark:bg-black dark:border-black hover:shadow-xl hover:border-b-primary hover:dark:border-b-white border-b-[6px] min-w-[233px] transition-all">
      <div className="text-center text-black dark:text-white">
        <h3 className="mb-2 text-xl font-bold">{heading}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="">
        <Image src={imagePath} width={345} height={368} alt={heading} />
      </div>
    </div>
  );
};
export default CategoriesCard;
