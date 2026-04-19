import type { Metadata } from "next";
import "./globals.css";
import { THEME_STORAGE_KEY } from "@/shared/lib/theme";

export const metadata: Metadata = {
  title: "Boilerplate Base",
  description: "Template neutro para sistemas administrativos e operacionais.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const themeScript = `
(() => {
  const storageKey = "${THEME_STORAGE_KEY}";
  const root = document.documentElement;
  const validThemes = new Set(["light", "dark", "system"]);
  const storedTheme = window.localStorage.getItem(storageKey);
  const mode = validThemes.has(storedTheme) ? storedTheme : "light";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolvedTheme = mode === "system" ? (prefersDark ? "dark" : "light") : mode;
  root.dataset.themeMode = mode;
  root.dataset.theme = resolvedTheme;
  root.style.colorScheme = resolvedTheme;
})();
`;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] antialiased">
        {children}
      </body>
    </html>
  );
}
