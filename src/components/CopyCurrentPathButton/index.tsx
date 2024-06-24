"use client";
import React, { useState } from "react";
import { Button } from "../";
import { CopyIcon } from "@/lib/@iconsax";
import { CheckIcon } from "@/lib/@react-icons";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const CopyCurrentPathButton = () => {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  const handleCopy = async () => {
    if (!pathname) return;

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <Button
      onClick={handleCopy}
      variant="custom"
      className="bg-background-light dark:bg-background-dark fill-black dark:fill-white !p-4 !border-none hover:bg-black-light transition-all duration-300"
    >
      {!copied ? (
        <CopyIcon
          className={clsx(
            "w-6 h-6",
            copied ? "absolute animate-fade-out" : "static animate-fade-in"
          )}
        />
      ) : (
        <CheckIcon
          className={clsx(
            "w-6 h-6 fill-success",
            copied ? "static animate-fade-in" : "absolute animate-fade-out"
          )}
        />
      )}
    </Button>
  );
};

export default CopyCurrentPathButton;
