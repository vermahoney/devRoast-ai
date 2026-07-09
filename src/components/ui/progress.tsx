"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const progressVariants = cva("relative overflow-hidden rounded-full bg-muted", {
  variants: {
    variant: {
      default: "[&>div]:bg-primary",
      success: "[&>div]:bg-success",
      warning: "[&>div]:bg-warning",
      danger: "[&>div]:bg-danger"
    },
    size: {
      sm: "h-1.5",
      md: "h-2",
      lg: "h-3"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});

export type ProgressProps = React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> &
  VariantProps<typeof progressVariants>;

export function Progress({
  className,
  size,
  value = 0,
  variant,
  ...props
}: ProgressProps) {
  const safeValue = Math.max(0, Math.min(100, value ?? 0));

  return (
    <ProgressPrimitive.Root
      className={cn(progressVariants({ variant, size }), className)}
      value={safeValue}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${100 - safeValue}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
