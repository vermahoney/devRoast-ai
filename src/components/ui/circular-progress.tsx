import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const circularProgressVariants = cva("relative inline-grid place-items-center", {
  variants: {
    variant: {
      default: "text-primary",
      success: "text-success",
      warning: "text-warning",
      danger: "text-danger"
    },
    size: {
      sm: "size-10 text-xs",
      md: "size-14 text-sm",
      lg: "size-20 text-base"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});

export type CircularProgressProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof circularProgressVariants> & {
    value: number;
    showValue?: boolean;
  };

export function CircularProgress({
  className,
  showValue = true,
  size,
  value,
  variant,
  ...props
}: CircularProgressProps) {
  const safeValue = Math.max(0, Math.min(100, value));
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (safeValue / 100) * circumference;

  return (
    <div
      aria-label={`${safeValue}% complete`}
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={safeValue}
      className={cn(circularProgressVariants({ variant, size }), className)}
      role="progressbar"
      {...props}
    >
      <svg aria-hidden="true" className="size-full -rotate-90" viewBox="0 0 100 100">
        <circle
          className="stroke-muted"
          cx="50"
          cy="50"
          fill="none"
          r={radius}
          strokeWidth="10"
        />
        <circle
          className="stroke-current transition-[stroke-dashoffset] duration-300 ease-out"
          cx="50"
          cy="50"
          fill="none"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          strokeWidth="10"
        />
      </svg>
      {showValue ? (
        <span className="absolute font-medium text-foreground">{safeValue}%</span>
      ) : null}
    </div>
  );
}
