import { cn } from "@/utils/cn";
import { ComponentPropsWithRef } from "react";

type LabelProps = ComponentPropsWithRef<"label">;
export const Label = ({ children, className, ...props }: LabelProps) => (
  <label
    className={cn("text-sm font-semibold text-slate-700", className)}
    {...props}
  >
    {children}
  </label>
);
