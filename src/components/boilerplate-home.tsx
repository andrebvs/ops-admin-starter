import React from "react";
import { getHomeContent } from "@/features/home/application/get-home-content";
import { BoilerplateHome as FeatureBoilerplateHome } from "@/features/home/ui/boilerplate-home";
import { getShellNavigation } from "@/features/shell/application/get-shell-navigation";
import { AppShell } from "@/features/shell/ui/app-shell";

export function BoilerplateHome() {
  const content = getHomeContent();

  return (
    <AppShell
      headerTitle="Workspace inicial"
      headerSubtitle="Layout base reutilizavel para o desenvolvimento das proximas features."
      navigation={getShellNavigation()}
    >
      <FeatureBoilerplateHome content={content} />
    </AppShell>
  );
}
