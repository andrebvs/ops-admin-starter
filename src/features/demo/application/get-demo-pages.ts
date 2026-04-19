import type { DemoPageDefinition } from "@/features/demo/domain/demo-page";

const demoPages: DemoPageDefinition[] = [
  {
    path: "/",
    title: "Dashboard demo",
    subtitle:
      "Visao geral neutra para validar cards, tabela curta, status e hierarquia visual do shell.",
    navLabel: "Dashboard",
    navDescription: "Resumo visual da base administrativa.",
  },
  {
    path: "/list",
    title: "Listagem demo",
    subtitle:
      "Padrao de tabela, filtros visuais, badges de status e navegacao de dados.",
    navLabel: "Listagem",
    navDescription: "Tabela com filtros e estados neutros.",
  },
  {
    path: "/form",
    title: "Formulario demo",
    subtitle:
      "Campos, helper text, acoes e espacamento para fluxos de cadastro e manutencao.",
    navLabel: "Formulario",
    navDescription: "Padrao de formulario administrativo.",
  },
  {
    path: "/detail",
    title: "Detalhe demo",
    subtitle:
      "Cabecalho, secoes de informacao, metadados e bloco lateral para consulta rapida.",
    navLabel: "Detalhe",
    navDescription: "Overview simples com contexto e metadados.",
  },
  {
    path: "/ui-preview",
    title: "UI preview",
    subtitle:
      "Vitrine compacta dos componentes base e estados visuais reutilizaveis.",
    navLabel: "UI Preview",
    navDescription: "Componentes base e estados principais.",
  },
];

export function getDemoPages(): DemoPageDefinition[] {
  return demoPages;
}

export function getDemoPageByPath(path: string): DemoPageDefinition {
  return (
    demoPages.find((page) => page.path === path) ??
    demoPages[0]
  );
}
