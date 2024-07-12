import React from "react";

export const Skeleton: React.FC = () => {
  return (
    <div className="w-full h-full bg-gray-300 rounded-lg animate-pulse"></div>
  );
};

export default Skeleton;
