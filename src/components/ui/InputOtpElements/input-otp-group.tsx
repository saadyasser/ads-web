import { cn } from "@/utils";
import React from "react";

export const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2 mx-auto", className)}
    {...props}
  />
));
InputOTPGroup.displayName = "InputOTPGroup";
