"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { BreadCrumbProps } from "./Breadcrumb.types";
import clsx from "clsx";
import { Link } from "../..";
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
  const activeClasses = clsx(
    "font-bold font-gilroy text-lg leading-5 !cursor-auto",
    activeClassName
  );

  return (
    <ul className={containerClasses}>
      <li className={listClassName || ""}>
        <Link className="text-sm !leading-4" href={"/"}>
          {homeElement}
        </Link>
      </li>
      {filteredPaths.length > 0 && separator}
      {filteredPaths.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join("/")}`;
        const isActive = paths === href;

        const isLast = index === filteredPaths.length - 1;

        return (
          <React.Fragment key={index}>
            <li
              className={clsx(
                listClassName,
                { [activeClasses]: isActive },
                !isLast ? "hidden lg:inline-block text-sm leading-4" : ""
              )}
            >
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "!leading-5 " : "text-sm leading-4"}
              >
                {capitalizeLinks ? link : link.toLowerCase()}
              </Link>
            </li>
            <span className={!isLast ? "hidden lg:inline-block" : ""}>
              {filteredPaths.length !== index + 1 && separator}
            </span>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Breadcrumb;
