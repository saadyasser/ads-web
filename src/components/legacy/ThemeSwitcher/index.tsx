"use client";
import React from "react";
import Button from "../../Button";
import { Moon, Sun } from "@/lib/@iconsax";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };
  return (
    <Button
      intent="secondary"
      onClick={handleThemeChange}
      name="theme switcher button"
      aria-label="theme switcher button"
      className="!flex items-center justify-center !rounded-full !p-2 !h-fit !shadow-none border-none dark:bg-black-active"
    >
      {theme === "dark" ? (
        <Moon
          size="20"
          className="h-fit text-primary fill-primary dark:text-white dark:fill-white"
          aria-label="moon icon"
        />
      ) : (
        <Sun
          size="20"
          className="h-fit text-primary fill-primary dark:text-white dark:fill-white"
          aria-label="sun icon"
        />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
