import type { ShellNavigationSection } from "@/features/shell/domain/navigation";

export function getShellNavigation(): ShellNavigationSection[] {
  return [
    {
      title: "Base",
      items: [
        {
          href: "/",
          label: "Inicio",
          description: "Visao geral da estrutura base do boilerplate.",
        },
      ],
    },
    {
      title: "Workspace",
      items: [
        {
          href: "/",
          label: "Features",
          description: "Area preparada para futuras features de dominio.",
        },
      ],
    },
  ];
}
