import { Button, H4 } from "@/components";
import { childrenType } from "@/types";
import { SuccessIcon } from "@/components/svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface AuthFormWrapperProps {
  title: string;
  description: childrenType;
  ctaQuestion?: string;
  ctaLink?: string;
  ctaLinkText?: string;
  children?: React.ReactNode;
  isSuccess?: boolean;
}

export const AuthFormWrapper = ({
  title,
  description,
  ctaQuestion,
  ctaLink,
  ctaLinkText,
  isSuccess = false,
  children,
}: AuthFormWrapperProps) => {
  const router = useRouter();
  return (
    <div>
      {isSuccess && <SuccessIcon className="mx-auto mb-4 md:mb-6" />}
      <H4
        className={`mb-2 text-xl md:text-2xl md:leading-[30px] lg:leading-[30px] leading-6 tracking-[-1px] ${
          isSuccess && "text-center"
        }`}
      >
        {title}
      </H4>
      <p
        className={`text-sm leading-4 mb-4 md:mb-6 lg:mb-4 2xl:mb-6 ${
          isSuccess && "text-center"
        }`}
      >
        {description}
      </p>
      {children}
      {isSuccess && ctaLink && (
        <Button
          className="w-full"
          onClick={() => {
            router.push(ctaLink);
          }}
        >
          {ctaLinkText}
        </Button>
      )}
      {ctaLink && !isSuccess && (
        <p className="text-[#161C2D] text-sm md:text-base font-medium text-center mt-4 md:mt-6 lg:mt-4 2xl:mt-6 !leading-[18px]">
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
