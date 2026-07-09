import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-lg border text-foreground", {
  variants: {
    variant: {
      default: "border-border bg-card shadow-soft",
      subtle: "border-border/70 bg-foreground/[0.03]",
      outline: "border-border bg-transparent",
      elevated: "border-border bg-card shadow-soft-lg"
    },
    size: {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      none: "p-0"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});

export type CardProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof cardVariants>;

export function Card({ className, size, variant, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, size }), className)} {...props} />
  );
}

export function CardHeader({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("flex flex-col space-y-1.5", className)} {...props} />;
}

export function CardTitle({ className, ...props }: ComponentPropsWithoutRef<"h3">) {
  return <h3 className={cn("text-lg font-semibold leading-none", className)} {...props} />;
}

export function CardDescription({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

export function CardContent({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("pt-4", className)} {...props} />;
}

export function CardFooter({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex items-center gap-3 pt-4", className)} {...props} />
  );
}
