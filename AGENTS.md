# AGENTS.md

## Stack oficial
- Next.js App Router
- TypeScript
- React
- Prisma
- PostgreSQL
- Tailwind CSS
- Vitest
- React Testing Library
- Docker Compose
- GitHub Actions

## Package manager oficial
- Usar `npm` como package manager padrão deste projeto.
- Não introduzir `pnpm` ou `yarn` sem necessidade real.
- Todos os comandos e a documentação devem refletir o uso de `npm`.

## Regras de arquitetura
- Separar regra de negócio de componentes React.
- Toda regra de negócio deve ficar em `domain/` ou `application/`.
- Componentes de UI devem ser os mais simples possível.
- Não mover regra de negócio para a camada visual.
- Preferir mudanças pequenas e localizadas.
- Não reescrever arquivos inteiros sem necessidade.
- Preservar a arquitetura por features.
- Evitar dependências desnecessárias.

## Regra obrigatória de testes
- Toda feature nova com lógica relevante deve incluir testes unitários.
- Toda correção de bug deve incluir teste de regressão.
- Nenhuma tarefa está pronta se `lint`, `typecheck` e `test` falharem.
- Se uma mudança afetar comportamento reutilizável de UI, adicionar ou ajustar testes quando fizer sentido.

## Estrutura esperada
- `src/features/<feature>/domain`
- `src/features/<feature>/application`
- `src/features/<feature>/ui`
- `src/features/<feature>/infra`

## Regras de UI e tema
- O boilerplate deve permanecer neutro de domínio.
- O sistema visual deve ser limpo, corporativo, sóbrio e reutilizável.
- Light mode é o modo padrão.
- Dark mode deve ser suportado de forma elegante e consistente.
- Evitar cores hardcoded em componentes; preferir tokens semânticos.
- Não criar visual chamativo, experimental ou decorativo.
- Páginas demo devem permanecer neutras de domínio e servir apenas para validar a fundação visual do boilerplate.

## Regras de documentação
- Mudanças que afetem onboarding, instalação, scripts ou uso do template devem atualizar `README.md`.
- Mudanças que afetem fundação visual, tokens, tema ou componentes compartilhados devem atualizar a documentação interna de UI, como `src/shared/ui/README.md`, se existir.
- Não prometer no README recursos que ainda não existam.

## Fluxo de trabalho
1. Entender a tarefa
2. Ler a estrutura atual do projeto
3. Propor um plano curto quando a mudança for ampla ou estrutural
4. Localizar os arquivos relevantes
5. Implementar com mudança mínima
6. Adicionar/ajustar testes
7. Rodar validações
8. Resumir o que mudou

## Comandos oficiais
- instalar dependências: `npm install`
- subir banco local: `docker compose up -d`
- rodar app: `npm run dev`
- build: `npm run build`
- lint: `npm run lint`
- typecheck: `npm run typecheck`
- testes: `npm test`
- cobertura: `npm run test:coverage`
- prisma generate: `npx prisma generate`
- migrations: `npx prisma migrate dev`

## Validação obrigatória
Antes de encerrar qualquer tarefa relevante, rodar:
- `npm run lint`
- `npm run typecheck`
- `npm test`

## CI
- O projeto deve permanecer compatível com o workflow de CI do GitHub Actions.
- Não introduzir mudanças que quebrem `lint`, `typecheck` ou `test` no CI.
