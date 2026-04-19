import { getDemoPages } from "@/features/demo/application/get-demo-pages";
import type { ShellNavigationSection } from "@/features/shell/domain/navigation";

export function getShellNavigation(): ShellNavigationSection[] {
  return [
    {
      title: "Demonstracao",
      items: getDemoPages().map((page) => ({
        href: page.path,
        label: page.navLabel,
        description: page.navDescription,
      })),
    },
  ];
}
