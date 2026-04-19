import * as React from "react";
import { cn } from "@/shared/ui/lib/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-xl border border-[hsl(var(--input))] bg-[hsl(var(--card))] px-3 text-sm text-[hsl(var(--foreground))] shadow-[0_1px_2px_rgba(15,23,42,0.04)] outline-none transition-colors",
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

Input.displayName = "Input";
