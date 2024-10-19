import CategoryLayout from "@/features/CategoryLayout";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Discover", template: "Discover %s" },
  description:
    "Explore our collection of handmade UI components, templates, design systems, and color themes. All in one designed Figma Library.",
};

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CategoryLayout>{children}</CategoryLayout>;
}
