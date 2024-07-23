"use client";
import { usePathname } from "next/navigation";
import Button from "../Button";

export const BreadcrumbCta = ({ item }: { item?: string }) => {
  const path = usePathname();
  const urlPattern = /^\/[^\/]+\/[^\/]+$/;
  const isValidPath = urlPattern.test(path);

  return (
    <div>
      {isValidPath && (
        <div className="flex items-center gap-2">
          <Button disabled>download</Button>
          <Button variant="secondary" disabled>
            Live Preview - Figma
          </Button>
        </div>
      )}
    </div>
  );
};

export default BreadcrumbCta;
