import { Loader2 } from "lucide-react";
import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const spinnerVariants = cva("animate-spin text-current", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
      xl: "size-8"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export type SpinnerProps = Omit<ComponentPropsWithoutRef<typeof Loader2>, "size"> &
  VariantProps<typeof spinnerVariants>;

export function Spinner({ className, size, ...props }: SpinnerProps) {
  return (
    <Loader2
      aria-hidden="true"
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  );
}
