import { H4 } from "@/components";
import { childrenType } from "@/types";
import Link from "next/link";
import React from "react";

interface AuthFormWrapperProps {
  title: string;
  description: childrenType;
  ctaQuestion?: string;
  ctaLink?: string;
  ctaLinkText?: string;
  children: React.ReactNode;
}

export const AuthFormWrapper = ({
  title,
  description,
  ctaQuestion,
  ctaLink,
  ctaLinkText,
  children,
}: AuthFormWrapperProps) => {
  return (
    <div>
      <H4 className="mb-2 text-xl md:text-2xl md:leading-[30px] lg:leading-[30px] leading-6 tracking-[-1px]">
        {title}
      </H4>
      <p className="text-sm leading-4 mb-4 md:mb-6">{description}</p>
      {children}
      {ctaLink && (
        <p className="text-[#161C2D] text-sm md:text-base font-medium text-center mt-4 md:mt-6">
          {ctaQuestion}{" "}
          <Link className="text-primary" href={ctaLink}>
            {ctaLinkText}
          </Link>
        </p>
      )}
    </div>
  );
};

export default AuthFormWrapper;
