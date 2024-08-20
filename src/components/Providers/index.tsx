"use client";

import { childrenType } from "@/types";
import DarkModeProvider from "./DarkModeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: childrenType;
};

export const Providers = ({ children }: Props) => {
  return (
    <DarkModeProvider>
      {children}
      <ToastContainer />
    </DarkModeProvider>
  );
};

export default Providers;
