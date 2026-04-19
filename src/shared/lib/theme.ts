export const THEME_STORAGE_KEY = "ops-admin-starter-theme";

export const THEME_OPTIONS = ["light", "dark", "system"] as const;

export type ThemeMode = (typeof THEME_OPTIONS)[number];

export function isThemeMode(value: string | null | undefined): value is ThemeMode {
  return THEME_OPTIONS.includes(value as ThemeMode);
}

export function resolveTheme(mode: ThemeMode, prefersDark: boolean): "light" | "dark" {
  if (mode === "system") {
    return prefersDark ? "dark" : "light";
  }

  return mode;
}

export function getSystemPrefersDark() {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function applyTheme(mode: ThemeMode) {
  if (typeof document === "undefined") {
    return;
  }

  const resolvedTheme = resolveTheme(mode, getSystemPrefersDark());
  const root = document.documentElement;

  root.dataset.themeMode = mode;
  root.dataset.theme = resolvedTheme;
  root.style.colorScheme = resolvedTheme;
}

export function getStoredTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  return isThemeMode(storedTheme) ? storedTheme : "light";
}

export function persistTheme(mode: ThemeMode) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(THEME_STORAGE_KEY, mode);
}
