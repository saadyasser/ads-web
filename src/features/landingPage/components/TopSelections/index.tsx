"use client";
import { H2 } from "@/components";
import { productsList } from "@/components/SearchBar/data";
import { RightArrow } from "@/components/svg";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Product from "../Product";

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
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
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
          <RightArrow fill="#01C38D" color="#01C38D" />
        </Link>
      </div>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className={`absolute left-0 top-0 bottom-0 z-10 flex items-center justify-center px-4 bg-white shadow-md ${
            isAtStart ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isAtStart}
        >
          ←
        </button>

        {/* Scrollable section */}
        <div
          className="flex gap-2 overflow-x-auto md:gap-3 2xl:gap-4 scrollbar-hide"
          ref={scrollContainerRef}
        >
          {productsList.map((product: Product, index) => (
            <Product key={index} product={product} withRate={withRate} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className={`absolute right-0 top-0 bottom-0 z-10 flex items-center justify-center px-4 bg-white shadow-md ${
            isAtEnd ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isAtEnd}
        >
          →
        </button>
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
