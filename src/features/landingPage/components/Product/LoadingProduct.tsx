import { Card, Skeleton } from "@/components";
import React from "react";

export const LoadingProduct = ({ withRate }: { withRate: boolean }) => {
  return (
    <div className="shrink-0 grow basis-4/5 md:basis-[45%]  xl:basis-[22%] md:rounded-2xl transition-colors duration-150 rounded-2xl">
      <Card className="block rounded-2xl">
        <div className="relative group">
          {/* Product Image Skeleton */}
          <Skeleton className="w-full h-[248px] rounded-xl" />
          {/* Price Skeleton */}
          <Skeleton className="absolute right-2 top-2 h-6 w-16 rounded-full" />
        </div>
        <h6 className="my-2 text-sm font-bold leading-5 md:text-base text-accent-dark">
          <Skeleton className="h-5 w-[70%]" /> {/* Title Skeleton */}
        </h6>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            {/* Publisher Info Skeleton */}
            <Skeleton className="w-6 h-6 rounded-full" /> {/* Avatar */}
            <Skeleton className="h-4 w-24" /> {/* Publisher Name */}
          </div>
          <div className="flex items-center">
            {/* Likes Skeleton */}
            <Skeleton className="h-4 w-8" />
            {withRate && <Skeleton className="h-4 w-12 ml-2" />}{" "}
            {/* Rating Skeleton */}
          </div>
        </div>
      </Card>
    </div>
  );
};
