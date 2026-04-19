import * as React from "react";
import { cn } from "@/shared/ui/lib/cn";

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-24 w-full rounded-xl border border-[hsl(var(--input))] bg-[hsl(var(--card))] px-3 py-2.5 text-sm text-[hsl(var(--foreground))] shadow-[0_1px_2px_rgba(15,23,42,0.04)] outline-none transition-colors",
          "placeholder:text-[hsl(var(--muted-foreground))]",
          "hover:border-[hsl(var(--border-strong))]",
          "focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]",
          "disabled:cursor-not-allowed disabled:bg-[hsl(var(--muted))] disabled:text-[hsl(var(--muted-foreground))]",
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
