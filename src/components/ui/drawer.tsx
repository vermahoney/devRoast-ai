"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { DialogOverlay, DialogPortal } from "./dialog";

export const Drawer = DialogPrimitive.Root;
export const DrawerTrigger = DialogPrimitive.Trigger;
export const DrawerClose = DialogPrimitive.Close;

const drawerVariants = cva(
  "fixed z-50 gap-4 border-border bg-card p-6 text-foreground shadow-soft-lg outline-none",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b",
        right: "inset-y-0 right-0 h-full w-80 max-w-[calc(100vw-2rem)] border-l",
        bottom: "inset-x-0 bottom-0 border-t",
        left: "inset-y-0 left-0 h-full w-80 max-w-[calc(100vw-2rem)] border-r"
      },
      size: {
        sm: "",
        md: "",
        lg: ""
      }
    },
    defaultVariants: {
      side: "right",
      size: "md"
    }
  }
);

export type DrawerContentProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> &
  VariantProps<typeof drawerVariants> & {
    showClose?: boolean;
  };

export const DrawerContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(({ children, className, showClose = true, side = "right", size, ...props }, ref) => {
  const initial =
    side === "left"
      ? { x: "-100%" }
      : side === "right"
        ? { x: "100%" }
        : side === "top"
          ? { y: "-100%" }
          : { y: "100%" };

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content asChild ref={ref} {...props}>
        <motion.div
          animate={{ x: 0, y: 0 }}
          className={cn(drawerVariants({ side, size }), className)}
          initial={initial}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          {children}
          {showClose ? (
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-md opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <X className="size-4" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          ) : null}
        </motion.div>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});
DrawerContent.displayName = "DrawerContent";

export function DrawerHeader({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("grid gap-1.5 text-left", className)} {...props} />;
}

export function DrawerFooter({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("mt-auto flex flex-col gap-2", className)} {...props} />;
}

export const DrawerTitle = DialogPrimitive.Title;
export const DrawerDescription = DialogPrimitive.Description;
