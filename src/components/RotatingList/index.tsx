"use client";
import { useState, useEffect } from "react";
import { H1 } from "../theme";

export const RotatingList = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const items = [
    "UI Components",
    "Icon Sets",
    "Web Templates",
    "Design Systems",
    "Design Resources",
    "Mobile Templates",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="mb-4">
      <p className="text-[13px] text-[#01C38D] leading-4 mb-4 md:mb-6  tracking-[2px] text-center font-bold">
        THE SHORTEST WAY TO
      </p>
      <p className="text-white text-center font-bold text-2xl md:text-3xl xl:text-4xl">
        Find and Share Premium
      </p>
      <div className="relative h-10  md:h-16 leading-none w-full flex flex-col items-center justify-center overflow-hidden mb-6">
        {items.map((item, index) => (
          <H1
            key={index}
            className={`text-secondary  italic md:font-black font-black xl:font-black absolute text-3xl xl:text-5xl md:text-4xl  transition-transform duration-700 ease-in-out
            ${
              visibleIndex === index
                ? "animate-slide-in-from-bottom opacity-100"
                : "animate-slide-out-to-top opacity-0"
            }`}
          >
            {item}
          </H1>
        ))}
      </div>
    </div>
  );
};

export default RotatingList;
