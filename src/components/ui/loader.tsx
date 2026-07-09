import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";

const loaderVariants = cva("flex items-center text-muted-foreground", {
  variants: {
    variant: {
      inline: "gap-2",
      block: "min-h-32 flex-col justify-center gap-3",
      screen: "min-h-dvh flex-col justify-center gap-4"
    },
    size: {
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base"
    }
  },
  defaultVariants: {
    variant: "inline",
    size: "md"
  }
});

export type LoaderProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof loaderVariants> & {
    label?: ReactNode;
  };

export function Loader({
  className,
  label = "Loading",
  size,
  variant,
  ...props
}: LoaderProps) {
  return (
    <div
      aria-live="polite"
      aria-busy="true"
      className={cn(loaderVariants({ variant, size }), className)}
      role="status"
      {...props}
    >
      <Spinner size={size === "lg" ? "lg" : "md"} />
      {label ? <span>{label}</span> : <span className="sr-only">Loading</span>}
    </div>
  );
}
