"use client";
import { Card, RotatingList, SearchBar } from "@/components";
import { ProductType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useDebounce from "@/hooks/useDebounce"; // Import your debounce hook

export const HeroSection = ({
  setSearchIconhidden,
}: {
  setSearchIconhidden?: (visible: boolean) => void;
}) => {
  interface ProductsResponse {
    data: { totalCount: number; products: ProductType[] };
    message: string;
    status: string;
    statusCode: number;
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [isCardVisible, setIsCardVisible] = useState(false); // State for card visibility

  // Use the debounce hook to delay the search term update
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // Debounce by 500ms

  // Fetch products from the API with debounced searchTerm
  const fetchProducts = async (): Promise<ProductsResponse> => {
    const response = await axios.get<ProductsResponse>(
      `https://api.azaiza.com/api/product/`,
      {
        params: {
          limit: 12,
          ...(debouncedSearchTerm && { search: debouncedSearchTerm }), // Use debounced search term
        },
      }
    );
    return response.data; // The response data is of type ProductsResponse
  };

  const { data, error, isLoading } = useQuery<ProductsResponse>(
    ["products", debouncedSearchTerm], // Include debounced searchTerm in the query key to refetch on search change
    fetchProducts,
    {
      onSuccess: () => {
        setIsCardVisible(true);
      },
      onError: () => {
        setIsCardVisible(true);
      },
    }
  );

  const cardRef = useRef<HTMLDivElement | null>(null); // Ref for the card

  // Handle clicks outside the card
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsCardVisible(false); // Hide the card when clicked outside
        setSearchIconhidden && setSearchIconhidden(true); // Hide search icon when card is hidden
      }
    };

    if (isCardVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCardVisible, setSearchIconhidden]);

  console.log(isCardVisible, searchTerm, "isCardVisible");

  return (
    <header className="px-4 2xl:px-0 md:px-10  pb-6 md:pb-10 pt-[109px] md:pt-[113px]  bg-accent-dark bg-[url(/images/hero-bg.png)]">
      <div className="max-w-[754px] mx-auto">
        <RotatingList />
        <SearchBar
          className="relative"
          searchKey={searchTerm}
          onSearchKeyChanged={setSearchTerm}
          onVisibilityChange={(visible) => {
            setSearchIconhidden && setSearchIconhidden(!visible);
          }}
        >
          {isCardVisible &&
            searchTerm && ( // Conditionally render card based on visibility
              <Card
                className={` w-full flex flex-col ${
                  data?.data.products && data?.data.products.length === 0
                    ? "justify-center h-32"
                    : "justify-start max-h-[372px] p-0  !pb-0"
                } absolute top-[calc(100%+12px)] left-0 border-[1px] border-accent-dark overflow-y-auto`}
                ref={cardRef} // Attach ref to the card
              >
                {data?.data.products && data?.data.products.length > 0 ? (
                  data?.data.products.map((product, index) => (
                    <Link
                      href={`/products/${product.title
                        .toLocaleLowerCase()
                        .replaceAll(" ", "-")}`}
                      className={`w-full flex pb-[6px] p-3 
                    gap-x-3
                border-b-[1px] border-accent-gray-light hover:bg-accent-gray-light transition-all duration-300 ease-in-out`}
                      key={product._id}
                    >
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={67}
                        height={51}
                        className="w-[61px] h-[46px] md:w-67 md:w-51 rounded"
                      />
                      <div>
                        {" "}
                        <h5 className="text-[14px] font-bold leading-4 md:text-base md:leading-5 mb-1 text-accent-dark">
                          {product.title}
                        </h5>
                        <div className="flex items-center gap-1">
                          <Image
                            className="w-6 h-6"
                            src="/images/profile-img.png"
                            alt={product.title}
                            width={24}
                            height={24}
                          />
                          <p className="text-[12px] font-medium leading-[14px] text-accent-dark">
                            {product.publisher.displayName}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="py-8">No products found</p>
                )}
              </Card>
            )}
        </SearchBar>
      </div>
    </header>
  );
};

export default HeroSection;
