"use client";
import { H2 } from "@/components";
import { BagIcon, RightArrow } from "@/components/svg";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Product from "../Product";
// import { productsList } from "@/data/products_list";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  category: string;
  price: number;
}

export const TopSelections = ({
  selectBy,
  withRate = false,
  className = "",
}: {
  selectBy: string;
  withRate?: boolean;
  className?: string;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true); // Disable left arrow initially
  const [isAtEnd, setIsAtEnd] = useState(false); // Enable right arrow initially

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const current = scrollContainerRef.current;

    // Initial check
    checkScrollPosition();

    // Add scroll event listener to check scroll position
    if (current) {
      current.addEventListener("scroll", checkScrollPosition);
    }

    return () => {
      if (current) {
        current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
    <section className={className}>
      <H2 className="mb-1 text-accent-dark ">
        Top 8 Selection - <span className="italic font-normal">{selectBy}</span>
      </H2>
      <div className="flex items-center justify-between mb-4 2xl:mb-6">
        <p className="text-xs font-light text-black md:text-sm 2xl:text-base">
          With lots of unique blocks, you can easily build a page without
          coding.
        </p>
        <Link
          href="/test"
          className="md:flex justify-between items-center text-center font-semibold hidden text-[#01C38D] pr-4 md:pr-8 2xl:pr-20"
        >
          <span>Explore Design Systems</span>
          <RightArrow
            fill="#01C38D"
            color="#01C38D"
            style={{ transform: "scale(.7)" }}
          />
        </Link>
      </div>

      {/* Left Arrow */}

      {/* Scrollable section */}
      <div className="relative">
        <div
          className=" flex gap-2 overflow-x-auto md:gap-3 2xl:gap-4 scrollbar-hide"
          ref={scrollContainerRef}
        >
          <button
            onClick={scrollLeft}
            className={`absolute left-[-24px] md:left-[-30px] top-[41%] z-50 transform -translate-y-1/2 scale-50 p-1 md:scale-75 rotate-180 md:p-2  bg-white rounded-full shadow-md ${
              isAtStart ? "opacity-70 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <RightArrow fill="#0e2841" color="#0e2841" />
          </button>
          {/* {productsList.map((product: Product, index) => (
            <Product key={index} product={product} withRate={withRate} />
          ))} */}
          <button
            onClick={scrollRight}
            className={`absolute  right-[-24px] md:right-[-30px] z-10 top-[41%] transform -translate-y-1/2 scale-50 p-1 md:p-2 md:scale-75 bg-white rounded-full shadow-md ${
              isAtEnd ? "opacity-70 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <RightArrow fill="#0e2841" color="#0e2841" />
          </button>
          {/* Right Arrow */}
        </div>
      </div>
      <Link
        href="/test"
        className="flex  items-center  font-semibold visible md:invisible text-[#01C38D] mt-3"
      >
        <span>Explore Design Systems</span>
        <RightArrow fill="#01C38D" color="#01C38D" />
      </Link>
    </section>
  );
};

export default TopSelections;
