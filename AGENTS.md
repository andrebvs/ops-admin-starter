# AGENTS.md

## Stack oficial
- Next.js App Router
- TypeScript
- Prisma
- PostgreSQL
- Tailwind
- Vitest
- React Testing Library
- Docker Compose

## Regras de arquitetura
- Separar regra de negócio de componentes React.
- Toda regra de negócio deve ficar em `domain/` ou `application/`.
- Componentes de UI devem ser os mais simples possível.
- Preferir mudanças pequenas e localizadas.
- Não reescrever arquivos inteiros sem necessidade.

## Regra obrigatória de testes
- Toda feature nova deve incluir testes unitários.
- Toda correção de bug deve incluir teste de regressão.
- Nenhuma tarefa está pronta se `lint`, `typecheck` e `test` falharem.

## Estrutura esperada
- `src/features/<feature>/domain`
- `src/features/<feature>/application`
- `src/features/<feature>/ui`
- `src/features/<feature>/infra`

## Fluxo de trabalho
1. Entender a feature
2. Localizar os arquivos
3. Implementar com mudança mínima
4. Adicionar/ajustar testes
5. Rodar validações
6. Resumir o que mudou

## Comandos oficiais
- instalar dependências: `pnpm install`
- subir banco local: `docker compose up -d`
- rodar app: `pnpm dev`
- lint: `pnpm lint`
- typecheck: `pnpm typecheck`
- testes: `pnpm test`
- cobertura: `pnpm test:coverage`
- prisma generate: `pnpm prisma generate`
- migrations: `pnpm prisma migrate dev`
