import { Logo } from "@/components";
import React from "react";

const Loading = () => {
  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ height: "calc(100vh - 500px)" }}
    >
      <div className="animate-pulse">
        <Logo />
      </div>
    </div>
  );
};

export default Loading;
