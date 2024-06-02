"use client";
import Image from "next/image";
import clsx from "clsx";

import { LogoType } from "./Logo.types";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const Logo = ({
  src = "",
  alt = "ADS Logo",
  className,
  width = 164,
  height = 40,
}: LogoType) => {
  const [logoPath, setLogoPath] = useState(src ? src : "/ads_logo.svg");
  const { theme } = useTheme();
  useEffect(() => {
    if (!src)
      setLogoPath(theme === "dark" ? "/ads_logo_dark.svg" : "/ads_logo.svg");
  }, [theme, src]);
  const logoClasses = clsx(" w-auto", className);
  return (
    <div className="flex">
      <Link href="/" className="flex items-center">
        <span className="sr-only">Store Logo</span>
        <Image
          className={logoClasses}
          width={width}
          height={height}
          priority={true}
          src={logoPath}
          alt={alt}
        />
      </Link>
    </div>
  );
};

export default Logo;