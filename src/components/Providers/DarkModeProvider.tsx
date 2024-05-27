"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

type Props = {
  children: string | React.JSX.Element | React.JSX.Element[] | React.ReactNode;
};

export const DarkModeProvider = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider enableColorScheme attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default DarkModeProvider;
