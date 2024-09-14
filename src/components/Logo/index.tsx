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
  wrapperClassName = "",
  withBadge = false,
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
    } else setLogoPath(src);
  }, [theme, src]);
  const logoClasses = clsx("w-[92px] h-[22px] lg:h-auto lg:w-auto", className);
  const wrapperClasses = clsx(
    "flex",
    wrapperClassName,
    withBadge && "items-center gap-0"
  );
  return (
    <div className={wrapperClasses}>
      <Link href="/" className="!gap-0">
        <span className="sr-only">ADS Logo</span>
        <Image
          className={logoClasses}
          width={width}
          height={height}
          priority
          src={logoPath}
          alt={theme === "dark" ? "ADS Dark Logo" : "ADS Light Logo"}
        />
        {withBadge && (
          <span className="flex items-center justify-center px-3 py-1 mx-2 text-xs font-medium rounded-full lg:px-4 bg-primary-light-hover text-primary-dark h-max dark:bg-[#0F0F0E] dark:text-white">
            1.0 v
          </span>
        )}
      </Link>
    </div>
  );
};

export default Logo;
