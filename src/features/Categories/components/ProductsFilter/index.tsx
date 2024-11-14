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

interface ProdcuctsFilterProps {
  category: CategoryType;
  selectedSubCategory: string[];
  onSelectedSubCategoryChange: (selected: string[]) => void;
  selectedType: "free" | "paid" | "all";
  onSelectedTypeChange: (selected: "free" | "paid" | "all") => void;
  selectedFileFormat: string[];
  onSelectedFileFormatChange: (selected: string[]) => void;
}
export const ProductsFilter: React.FC<ProdcuctsFilterProps> = ({
  category,
  selectedSubCategory,
  onSelectedSubCategoryChange,
  selectedType,
  onSelectedTypeChange,
  selectedFileFormat,
  onSelectedFileFormatChange,
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
          {/* "All" Button */}
          <Button
            onClick={() => {
              // When "All" is clicked, reset selectedSubCategory to just "all"
              !selectedSubCategory.includes("all") &&
                onSelectedSubCategoryChange(["all"]);
            }}
            className={`!py-[10px] !px-4 !rounded-[40px] ${
              selectedSubCategory.includes("all")
                ? "!bg-accent-dark"
                : "!bg-[#F4F4F4] !text-black"
            }   !text-xs lg:!text-sm `}
          >
            All
          </Button>

          {/* Subcategories */}
          {category.subcategories.map((subcategory) => {
            const isSelected = selectedSubCategory.includes(subcategory._id);

            return (
              <Button
                key={subcategory._id}
                onClick={() => {
                  if (isSelected) {
                    // Remove subcategory if already selected
                    const updatedSelected = selectedSubCategory.filter(
                      (id) => id !== subcategory._id
                    );
                    onSelectedSubCategoryChange(updatedSelected);
                  } else {
                    // Add subcategory if not selected and remove "all"
                    const updatedSelected = selectedSubCategory.includes("all")
                      ? [subcategory._id]
                      : [...selectedSubCategory, subcategory._id];

                    onSelectedSubCategoryChange(updatedSelected);
                  }
                }}
                className={`!py-[10px] !px-4 !rounded-[40px] ${
                  isSelected ? "!bg-accent-dark" : "!bg-[#F4F4F4] !text-black"
                }  !text-xs lg:!text-sm`}
              >
                {subcategory.name}
              </Button>
            );
          })}
        </div>
      </div>

      {/* The rest of your filter options remain unchanged */}

      <div>
        <span
          className={`font-medium md:leading-4 text-sm lg:text-base lg:leading-5 mb-2 ${inter.className}`}
        >
          Type
        </span>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              selectedType !== "all" && onSelectedTypeChange("all");
            }}
            className={`!py-[10px] !px-4 !rounded-[40px] ${
              selectedType === "all"
                ? "!bg-accent-dark"
                : "!bg-[#F4F4F4] !text-black"
            }  !text-xs lg:!text-sm `}
          >
            All
          </Button>
          <Button
            onClick={() => {
              selectedType !== "free" && onSelectedTypeChange("free");
            }}
            className={`!py-[10px] !px-4 !rounded-[40px] ${
              selectedType === "free"
                ? "!bg-accent-dark"
                : "!bg-[#F4F4F4] !text-black"
            }  !text-xs lg:!text-sm `}
          >
            Free
          </Button>
          <Button
            onClick={() => {
              selectedType !== "paid" && onSelectedTypeChange("paid");
            }}
            className={`!py-[10px] !px-4 !rounded-[40px] ${
              selectedType === "paid"
                ? "!bg-accent-dark"
                : "!bg-[#F4F4F4] !text-black"
            }  !text-xs lg:!text-sm `}
          >
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
          <Button
            onClick={() => {
              // When "All" is clicked, reset selectedSubCategory to just "all"
              !selectedFileFormat.includes("all") &&
                onSelectedFileFormatChange(["all"]);
            }}
            className={`!py-[10px] !px-4 !rounded-[40px] ${
              selectedFileFormat.includes("all")
                ? "!bg-accent-dark"
                : "!bg-[#F4F4F4] !text-black"
            }   !text-xs lg:!text-sm `}
          >
            All
          </Button>
          {category.includedFiles.map((file) => {
            const isSelected = selectedFileFormat.includes(file._id);

            return (
              <Button
                key={file._id}
                onClick={() => {
                  if (isSelected) {
                    // Remove subcategory if already selected
                    const updatedSelected = selectedFileFormat.filter(
                      (id) => id !== file._id
                    );
                    onSelectedSubCategoryChange(updatedSelected);
                  } else {
                    // Add subcategory if not selected and remove "all"
                    const updatedSelected = selectedSubCategory.includes("all")
                      ? [file._id]
                      : [...selectedSubCategory, file._id];

                    onSelectedSubCategoryChange(updatedSelected);
                  }
                }}
                className={`!py-[10px] !px-4 !rounded-[40px] ${
                  selectedType === file._id
                    ? "!bg-accent-dark"
                    : "!bg-[#F4F4F4] !text-black"
                } !text-xs lg:!text-sm`}
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
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default ProductsFilter;
