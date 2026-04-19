import * as React from "react";
import { cn } from "@/shared/ui/lib/cn";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "flex h-10 w-full appearance-none rounded-xl border border-[hsl(var(--input))] bg-[hsl(var(--card))] px-3 pr-10 text-sm text-[hsl(var(--foreground))] shadow-[0_1px_2px_rgba(15,23,42,0.04)] outline-none transition-colors",
            "hover:border-[hsl(var(--border-strong))]",
            "focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]",
            "disabled:cursor-not-allowed disabled:bg-[hsl(var(--muted))] disabled:text-[hsl(var(--muted-foreground))]",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[hsl(var(--muted-foreground))]"
        >
          ▾
        </span>
      </div>
    );
  },
);

Select.displayName = "Select";
