"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { setTheme, systemTheme } = useTheme();

  useEffect(() => {
    const hour = new Date().getHours();
    const isNightTime = hour >= 18 || hour < 6;
    if (systemTheme === "dark" || isNightTime) setTheme("dark");
    else setTheme("light");
  }, [setTheme, systemTheme]);

  return null;
};

export default ThemeSwitcher;
