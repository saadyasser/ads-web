"use client";
import { H2 } from "@/components";
import { BagIcon, RightArrow } from "@/components/svg";
import Link from "next/link";
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Product from "../Product";
import { CategoryType, ProductType } from "@/types";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import isEqual from "lodash/isEqual"; // Import lodash for deep comparison

interface ProductsResponse {
  data: { totalCount: number; products: ProductType[] };
  message: string;
  status: string;
  statusCode: number;
}

const TopSelectionsComponent = ({
  category,
  withRate = false,
  className = "",
}: {
  category?: CategoryType;
  withRate?: boolean;
  className?: string;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true); // Disable left arrow initially
  const [isAtEnd, setIsAtEnd] = useState(false); // Enable right arrow initially

  // Memoize the scroll position check function to avoid re-creating on every render
  const checkScrollPosition = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  }, []);

  // Memoize scrollLeft function
  const scrollLeft = useCallback(() => {
    if (scrollContainerRef.current) {
      const { offsetWidth } = scrollContainerRef.current;
      scrollContainerRef.current.scrollBy({
        left: -offsetWidth,
        behavior: "smooth",
      });
    }
  }, []);

  // Memoize scrollRight function
  const scrollRight = useCallback(() => {
    if (scrollContainerRef.current) {
      const { offsetWidth } = scrollContainerRef.current;

      scrollContainerRef.current.scrollBy({
        left: offsetWidth,
        behavior: "smooth",
      });
    }
  }, []);

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
  }, [checkScrollPosition]);

  // Memoize fetchProducts function to avoid re-creation
  const fetchProducts = useCallback(async (): Promise<ProductsResponse> => {
    const response = await axios.get<ProductsResponse>(
      `https://api.azaiza.com/api/product/`,
      {
        params: {
          limit: 12,
          ...(category && { category: [category._id] }), // Conditionally add category
        },
      }
    );
    return response.data; // The response data is of type ProductsResponse
  }, [category]);

  // Use React Query to fetch the products
  const { data, error, isLoading } = useQuery<ProductsResponse>(
    ["products", category?._id], // Include category in the query key to refetch when it changes
    fetchProducts
  );

  // Memoize month and year value
  const dateInfo = useMemo(() => {
    const date = new Date();
    const monthName = date.toLocaleString("en-US", { month: "long" });
    return { monthName, year: date.getFullYear() };
  }, []);

  return (
    <section className={className}>
      <H2 className="mb-1 text-accent-dark ">
        Top 8 Selection -{" "}
        <span className="italic font-normal">
          {category ? category.name : `${dateInfo.monthName} ${dateInfo.year}`}
        </span>
      </H2>
      <div className="flex items-center justify-between mb-4 2xl:mb-6">
        <p className="text-xs font-light text-black md:text-sm 2xl:text-base">
          With lots of unique blocks, you can easily build a page without
          coding.
        </p>
        <Link
          href="/test"
          className="md:flex justify-between items-center text-center font-semibold hidden text-[#01C38D] "
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
      <div className="relative">
        <div
          className="flex gap-2 overflow-x-auto md:gap-3 2xl:gap-4 scrollbar-hide"
          ref={scrollContainerRef}
        >
          <button
            onClick={scrollLeft}
            className={`hidden xl:block absolute left-[-24px] md:left-[-30px] top-[41%] z-50 transform -translate-y-1/2 scale-50 p-1 md:scale-75 rotate-180 md:p-2  bg-white rounded-full shadow-md ${
              isAtStart ? "opacity-70 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <RightArrow fill="#0e2841" color="#0e2841" />
          </button>
          {data?.data.products &&
            data?.data.products.map((product, index) => (
              <Product key={index} product={product} withRate={withRate} />
            ))}
          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className={`hidden xl:block absolute  right-[-24px] md:right-[-30px] z-10 top-[41%] transform -translate-y-1/2 scale-50 p-1 md:p-2 md:scale-75 bg-white rounded-full shadow-md ${
              isAtEnd ? "opacity-70 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <RightArrow fill="#0e2841" color="#0e2841" />
          </button>
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

// Custom comparison function for deep comparison of props
const arePropsEqual = (prevProps: any, nextProps: any) => {
  return isEqual(prevProps, nextProps); // Use lodash's isEqual to perform deep comparison
};

export const TopSelections = React.memo(TopSelectionsComponent, arePropsEqual);

export default TopSelections;
