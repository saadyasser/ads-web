"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const savedTheme = localStorage.getItem("theme");
  const { setTheme, systemTheme } = useTheme();

  useEffect(() => {
    const hour = new Date().getHours();
    const isNightTime = hour >= 18 || hour < 6;
    if (savedTheme) setTheme(savedTheme);
    else {
      if (systemTheme === "dark" || isNightTime) {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setTheme("light");
        localStorage.setItem("theme", "light");
      }
    }
  }, [savedTheme, setTheme, systemTheme]);

  return null;
};

export default ThemeSwitcher;
