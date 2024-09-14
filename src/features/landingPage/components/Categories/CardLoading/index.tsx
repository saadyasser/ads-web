import React from "react";

export const CardLoading = () => {
  return (
    <div className="animate-pulse gap-0 max-lg:h-[254px] min-w-[175px] lg:min-w-[233px] justify-around bg-gray-200 dark:bg-gray-700 rounded-lg">
      <div className="py-1 text-center lg:py-4">
        <div className="w-3/4 h-6 mx-auto mb-2 bg-gray-300 rounded-md dark:bg-gray-600"></div>
        <div className="w-1/2 h-4 mx-auto mt-2 bg-gray-300 rounded-md dark:bg-gray-600"></div>
      </div>
      <div className="flex items-center justify-center max-lg:h-[155px] p-2">
        <div className="w-full h-full bg-gray-300 rounded-lg dark:bg-gray-600"></div>
      </div>
    </div>
  );
};

export default CardLoading;
