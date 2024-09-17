"use client";

import { Skeleton } from "@/components";
import { useTheme } from "next-themes";
import Image from "next/image";

export const HeroImage = () => {
  const { theme } = useTheme();
  const heroImagePath =
    theme === "dark"
      ? "/images/hero_image.webp"
      : "/images/hero_image_light.webp";
  return (
    <Image
      src={heroImagePath}
      alt="hero image"
      width={616}
      height={616}
      className="w-auto h-auto"
      loading="eager"
      quality={80}
      priority
      fetchPriority="high"
      // loader={() => <Skeleton/>}
    />
  );
};

export default HeroImage;
