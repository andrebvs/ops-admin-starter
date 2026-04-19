import type { HomeContent } from "@/features/home/domain/home-content";

export function getHomeContent(): HomeContent {
  return {
    eyebrow: "Boilerplate reutilizavel",
    title: "Base pronta para futuros sistemas administrativos e operacionais.",
    description:
      "Esta aplicacao entrega uma estrutura inicial neutra, organizada por features e pronta para receber fluxos de dominio sem acoplar regras de negocio a componentes React.",
    checklist: [
      {
        id: "app-router",
        title: "Arquitetura por features preparada",
        description:
          "Estrutura base com domain, application, ui e infra para novas features.",
      },
      {
        id: "layout",
        title: "Layout principal reutilizavel",
        description:
          "Shell generico com sidebar, header e area de conteudo principal.",
      },
      {
        id: "tooling",
        title: "Tooling tecnico preservado",
        description:
          "Next.js, Prisma, Vitest, ESLint e TypeScript continuam integrados.",
      },
      {
        id: "scalability",
        title: "Base pronta para expansao",
        description:
          "Ponto de partida para CRUDs, dashboards e fluxos operacionais futuros.",
      },
    ],
  };
}
