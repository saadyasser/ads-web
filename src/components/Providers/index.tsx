"use client";

import { childrenType } from "@/types";
import DarkModeProvider from "./DarkModeProvider";
// import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: childrenType;
};

export const Providers = ({ children }: Props) => {
  return (
    <DarkModeProvider>
      {children}
      {/* <ToastContainer /> */}
      <Analytics />
      <SpeedInsights />
    </DarkModeProvider>
  );
};

export default Providers;
