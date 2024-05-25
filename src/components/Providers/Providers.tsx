"use client";

import DarkModeProvider from "./DarkModeProvider";

type Props = {
  children: string | React.JSX.Element | React.JSX.Element[] | React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return <DarkModeProvider>{children}</DarkModeProvider>;
};

export default Providers;
