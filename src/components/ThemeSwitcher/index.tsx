"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
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
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    const hour = new Date().getHours();
    const isNightTime = hour >= 18 || hour < 6;

    if (currentTheme === "dark" || !isNightTime) {
      return <p onClick={() => setTheme("light")}>sun</p>;
    } else {
      return <p onClick={() => setTheme("dark")}>dark</p>;
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
