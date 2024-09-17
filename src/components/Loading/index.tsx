import React from "react";
import Logo from "../Logo";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-pulse">
        <Logo />
      </div>
    </div>
  );
};

export default Loading;
