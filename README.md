# ops-admin-starter

[![CI](https://github.com/andrebvs/ops-admin-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/andrebvs/ops-admin-starter/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Reusable full-stack starter for admin and operational web systems with Next.js, TypeScript, Prisma, PostgreSQL, Tailwind CSS, and mandatory unit testing.

## Overview

`ops-admin-starter` is a public boilerplate for future administrative and operational web systems.

The goal is to reduce repeated setup work by providing:

- a full-stack Next.js monolith
- feature-based internal architecture
- a reusable visual foundation for admin-style interfaces
- Prisma and PostgreSQL integration
- mandatory validation with lint, typecheck, and tests

This repository is intentionally domain-neutral. It is meant to be adapted for systems such as internal admin panels, document workflows, operational tools, inventory flows, and other back-office web applications.

## Use Cases

This starter is suitable for projects that need:

- CRUD-heavy internal systems
- operational dashboards and workspaces
- document and records management flows
- ERP-like admin interfaces
- maintainable full-stack web apps without a separated backend

## Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Prisma
- PostgreSQL
- Docker Compose
- Vitest
- React Testing Library

## Architecture Principles

- Keep business rules out of React components.
- Place domain and application logic inside `domain/` or `application/`.
- Keep UI components as simple and reusable as possible.
- Prefer small, localized changes.
- Avoid unnecessary dependencies.
- Every relevant behavior must remain testable.

## Expected Feature Structure

```text
src/features/<feature>/
  domain/
  application/
  ui/
  infra/
```

## Current Project Structure

```text
src/
  app/
  components/
  features/
    home/
    shell/
  lib/
  shared/
    ui/
prisma/
AGENTS.md
docker-compose.yml
```

## Requirements

- Node.js 20+
- pnpm
- Docker with Docker Compose

## Installation

1. Clone the repository.
2. Copy the environment file:

```bash
cp .env.example .env
```

3. Install dependencies:

```bash
pnpm install
```

4. Start the local database:

```bash
docker compose up -d
```

5. Generate Prisma Client:

```bash
pnpm prisma:generate
```

## Running Locally

Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

## Database and Prisma

The repository includes a local PostgreSQL service through Docker Compose.

- Default host port: `5433`
- Prisma datasource: `DATABASE_URL`
- Prisma schema file: `prisma/schema.prisma`

Useful commands:

```bash
pnpm db:up
pnpm db:down
pnpm db:logs
pnpm prisma:generate
pnpm prisma:validate
pnpm prisma:migrate
pnpm prisma:studio
```

Note:

- The current schema is intentionally minimal.
- The first real migration should be created together with the first real domain feature.

## Available Scripts

- `pnpm dev` starts the development server
- `pnpm build` builds the application
- `pnpm start` starts the production server
- `pnpm lint` runs ESLint
- `pnpm typecheck` runs TypeScript type checking
- `pnpm test` runs the test suite once
- `pnpm test:watch` runs tests in watch mode
- `pnpm test:coverage` runs tests with coverage
- `pnpm db:up` starts PostgreSQL via Docker Compose
- `pnpm db:down` stops PostgreSQL
- `pnpm db:logs` tails PostgreSQL logs
- `pnpm prisma:generate` generates Prisma Client
- `pnpm prisma:validate` validates the Prisma schema
- `pnpm prisma:migrate` runs Prisma migrations in development
- `pnpm prisma:studio` opens Prisma Studio

## Testing Policy

This repository treats tests as part of the implementation, not as optional follow-up work.

- New features must include unit tests when they introduce relevant logic or behavior.
- Bug fixes must include a regression test whenever the failure can be reproduced in code.
- A task is not considered complete if `lint`, `typecheck`, or `test` fail.

Run the baseline validation with:

```bash
pnpm lint
pnpm typecheck
pnpm test
```

## Codex Integration

This repository is prepared for Codex-based workflows.

- `AGENTS.md` defines stack, architecture, testing rules, and working conventions.
- `.codex/` is available for local Codex-related configuration and workflow support.
- Contributions should respect the project rules in `AGENTS.md`, especially around architecture, testability, and scoped changes.

Codex support is intended to help maintain consistency, not to replace normal code review standards.

## Visual Foundation

The project includes a reusable UI foundation intended for admin and operational systems.

- semantic theme tokens in `src/app/globals.css`
- shared UI primitives in `src/shared/ui`
- a reusable app shell in `src/features/shell`
- support for light mode and dark mode

The current visual language is intentionally neutral, restrained, and suitable for internal systems.

## Theme Support

The starter supports `light`, `dark`, and `system` theme modes.

- Light mode is the default initial mode.
- A reusable theme toggle is available in the app shell header.
- The selected preference is persisted locally.
- When `system` is selected, the UI follows the operating system preference.

## Roadmap

Initial roadmap items for the starter:

- consolidate reusable shared UI patterns for forms, filters, and page sections
- expand the feature-based foundation with real example flows only when they remain domain-neutral
- keep improving test coverage around shared behavior
- add more internal documentation as the starter grows

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## License

This project is licensed under the MIT License.

See [LICENSE.md](./LICENSE.md) for details.
