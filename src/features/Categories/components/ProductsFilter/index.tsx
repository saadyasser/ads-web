import { Button, Card } from "@/components";
import { cn } from "@/utils";
import React from "react";

export const ProductsFilter = ({ className = "" }: { className?: string }) => {
  const containerClassName = cn("", className);
  return (
    <aside className={containerClassName}>
      <Card className="items-start p-4 rounded-2xl gap-4">
        <div>
          <span className="font-medium leading-5">Type:</span>
          <Button className="py-[10px] px-4 rounded-[40px] bg-[#F4F4F4] text-sm">
            All
          </Button>
        </div>
        <div>Filter not ready</div>
      </Card>
    </aside>
  );
};

export default ProductsFilter;
