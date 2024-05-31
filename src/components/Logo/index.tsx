import Image from "next/image";
import clsx from "clsx";

import LightLogoPath from "@/../public/next.svg";
import { LogoType } from "./Logo.types";

export const Logo = ({
  src = LightLogoPath,
  alt = "ADS Logo",
  className,
}: LogoType) => {
  const logoClasses = clsx(" w-auto", className);
  return (
    <div className="flex">
      <a href="#" className="flex items-center">
        <span className="sr-only">Store Logo</span>
        <Image
          className={logoClasses}
          width={164}
          height={40}
          priority={true}
          src={src}
          alt={alt}
        />
      </a>
    </div>
  );
};

export default Logo;
