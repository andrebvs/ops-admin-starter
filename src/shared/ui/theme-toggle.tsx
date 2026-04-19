"use client";

import * as React from "react";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/ui/lib/cn";
import {
  THEME_OPTIONS,
  type ThemeMode,
  applyTheme,
  getStoredTheme,
  persistTheme,
} from "@/shared/lib/theme";

const labels: Record<ThemeMode, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<ThemeMode>("light");

  React.useEffect(() => {
    const storedTheme = getStoredTheme();
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  React.useEffect(() => {
    if (theme !== "system" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme("system");

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  function handleThemeChange(nextTheme: ThemeMode) {
    setTheme(nextTheme);
    persistTheme(nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <div
      aria-label="Theme toggle"
      className="inline-flex items-center gap-1 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-1"
      role="group"
    >
      {THEME_OPTIONS.map((option) => (
        <Button
          key={option}
          aria-pressed={theme === option}
          className={cn(
            "h-8 rounded-xl px-3 text-xs shadow-none",
            theme !== option &&
              "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]",
          )}
          onClick={() => handleThemeChange(option)}
          variant={theme === option ? "primary" : "ghost"}
        >
          {labels[option]}
        </Button>
      ))}
    </div>
  );
}
