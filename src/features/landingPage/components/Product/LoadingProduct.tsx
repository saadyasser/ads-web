import { Card } from "@/components";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const LoadingProduct = ({ withRate }: { withRate: boolean }) => {
  return (
    <div className="shrink-0 grow basis-4/5 md:basis-[45%] xl:basis-[22%] md:rounded-2xl transition-colors duration-150 rounded-2xl">
      <Card className="block rounded-2xl">
        <div className="relative group">
          {/* Product Image Skeleton (Match the image size in Product component) */}
          <Skeleton className="w-full h-[209px] rounded-xl bg-gray-200" />
          {/* Price Skeleton */}
          <Skeleton className="absolute right-2 top-2 h-6 w-16 rounded-full bg-gray-200" />
        </div>
        <h6 className="my-2 text-sm font-bold leading-5 md:text-base text-accent-dark">
          {/* Title Skeleton (Match the same line height and font size) */}
          <Skeleton className="h-5 w-[70%] bg-gray-200" />
        </h6>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            {/* Publisher Info Skeleton (Match avatar and text sizes) */}
            <Skeleton className="w-6 h-6 rounded-full bg-gray-200" />{" "}
            {/* Avatar */}
            <Skeleton className="h-4 w-24 bg-gray-200" /> {/* Publisher Name */}
          </div>
          <div className="flex items-center">
            {/* Likes Skeleton */}
            <Skeleton className="h-4 w-8 bg-gray-200" />
            {withRate && (
              <Skeleton className="h-4 w-12 ml-2 bg-gray-200" />
            )}{" "}
            {/* Rating Skeleton */}
          </div>
        </div>
      </Card>
    </div>
  );
};
