import { getHomeContent } from "@/features/home/application/get-home-content";
import { BoilerplateHome } from "@/features/home/ui/boilerplate-home";
import { getShellNavigation } from "@/features/shell/application/get-shell-navigation";
import { AppShell } from "@/features/shell/ui/app-shell";

export default function HomePage() {
  return (
    <AppShell
      headerTitle="Workspace inicial"
      headerSubtitle="Layout base reutilizavel para o desenvolvimento das proximas features."
      navigation={getShellNavigation()}
    >
      <BoilerplateHome content={getHomeContent()} />
    </AppShell>
  );
}
