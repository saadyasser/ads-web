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
      <H4 className="mb-2">{title}</H4>
      <p className="mb-6 text-sm">{description}</p>
      {children}
      {ctaLink && (
        <p className="text-[#161C2D] text-center mt-6">
          {ctaQuestion}{" "}
          <Link className=" text-primary" href={ctaLink}>
            {ctaLinkText}
          </Link>
        </p>
      )}
    </div>
  );
};

export default AuthFormWrapper;
