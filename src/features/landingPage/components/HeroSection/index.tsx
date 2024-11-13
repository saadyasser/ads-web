"use client";
import { Card, RotatingList, SearchBar } from "@/components";
import { ProductType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// const ButtonGroup = dynamic(() => import("./ButtonGroup"), {
//   loading: () => <Loading />,
// });

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

  // Fetch products from the API with optional searchTerm
  const fetchProducts = async (): Promise<ProductsResponse> => {
    const response = await axios.get<ProductsResponse>(
      `https://api.azaiza.com/api/product/`,
      {
        params: {
          limit: 12,
          ...(searchTerm && { search: searchTerm }), // Conditionally adding search term if it exists
        },
      }
    );
    return response.data; // The response data is of type ProductsResponse
  };

  const { data, error, isLoading } = useQuery<ProductsResponse>(
    ["products", searchTerm], // Include searchTerm in the query key to refetch on search change
    fetchProducts
  );

  const cardRef = useRef<HTMLDivElement | null>(null); // Ref for the card
  const [isCardVisible, setIsCardVisible] = useState(false); // State for card visibility

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsCardVisible(false);
      }
    };

    if (isCardVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCardVisible]);

  return (
    <header className="px-4 2xl:px-0 md:px-10  pb-6 md:pb-10 pt-[109px] md:pt-[113px]  bg-accent-dark bg-[url(/images/hero-bg.png)]">
      <div className="max-w-[754px] mx-auto">
        <RotatingList />
        <SearchBar
          searchKey={searchTerm}
          onSearchKeyChanged={setSearchTerm}
          onVisibilityChange={(visible) =>
            setSearchIconhidden && setSearchIconhidden(!visible)
          }
        >
          {isCardVisible && (
            <Card
              className={`w-full flex flex-col gap-2 ${
                data?.data.products && data?.data.products.length === 0
                  ? "justify-center h-32"
                  : "justify-start max-h-[372px] p-3 !pb-0"
              } absolute top-[calc(100%+12px)] left-0 border-[1px] border-accent-dark overflow-y-auto`}
              ref={cardRef} // Attach ref to the card
            >
              <button
                // onClick={handleDismiss}
                className="absolute top-2 right-2 text-accent-dark"
                aria-label="Close"
              >
                {/* <XIcon className="w-4 h-4" /> */}
              </button>
              {data?.data.products && data?.data.products.length > 0 ? (
                data?.data.products.map((product, index) => (
                  <Link
                    href={`/products/${product.title
                      .toLocaleLowerCase()
                      .replaceAll(" ", "-")}`}
                    className="w-full flex gap-3 pb-[6px] border-b-[1px] border-accent-gray-light"
                    key={product._id}
                  >
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      width={67}
                      height={51}
                    />
                    <div>
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
                <p>No products found</p>
              )}
            </Card>
          )}
        </SearchBar>
      </div>
    </header>
  );
};

export default HeroSection;
