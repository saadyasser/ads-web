import Image from "next/image";
import clsx from "clsx";

import LightLogoPath from "@/../public/next.svg";
import { LogoType } from "./Logo.types";

export const Logo = ({
  src = LightLogoPath,
  alt = "ADS Logo",
  className,
}: LogoType) => {
  const logoClasses = clsx("h-5 md:h-8 w-auto", className);
  return (
    <div className="flex">
      <a href="#" className="flex items-center">
        <span className="sr-only">Store Logo</span>
        <Image
          className={logoClasses}
          width={196}
          height={47}
          priority={true}
          src={src}
          alt={alt}
        />
      </a>
    </div>
  );
};

export default Logo;
