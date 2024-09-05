"use client";
import {
  Breadcrumb,
  BreadcrumbCta,
  Container,
  CopyCurrentPathButton,
} from "@/components";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
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
    "sticky z-30 max-md:px-4 py-4 top-[4.3rem] 2xl:top-[5.1rem]",
    isScrolled ? "bg-white dark:bg-background-dark" : "bg-transparent"
  );
  return (
    <>
      <div className={containerClasses}>
        <Container className="flex items-center justify-between">
          <Breadcrumb homeElement="Home" capitalizeLinks />
          <div className="flex items-center justify-between gap-1">
            <div className="hidden xl:flex">
              <BreadcrumbCta />
            </div>
            <CopyCurrentPathButton />
          </div>
        </Container>
      </div>
      <Container className="relative py-4 md:py-8 max-md:px-4">
        {children}
      </Container>
      <div className="fixed bottom-0 right-0 flex w-full p-5 text-black dark:text-white dark:bg-background-dark bg-background-light xl:hidden">
        <BreadcrumbCta />
      </div>
    </>
  );
}
