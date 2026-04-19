import React, { type ReactNode } from "react";
import { getDemoPageByPath } from "@/features/demo/application/get-demo-pages";
import { getShellNavigation } from "@/features/shell/application/get-shell-navigation";
import { AppShell } from "@/features/shell/ui/app-shell";

type DemoWorkspaceProps = {
  path: string;
  children: ReactNode;
};

export function DemoWorkspace({ path, children }: DemoWorkspaceProps) {
  const page = getDemoPageByPath(path);

  return (
    <AppShell
      currentPath={path}
      headerTitle={page.title}
      headerSubtitle={page.subtitle}
      navigation={getShellNavigation()}
    >
      {children}
    </AppShell>
  );
}
