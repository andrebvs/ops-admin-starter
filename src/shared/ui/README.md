# UI Foundation

Base visual compartilhada do boilerplate para fluxos administrativos e operacionais.

## Filosofia

- Linguagem visual `Stone + Teal`: neutra, corporativa, legivel e com baixo ruido.
- Cor deve indicar papel semantico e estado, nao decoracao.
- Superficies claras, bordas quietas, sombras discretas e hierarquia previsivel.
- Dark mode existe por tokens, sem bifurcar componentes.

## Tokens semanticos

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

## Regras de extensao

- Preferir componentes em `src/shared/ui` para padroes recorrentes.
- Centralizar cor nos tokens do `globals.css`; evitar cores hardcoded em componentes.
- Manter cantos moderados, estados de foco visiveis e hover sutil.
- Formularios e tabelas devem priorizar escaneabilidade e legibilidade.

## Evitar

- Cores ad hoc por componente.
- Superficies com opacidade arbitraria sem necessidade semantica.
- Estados de hover chamativos.
- Inconsistencia de padding, raio ou borda entre componentes equivalentes.
