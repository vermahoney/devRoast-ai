import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const skeletonVariants = cva("animate-pulse rounded-md bg-muted", {
  variants: {
    variant: {
      default: "",
      text: "h-4 w-full",
      avatar: "rounded-full",
      card: "h-40 w-full"
    },
    size: {
      sm: "",
      md: "",
      lg: ""
    }
  },
  compoundVariants: [
    { variant: "avatar", size: "sm", className: "size-8" },
    { variant: "avatar", size: "md", className: "size-10" },
    { variant: "avatar", size: "lg", className: "size-12" },
    { variant: "text", size: "sm", className: "h-3" },
    { variant: "text", size: "md", className: "h-4" },
    { variant: "text", size: "lg", className: "h-5" }
  ],
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});

export type SkeletonProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof skeletonVariants>;

export function Skeleton({ className, size, variant, ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(skeletonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
