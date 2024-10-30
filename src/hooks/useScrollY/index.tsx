import { useEffect, useState } from "react";

export const useSCrollY = () => {
  const [isScrollY, setIsScrollY] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      setIsScrollY(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { isScrollY };
};

export default useSCrollY;
