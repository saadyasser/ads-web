import React from "react";
import { Skeleton } from "@/components";

export const PageSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Skeleton className="!w-3/4 h-4 py-2" />
        <Skeleton className="!w-2/4 h-4 py-2" />
      </div>
      <section className="py-2">
        <div className="grid w-full grid-cols-1 py-4 gap-y-4 gap-x-0 md:gap-4 md:grid-cols-4">
          <div className="w-full grid-cols-3 col-span-3 overflow-hidden">
            <div className="flex h-full rounded-lg backface-invisible touch-pan-y touch-pinch-zoom">
              <Skeleton className="h-72 md:h-96" />
            </div>
          </div>

          <div className="flex flex-row items-center justify-center w-full h-full max-md:h-[100px] gap-4 md:grid-cols-1 md:col-span-1 md:flex-col">
            <Skeleton className="!h-full" />
            <Skeleton className="!h-full" />
            <Skeleton className="!h-full" />
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full gap-4 py-2 ">
        <Skeleton className="w-20" />
        <Skeleton className="w-40" />
        <Skeleton className="w-60" />
      </section>
    </>
  );
};

export default PageSkeleton;
