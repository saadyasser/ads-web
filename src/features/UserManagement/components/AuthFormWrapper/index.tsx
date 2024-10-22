import { H3 } from "@/components";
import Link from "next/link";
import React from "react";

interface AuthFormWrapperProps {
  title: string;
  description: string;
  ctaQuestion?: string;
  ctaLink?: string;
  ctaLinkText?: string;
  children: React.ReactNode;
}

const AuthFormWrapper = ({
  title,
  description,
  ctaQuestion,
  ctaLink,
  ctaLinkText,
  children,
}: AuthFormWrapperProps) => {
  return (
    <div>
      <H3 className="text-md">{title}</H3>
      <p>{description}</p>
      {children}
      {ctaLink && (
        <div>
          <p>{ctaQuestion}</p>
          <Link href={ctaLink}>{ctaLinkText}</Link>
        </div>
      )}
    </div>
  );
};

export default AuthFormWrapper;
