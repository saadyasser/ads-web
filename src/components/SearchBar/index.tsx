"use client";
import { useEffect, useRef } from "react";
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
      className="text-4xl text-center font-extrabold text-white"
      ref={targetRef}
    >
      Search Bar
    </div>
  );
};

export default SearchBar;
