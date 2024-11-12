import clsx from "clsx";
import NavLink from "../NavLink";

const navLinks = [
  { title: "Home", path: "/", exact: true },
  { title: "Components", path: "/ui-components" },
  { title: "Mobile Templates", path: "/mobile-templates" },
  { title: "Ready Flows", path: "/ready-flows" },
  { title: "Design systems", path: "/design-systems" },
  { title: "Color-Themes", path: "/color-themes" },
];
export const NavLinks = async ({
  className,
  linkClassName,
  onLinkClick,
}: {
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
}) => {
  const classes = clsx("max-xl:!text-sm  font-medium", className);
  const linkClasses = clsx("w-max", linkClassName);

  let response = await fetch("https://api.azaiza.com/api/product/category/");
  let data = await response.json();
  return (
    <div className={classes}>
      {data.data.categories.map((item) => (
        <NavLink
          href={`/${item.path}`}
          //   exact={item?.exact}
          key={item._id}
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
