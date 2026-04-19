# UI Foundation

Base visual compartilhada do boilerplate para fluxos administrativos e operacionais.

## Filosofia

- Linguagem visual `Stone + Teal`: neutra, corporativa, legivel e com baixo ruido.
- Cor deve indicar papel semantico e estado, nao decoracao.
- Light mode e a referencia principal: mais claro, leve e corporativo.
- Dark mode existe como variacao sobria, sem neon e sem contraste agressivo.
- Superficies claras, bordas quietas, sombras discretas e hierarquia previsivel.

## Tokens semanticos

Os tokens sao organizados por papel semantico, nao por componente:

Os componentes devem consumir tokens como:

- `--background`, `--foreground`
- `--card`, `--card-foreground`
- `--popover`, `--popover-foreground`
- `--primary`, `--primary-foreground`, `--primary-hover`
- `--secondary`, `--secondary-foreground`, `--secondary-hover`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--destructive`, `--destructive-foreground`
- `--border`, `--input`, `--ring`

Tokens adicionais de suporte:

- `--border-strong`
- `--accent-soft`, `--accent-subtle`, `--accent-border`
- `--success-soft`, `--success-foreground`, `--success-border`

## Tema

- O boilerplate abre em `light mode` por padrao.
- O app shell expoe um toggle reutilizavel com `light`, `dark` e `system`.
- A preferencia do usuario e persistida em `localStorage`.
- Quando `system` e selecionado, o tema acompanha a preferencia do sistema operacional.
- Os componentes continuam iguais; apenas os tokens mudam via `html[data-theme]`.

## Regras de extensao

- Preferir componentes em `src/shared/ui` para padroes recorrentes.
- Centralizar cor nos tokens do `globals.css`; evitar cores hardcoded em componentes.
- Ao criar novos tokens, manter a mesma estrutura semantica para light e dark.
- Sempre ajustar ambos os temas ao introduzir nova superficie, estado ou variante.
- Manter cantos moderados, estados de foco visiveis e hover sutil.
- Formularios e tabelas devem priorizar escaneabilidade e legibilidade.

## Evitar

- Cores ad hoc por componente.
- Hardcoded colors em JSX ou classes de componente quando houver token equivalente.
- Superficies com opacidade arbitraria sem necessidade semantica.
- Estados de hover chamativos.
- Inconsistencia de padding, raio ou borda entre componentes equivalentes.
