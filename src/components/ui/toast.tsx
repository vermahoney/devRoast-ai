"use client";

import { Toaster as SonnerToaster, toast } from "sonner";
import type { ComponentPropsWithoutRef } from "react";

export type ToasterProps = ComponentPropsWithoutRef<typeof SonnerToaster>;

export function Toaster(props: ToasterProps) {
  return (
    <SonnerToaster
      closeButton
      richColors
      theme="dark"
      toastOptions={{
        classNames: {
          toast: "border-border bg-card text-foreground",
          description: "text-muted-foreground",
          actionButton: "bg-primary text-primary-foreground",
          cancelButton: "bg-muted text-muted-foreground"
        }
      }}
      {...props}
    />
  );
}

export { toast };
