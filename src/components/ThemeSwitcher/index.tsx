"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const hour = new Date().getHours();
    const isNightTime = hour >= 18 || hour < 6;

    if (isNightTime) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    return currentTheme === "dark" ? (
      <p onClick={() => setTheme("light")}>sun</p>
    ) : (
      <p onClick={() => setTheme("dark")}>moon</p>
    );
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
