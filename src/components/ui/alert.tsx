import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";
import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

const alertVariants = cva("relative w-full rounded-lg border p-4", {
  variants: {
    variant: {
      default: "border-border bg-card text-foreground",
      info: "border-primary/30 bg-primary/10 text-foreground",
      success: "border-success/30 bg-success/10 text-foreground",
      warning: "border-warning/30 bg-warning/10 text-foreground",
      danger: "border-danger/30 bg-danger/10 text-foreground"
    },
    size: {
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});

const icons = {
  default: Info,
  info: Info,
  success: CheckCircle2,
  warning: TriangleAlert,
  danger: AlertCircle
};

export type AlertProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof alertVariants> & {
    title?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
  };

export function Alert({
  children,
  className,
  description,
  icon,
  size,
  title,
  variant = "default",
  ...props
}: AlertProps) {
  const Icon = icons[variant ?? "default"];

  return (
    <div
      className={cn(alertVariants({ variant, size }), className)}
      role={variant === "danger" ? "alert" : "status"}
      {...props}
    >
      <div className="flex gap-3">
        <div className="mt-0.5 text-current">{icon ?? <Icon className="size-4" />}</div>
        <div className="min-w-0 space-y-1">
          {title ? <div className="font-medium leading-none">{title}</div> : null}
          {description ? (
            <div className="text-muted-foreground">{description}</div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}
