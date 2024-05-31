"use client";

import { childrenType } from "@/types";
import DarkModeProvider from "./DarkModeProvider";

type Props = {
  children: childrenType;
};

export const Providers = ({ children }: Props) => {
  return <DarkModeProvider>{children}</DarkModeProvider>;
};

export default Providers;
