import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonVariants = cva(
  "flex items-center gap-2 justify-center whitespace-nowrap rounded font-medium transition-colors outline-none disabled:pointer-events-none disabled:opacity-50 capitalize disabled:cursor-not-allowed ",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-slate-50 hover:bg-slate-950 disabled:bg-slate-900/50",
        destructive: "bg-red-800 text-red-50 hover:bg-red-800/75 ",
        outline: "",
        secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200 ",
        ghost: "",
        link: "bg-transparent underline",
      },
      size: {
        default: "h-10 px-4 py-2 text-base",
        sm: "h-8 px-3 py-2 text-sm",
        lg: "h-14 px-6 py-4 text-lg",
      },
      width: {
        default: "w-max",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      width: "default",
    },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
  };

export const Button = ({
  className,
  variant,
  size,
  width,
  children,
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, width, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
