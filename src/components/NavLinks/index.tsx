import clsx from "clsx";
import NavLink from "../NavLink";
import { CategoryType } from "@/types";

// Mark this as an async server component
export const NavLinks = ({
  className,
  linkClassName,
  onLinkClick,
  categories,
}: {
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
  categories: CategoryType[];
}) => {
  // Fetch the data and cache it at build time

  const classes = clsx("max-xl:!text-sm font-medium", className);
  const linkClasses = clsx("w-max", linkClassName);
  return (
    <div className={classes}>
      <NavLink
        href={`/`}
        exact={true}
        className={linkClasses}
        onClick={onLinkClick}
      >
        Home
      </NavLink>
      {categories.map((item: CategoryType) => (
        <NavLink
          key={item._id}
          exact={false}
          href={`/categories/${item.name.replaceAll(" ", "-")}`}
          className={linkClasses}
          onClick={onLinkClick}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
