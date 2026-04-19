# Contributing

## Purpose

This document defines the minimum contribution rules for `ops-admin-starter`.

The project is a reusable, domain-neutral boilerplate. Contributions should improve the starter without pushing it toward a specific business domain.

## Local Setup

1. Copy the environment file:

```bash
cp .env.example .env
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the local database:

```bash
docker compose up -d
```

4. Generate Prisma Client:

```bash
pnpm prisma:generate
```

5. Start the app:

```bash
pnpm dev
```

## Required Validation

Before considering a contribution complete, run:

```bash
pnpm lint
pnpm typecheck
pnpm test
```

Use coverage when it helps validate broader behavior:

```bash
pnpm test:coverage
```

## Testing Rules

- New logic or behavior must include unit tests when relevant.
- Bug fixes must include a regression test whenever the issue can be reproduced in code.
- Do not treat tests as optional cleanup work after implementation.

## Contribution Conventions

- Prefer small, focused changes.
- Do not rewrite large areas without a clear reason.
- Avoid unnecessary dependencies.
- Preserve simplicity, readability, and maintainability.
- Update documentation when behavior, setup, or project conventions change.

## Architecture Rules

Respect `AGENTS.md` and keep the existing feature-based architecture:

```text
src/features/<feature>/
  domain/
  application/
  ui/
  infra/
```

Additional rules:

- Keep business rules out of React components.
- Put domain and application logic in `domain/` or `application/`.
- Keep UI components simple and reusable.
- Do not mix rule processing with visual rendering.

## Scope Guidance

Good contributions usually:

- improve the shared foundation
- strengthen architecture consistency
- fix bugs with tests
- refine reusable UI or developer workflow

Avoid contributions that:

- introduce domain-specific branding or workflows
- change architecture without clear justification
- add speculative abstractions with no current use

## Codex And Repository Rules

This repository is prepared for Codex-assisted work.

- Follow `AGENTS.md` as the repository-level source of implementation rules.
- Keep changes compatible with the current stack and architecture.
- If you use Codex or another coding agent, ensure the final result still meets the same human review standard.

## Pull Request Expectations

If you open a pull request, keep the description practical:

- what changed
- why it changed
- whether tests were added or updated
- whether documentation was updated

Small, reviewable pull requests are preferred over large, mixed batches of work.
