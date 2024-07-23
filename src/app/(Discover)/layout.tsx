"use client";
import {
  Breadcrumb,
  BreadcrumbCta,
  Container,
  CopyCurrentPathButton,
} from "@/components";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function DiscoverLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    category: string;
    item: string;
  };
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerClasses = clsx(
    "sticky z-20 max-md:px-4 py-4 top-[4.3rem] lg:top-[5.1rem]",
    isScrolled ? "bg-white" : "bg-transparent"
  );
  return (
    <>
      <div className={containerClasses}>
        <Container className="flex items-center justify-between">
          <Breadcrumb homeElement="Home" capitalizeLinks={true} />
          <div className="flex items-center justify-between gap-1">
            <BreadcrumbCta />
            <CopyCurrentPathButton />
          </div>
        </Container>
      </div>
      <Container className="relative py-4 md:py-8 max-md:px-4">
        {children}
      </Container>
    </>
  );
}
