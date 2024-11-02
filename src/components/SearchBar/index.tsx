"use client";
import { useEffect, useRef } from "react";
import Input from "../Input";
import Button from "../Button";
import { SearchIcon } from "../svg";
interface TargetComponentProps {
  onVisibilityChange: (visible: boolean) => void;
}

export const SearchBar: React.FC<TargetComponentProps> = ({
  onVisibilityChange,
}) => {
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
    <div
      className=" w-2/4 mx-auto bg-white rounded-xl xl:p-4 p-3 border-[1px] border-primary-light-active hover:border-accent-gray focus:border-accent-dark"
      ref={targetRef}
    >
      <div className="flex items-center">
        <Input
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
    </div>
  );
};

export default SearchBar;
