"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { BreadCrumbProps } from "./Breadcrumb.types";
import clsx from "clsx";
import { Container, Link } from "../";
import { cleanPath } from "@/utils";

export const Breadcrumb = ({
  homeElement,
  separator = "/",
  capitalizeLinks,
  containerClassName,
  listClassName,
  activeClassName,
}: BreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  const filteredPaths = pathNames.map((path) => cleanPath(path));

  const containerClasses = clsx("flex items-center gap-2", containerClassName);
  const listClasses = clsx("", listClassName);
  const activeClasses = clsx(
    "font-bold font-georgia text-xl lg:text-3xl !cursor-auto",
    activeClassName
  );
  return (
    // <Container>
    <ul className={containerClasses}>
      <li className={listClasses}>
        <Link href={"/"}>{homeElement}</Link>
      </li>
      {filteredPaths.length > 0 && separator}
      {filteredPaths.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join("/")}`;
        const isActive = paths === href;
        const itemClasses = clsx(listClasses, { [activeClasses]: isActive });

        return (
          <React.Fragment key={index}>
            <li className={itemClasses}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className="!leading-normal"
              >
                {capitalizeLinks ? link : link.toLowerCase()}
              </Link>
            </li>
            {filteredPaths.length !== index + 1 && separator}
          </React.Fragment>
        );
      })}
    </ul>
    // </Container>
  );
};

export default Breadcrumb;
