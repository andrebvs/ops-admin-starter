export function getDashboardStats() {
  return [
    {
      label: "Registros monitorados",
      value: "1.284",
      note: "Base de exemplo consolidada",
    },
    {
      label: "Filas ativas",
      value: "08",
      note: "Operacoes em acompanhamento",
    },
    {
      label: "Pendencias internas",
      value: "24",
      note: "Itens aguardando decisao",
    },
    {
      label: "SLA medio",
      value: "2h 14m",
      note: "Tempo medio ficticio de resposta",
    },
  ];
}

export function getRecentItems() {
  return [
    {
      name: "Lote documental",
      area: "Documentos",
      status: "Ativo",
      updatedAt: "Hoje, 09:12",
    },
    {
      name: "Fila de aprovacao",
      area: "Administrativo",
      status: "Em analise",
      updatedAt: "Hoje, 08:40",
    },
    {
      name: "Conferencia operacional",
      area: "Operacional",
      status: "Rascunho",
      updatedAt: "Ontem, 17:25",
    },
  ];
}

export function getActivityFeed() {
  return [
    {
      title: "Atualizacao de item",
      description: "Um registro foi movido para acompanhamento.",
      time: "Ha 12 min",
    },
    {
      title: "Revisao concluida",
      description: "Uma validacao interna foi marcada como concluida.",
      time: "Ha 35 min",
    },
    {
      title: "Triagem iniciada",
      description: "Uma fila ficticia entrou em processo de avaliacao.",
      time: "Ha 1h",
    },
  ];
}

export function getListRows() {
  return [
    {
      id: "REG-001",
      name: "Registro base",
      category: "Administrativo",
      owner: "Equipe interna",
      status: "Ativo",
      updatedAt: "Hoje",
    },
    {
      id: "REG-002",
      name: "Painel auxiliar",
      category: "Operacional",
      owner: "Operacoes",
      status: "Em analise",
      updatedAt: "Hoje",
    },
    {
      id: "REG-003",
      name: "Indice documental",
      category: "Documental",
      owner: "Backoffice",
      status: "Rascunho",
      updatedAt: "Ontem",
    },
    {
      id: "REG-004",
      name: "Fila prioritaria",
      category: "Operacional",
      owner: "Supervisao",
      status: "Ativo",
      updatedAt: "Ontem",
    },
    {
      id: "REG-005",
      name: "Acompanhamento periodico",
      category: "Administrativo",
      owner: "Coordenacao",
      status: "Arquivado",
      updatedAt: "2 dias",
    },
  ];
}

export function getDetailSections() {
  return [
    {
      title: "Resumo",
      items: [
        ["Identificador", "REF-2026-001"],
        ["Categoria", "Registro administrativo"],
        ["Status", "Ativo"],
        ["Atualizado em", "19/04/2026"],
      ],
    },
    {
      title: "Descricao",
      items: [
        [
          "Contexto",
          "Exemplo neutro de pagina de detalhe para validar organizacao de secoes, contraste e leitura.",
        ],
        [
          "Observacao",
          "A estrutura deve ser facil de adaptar para cadastros, processos, documentos ou entidades futuras.",
        ],
      ],
    },
  ];
}
