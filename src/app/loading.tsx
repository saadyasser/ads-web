import { Logo } from "@/components";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-fit max-h-fit">
      <div className="animate-pulse">
        <Logo />
      </div>
    </div>
  );
};

export default Loading;
