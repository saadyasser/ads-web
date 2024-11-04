"use client";
import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { SearchIcon } from "../svg";
import Card from "../Card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface TargetComponentProps {
  onVisibilityChange: (visible: boolean) => void;
}

interface Product {
  name: string;
  imageUrl: string;
  category: string;
}

interface FormValues {
  searchTerm: string;
}

const productsList: Product[] = [
  {
    name: "Design System Ui Kit",
    category: "UI Components",
    imageUrl: "/images/products/product-1.png",
  },
  {
    name: "Design System Ui Kit",
    category: "UI Components",
    imageUrl: "/images/products/product-1.png",
  },
  {
    name: "Design System Ui Kit",
    category: "UI Components",
    imageUrl: "/images/products/product-1.png",
  },
  {
    name: "Design System Ui Kit",
    category: "UI Components",
    imageUrl: "/images/products/product-1.png",
  },
  {
    name: "Design System Ui Kit",
    category: "UI Components",
    imageUrl: "/images/products/product-1.png",
  },
  {
    name: "Design System Ui Kit",
    category: "UI Components",
    imageUrl: "/images/products/product-1.png",
  },
  {
    name: "Design System Ui Kit",
    category: "UI Components",
    imageUrl: "/images/products/product-1.png",
  },
  {
    name: "Design System Ui Kit",
    category: "UI Components",
    imageUrl: "/images/products/product-1.png",
  },
  {
    name: "Design System Ui Kit",
    category: "UI Components",
    imageUrl: "/images/products/product-1.png",
  },
  {
    name: "Design System Ui Kit",
    category: "UI Components",
    imageUrl: "/images/products/product-1.png",
  },
  {
    name: "Design System Ui Kit",
    category: "UI Components",
    imageUrl: "/images/products/product-1.png",
  },
  {
    name: "Figma Icon Set",
    category: "Icon Sets",
    imageUrl: "/images/products/product-2.png",
  },
  {
    name: "Mobile App UI",
    category: "Mobile Templates",
    imageUrl: "/images/products/product-3.png",
  },
  {
    name: "Web Template",
    category: "Web Templates",
    imageUrl: "/images/products/product-1.png",
  },
];

export const SearchBar: React.FC<TargetComponentProps> = ({
  onVisibilityChange,
}) => {
  const {
    register,
    setValue,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [lastSearchTerm, setLastSearchTerm] = useState<string | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const searchTerm = watch("searchTerm");

  // Observe visibility change for the target element
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onVisibilityChange(entry.isIntersecting);
      },
      { threshold: 0.1 }
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

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  // Filter products based on the search term and selected category
  useEffect(() => {
    const results = productsList.filter((product) => {
      const matchesSearchTerm = searchTerm
        ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;

      return matchesSearchTerm && matchesCategory;
    });

    setFilteredProducts(results);
  }, [searchTerm, selectedCategory]);

  const router = useRouter();

  return (
    <>
      <div
        className="relative mb-4 md:mb-6 mx-auto bg-white rounded-xl 2xl:p-4 p-3 border-[1px] border-primary-light-active hover:border-accent-gray focus:border-accent-dark"
        ref={targetRef}
      >
        <div className="flex flex-col items-center">
          <div className="flex w-full items-center">
            <Input
              containerClassname="!pb-0"
              className="pl-0 grow-1 border-0"
              id="search-term"
              placeholder="Component, figma, ui, graphic, etc."
              {...register("searchTerm", {
                required: "Please enter a search term.",
                onChange: (e) => {
                  setValue("searchTerm", e.target.value);
                  clearErrors("searchTerm");
                },
              })}
            />
            <Button
              type="button"
              disabled={!searchTerm}
              onClick={() => {
                searchTerm && router.push("/products?searchTerm=" + searchTerm);
              }}
            >
              <SearchIcon color="white" />
              <span>Search</span>
            </Button>
          </div>
        </div>

        {/* Display filtered products */}
        {searchTerm && (
          <Card
            className={`w-full flex flex-col gap-2 ${
              filteredProducts.length === 0
                ? "justify-center h-32"
                : "justify-start max-h-[372px] p-3 !pb-0"
            } absolute top-[calc(100%+12px)] left-0 border-[1px] border-accent-dark overflow-y-auto`}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <Link
                  href={`/products/${product.name
                    .toLocaleLowerCase()
                    .replaceAll(" ", "-")}}`}
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
                </Link>
              ))
            ) : (
              <p>No products found</p>
            )}
          </Card>
        )}
      </div>

      {/* Category buttons */}
      <div className="mx-auto mt-2 flex justify-center shrink lg:shrink-0 md:gap-2 gap-1 flex-wrap">
        {[
          "Icon Sets",
          "UI Components",
          "Web Templates",
          "Design Resources",
          "Design Systems",
          "Mobile Templates",
        ].map((categoryName, key) => (
          <Button
            key={key}
            className={`!bg-accent-dark hover:!bg-accent-dark-hover shrink-0 grow-0 flex-wrap px-2`}
          >
            {categoryName}
          </Button>
        ))}
      </div>
    </>
  );
};

export default SearchBar;
