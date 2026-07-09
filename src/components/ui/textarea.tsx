import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "flex min-h-24 w-full rounded-md border border-input bg-background text-foreground shadow-inner-soft transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "hover:border-border/80",
        subtle: "bg-foreground/[0.03]",
        ghost: "border-transparent bg-transparent shadow-none"
      },
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-3 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

export type TextareaProps = ComponentPropsWithoutRef<"textarea"> &
  VariantProps<typeof textareaVariants>;

export function Textarea({
  className,
  size,
  variant,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(textareaVariants({ variant, size }), className)}
      {...props}
    />
  );
}
