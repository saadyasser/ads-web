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
  withBadge = true,
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
  const logoClasses = clsx("w-[125px] h-auto", className);
  const wrapperClasses = clsx(
    "flex",
    wrapperClassName,
    withBadge && "items-center gap-0"
  );
  return (
    <div className={wrapperClasses}>
      <Link
        href="/"
        className="flex-col gap-[7px] justify-start items-start p-0"
      >
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
          <Image
            className="w-auto h-auto"
            width={55.51}
            height={8.66}
            priority
            src="/images/logos/ads_logo_badge.svg"
            alt={
              theme === "dark" ? "ADS Dark Logo Badge" : "ADS Light Logo Badge "
            }
          />
        )}
      </Link>
    </div>
  );
};

export default Logo;
