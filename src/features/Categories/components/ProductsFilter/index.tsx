import { Button, Card } from "@/components";
import { cn } from "@/utils";
import React from "react";
import { Inter } from "next/font/google";
import { FigmaIcon, SketchIcon, XdIcon } from "@/components/svg";
import { CategoryType } from "@/types";
import Image from "next/image";

const inter = Inter({
  // i'll add it when
  subsets: ["latin"],
  display: "swap",
  weight: ["900", "800", "700", "500", "400", "300"],
});
export const ProductsFilter: React.FC<{ category: CategoryType }> = ({
  category,
}) => {
  return (
    <Card className="items-start p-4 rounded-2xl gap-4">
      <div>
        <span
          className={`font-medium md:leading-4 text-sm lg:text-base lg:leading-5 mb-2 ${inter.className}`}
        >
          Subcategories
        </span>
        <div className="flex gap-2 flex-wrap">
          <Button className="!py-[10px] !px-4 !rounded-[40px] !bg-accent-dark  !text-xs lg:!text-sm ">
            All
          </Button>
          {category.subcategories.map((subcategory) => (
            <Button
              key={subcategory._id}
              className="!py-[10px] !px-4 !rounded-[40px] !bg-[#F4F4F4] !text-black !text-xs lg:!text-sm "
            >
              {subcategory.name}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <span
          className={`font-medium md:leading-4 text-sm lg:text-base lg:leading-5 mb-2 ${inter.className}`}
        >
          Type
        </span>
        <div className="flex gap-2">
          <Button className="!py-[10px] !px-4 !rounded-[40px] !bg-[#F4F4F4] !text-xs lg:!text-sm !text-black">
            All
          </Button>
          <Button className="!py-[10px] !px-4 !rounded-[40px] !bg-accent-dark !text-xs lg:!text-sm ">
            Free
          </Button>
          <Button className="!py-[10px] !px-4 !rounded-[40px] !bg-[#F4F4F4] !text-xs lg:!text-sm !text-black">
            Paid
          </Button>
        </div>
      </div>
      <div>
        <span
          className={`font-medium md:leading-4 text-sm lg:text-base lg:leading-5 ${inter.className}`}
        >
          Format
        </span>
        <div className="flex gap-2 flex-wrap">
          {category.includedFiles.map((file) => (
            <Button
              key={file._id}
              className="!py-[10px] !px-4 !rounded-[40px] !bg-[#F4F4F4] !text-xs lg:!text-sm !text-black "
            >
              <Image
                src={file.icon}
                width={30}
                height={30}
                className="w-auto h-auto"
                alt="File format"
              />
              {file.name}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProductsFilter;
