"use client";
import { usePathname, useRouter } from "next/navigation";
import Button from "../Button";
import { useProductData } from "@/features/CategoryLayout/ProductProvider";
import Link from "next/link";
import { LockIcon } from "@/lib/@react-icons";

export const BreadcrumbCta = ({ item }: { item?: string }) => {
  const path = usePathname();
  const { push } = useRouter();
  const urlPattern = /^\/[^\/]+\/[^\/]+$/;
  const isValidPath = urlPattern.test(path);
  const { product } = useProductData();

  return (
    <>
      {isValidPath && (
        <div className="flex items-center w-full gap-2">
          {product && (
            <Link
              href={product.price === "0" ? product.productFiles[0] : ""}
              target="_blank"
              className="w-full"
              download={product.price === "0" ? product.title : ""}
            >
              <Button
                className="relative w-full"
                role="link"
                disabled={!product || product.price !== "0"}
              >
                download
                <span>
                  <LockIcon
                    width={20}
                    height={20}
                    className="absolute text-primary-hover dark:text-white right-2 -top-2"
                  />
                </span>
              </Button>
            </Link>
          )}
          <Link
            className="w-full"
            href={product ? `${product.figmaPreview}` : ""}
            download={product ? product.figmaPreview : ""}
          >
            <Button
              className="w-full text-nowrap"
              variant="secondary"
              role="link"
              disabled={!product}
            >
              Live Preview - Figma
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default BreadcrumbCta;
