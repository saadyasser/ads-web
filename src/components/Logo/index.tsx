"use client";
import Image from "next/image";
import clsx from "clsx";

import { LogoType } from "./Logo.types";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Link } from "../";

export const Logo = ({
  src = "",
  alt = "ADS Logo",
  className,
  width = 164,
  height = 40,
}: LogoType) => {
  const [logoPath, setLogoPath] = useState(src || "/images/logos/ads_logo.svg");
  const { theme } = useTheme();
  useEffect(() => {
    if (!src) {
      setLogoPath(() =>
        theme === "dark"
          ? "/images/logos/ads_logo_dark.svg"
          : "/images/logos/ads_logo.svg"
      );
    }
  }, [theme, src]);
  const logoClasses = clsx("w-auto", className);
  return (
    <div className="flex">
      <Link href="/">
        <span className="sr-only">ADS Logo</span>
        <Image
          className={logoClasses}
          width={width}
          height={height}
          priority
          src={logoPath}
          alt={alt}
        />
      </Link>
    </div>
  );
};

export default Logo;
