import * as React from "react";
import { cn } from "@/shared/ui/lib/cn";

type BadgeVariant = "default" | "muted" | "success" | "outline";

const badgeVariants: Record<BadgeVariant, string> = {
  default:
    "border border-[hsl(var(--accent-border))] bg-[hsl(var(--accent-soft))] text-[hsl(var(--accent-foreground))]",
  muted:
    "border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]",
  success:
    "border border-[hsl(var(--success-border))] bg-[hsl(var(--success-soft))] text-[hsl(var(--success-foreground))]",
  outline:
    "border border-[hsl(var(--border))] bg-transparent text-[hsl(var(--foreground))]",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
