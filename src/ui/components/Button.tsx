import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "rounded-xl cursor-pointer font-medium focus:ring-Outline focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-offset-Background",
  {
    variants: {
      variant: {
        primary:
          "bg-Surface hover:bg-Surface-Hover text-Primary transition-colors duration-30",
        secondary:
          "bg-Secondary hover:bg-Primary-Hover text-Surface transition-colors duration-300",
        ghost:
          "bg-transparent hover:bg-Secondary text-Tertiary hover:text-Surface transition-colors duration-300",
      },
      size: {
        small: "text-sm px-3 py-2",
        default: "text-sm px-4 py-2.5",
        big: "px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  className,
  variant,
  size,
  ref,
  ...props
}: ButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    ></button>
  );
}
