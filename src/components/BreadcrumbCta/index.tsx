"use client";
import { usePathname } from "next/navigation";
import Button from "../Button";

export const BreadcrumbCta = ({ item }: { item?: string }) => {
  const path = usePathname();
  const urlPattern = /^\/[^\/]+\/[^\/]+$/;
  const isValidPath = urlPattern.test(path);

  return (
    <>
      {isValidPath && (
        <div className="flex items-center w-full gap-2">
          <Button className="w-full" disabled>
            download
          </Button>
          <Button className="w-full" variant="secondary" disabled>
            Live Preview - Figma
          </Button>
        </div>
      )}
    </>
  );
};

export default BreadcrumbCta;
