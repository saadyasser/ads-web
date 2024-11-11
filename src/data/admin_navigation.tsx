import { CategoryIcon, DashboardIcon, ProductIcon } from "@/lib/@react-icons";

export const adminNavigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: <DashboardIcon className="w-6 h-6" />,
    current: true,
  },
  {
    name: "Create Product",
    href: "/admin/create/product",
    icon: <ProductIcon className="w-6 h-6" />,
  },
  {
    name: "Create Category",
    href: "/admin/create/category",
    icon: <CategoryIcon className="w-6 h-6" />,
  },
];
