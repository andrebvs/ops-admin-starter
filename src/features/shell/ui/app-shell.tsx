import React, { type ReactNode } from "react";
import type { ShellNavigationSection } from "@/features/shell/domain/navigation";
import { AppHeader } from "@/features/shell/ui/app-header";
import { AppSidebar } from "@/features/shell/ui/app-sidebar";
import { cn } from "@/shared/ui/lib/cn";

type AppShellProps = {
  children: ReactNode;
  currentPath?: string;
  headerTitle: string;
  headerSubtitle: string;
  navigation: ShellNavigationSection[];
};

export function AppShell({
  children,
  currentPath,
  headerTitle,
  headerSubtitle,
  navigation,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl gap-5 px-4 py-4 lg:grid-cols-[272px_minmax(0,1fr)] lg:px-6 lg:py-6">
        <AppSidebar currentPath={currentPath} navigation={navigation} />
        <div className="flex min-w-0 flex-col gap-5">
          <AppHeader title={headerTitle} subtitle={headerSubtitle} />
          <main
            className={cn(
              "min-w-0 rounded-[1.75rem] border border-[hsl(var(--border))] bg-[color-mix(in_srgb,hsl(var(--card))_86%,transparent)] p-4 shadow-[0_1px_2px_rgba(15,23,42,0.03)] backdrop-blur sm:p-5 lg:p-6",
            )}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
