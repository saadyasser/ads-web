"use client";
import { useEffect, useRef } from "react";
import Input from "../Input";
import Button from "../Button";
import { SearchIcon } from "../svg";
import Card from "../Card";
import { data } from "autoprefixer";
import Image from "next/image";
interface TargetComponentProps {
  onVisibilityChange: (visible: boolean) => void;
}
interface Product {
  name: string;
  imageUrl: string;
}
const productsList = [
  { name: "Design System Ui Kit", imageUrl: "/images/products/product-1.png" },
  { name: "Design System Ui Kit", imageUrl: "/images/products/product-2.png" },
  { name: "Design System Ui Kit", imageUrl: "/images/products/product-3.png" },
  { name: "Design System Ui Kit", imageUrl: "/images/products/product-1.png" },
  { name: "Design System Ui Kit", imageUrl: "/images/products/product-2.png" },
  { name: "Design System Ui Kit", imageUrl: "/images/products/product-3.png" },
];

export const SearchBar: React.FC<TargetComponentProps> = ({
  onVisibilityChange,
}) => {
  const items = [
    "Design Resources",
    "Design Systems",
    "UI Components",
    "Web Templates",
    "Mobile Templates",
    "Icon Sets",
  ];
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onVisibilityChange(entry.isIntersecting); // Call the prop function when visibility changes
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [onVisibilityChange]);

  return (
    <>
      <div
        className="relative w-2/4 mx-auto bg-white rounded-xl xl:p-4 p-3 border-[1px] border-primary-light-active hover:border-accent-gray focus:border-accent-dark"
        ref={targetRef}
      >
        <div className="flex items-center">
          <Input
            containerClassname="!pb-0"
            className="grow-1 border-0"
            name="search-term"
            id="search-term"
            placeholder="Component, figma, ui, graphic, etc."
          />
          <Button>
            <SearchIcon color="white" />
            <span>Search</span>
          </Button>
        </div>

        {/* <Card className="w-full flex flex-col justify-start  gap-2 h-[372px] absolute top-[calc(100%+12px)]  left-0 border-[1px] border-accent-dark p-3 !pb-0 overflow-hidden">
          {productsList.map((product: Product, index) => (
            <article
              className="w-full flex gap-3 pb-[6px] border-b-[1px] border-accent-gray-light"
              key={index}
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={67}
                height={51}
              />
              <div>
                <h5 className="text-[14px] font-bold leading-4 md:text-base md:leading-5 mb-1 text-accent-dark">
                  {product.name}
                </h5>
                <div className="flex items-center gap-1">
                  <Image
                    className="w-6 h-6"
                    src="/images/profile-img.png"
                    alt={product.name}
                    width={24}
                    height={24}
                  />
                  <p className="text-[12px] font-medium leading-[14px] text-accent-dark">
                    Ahmed Al-Azaiza
                  </p>
                </div>
              </div>
            </article>
          ))}
        </Card> */}
      </div>
      <div className="w-[50%] mx-auto mt-2 flex justify-center gap-2 flex-wrap ">
        {items.map((categoryName: string, key) => (
          <Button className="!bg-accent-dark-hover shrink-0 grow-0 flex-wrap">
            {categoryName}
          </Button>
        ))}
      </div>
    </>
  );
};

export default SearchBar;
