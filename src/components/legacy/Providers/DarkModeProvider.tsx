"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { useState, useEffect, memo } from "react";

type Props = {
  children: string | React.JSX.Element | React.JSX.Element[] | React.ReactNode;
};

export const DarkModeProvider = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Only runs on the client
    const storedTheme = localStorage.getItem("theme");
    const hour = new Date().getHours();
    const isNightTime = hour >= 18 || hour < 6;

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const defaultTheme = isNightTime ? "dark" : "light";
      setTheme(defaultTheme);
      localStorage.setItem("theme", defaultTheme);
    }

    setMounted(true);
  }, [setTheme]);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  if (!mounted) {
    return null; // or a loading indicator, if you prefer
  }

  return (
    <ThemeProvider enableColorScheme attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default memo(DarkModeProvider);
