import React from "react";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { ThemeToggle } from "@/shared/ui/theme-toggle";

type AppHeaderProps = {
  title: string;
  subtitle: string;
};

export function AppHeader({ title, subtitle }: AppHeaderProps) {
  return (
    <header className="rounded-[1.75rem] border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-6 py-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_24px_rgba(15,23,42,0.04)]">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--muted-foreground))]">
          Boilerplate Workspace
        </p>
        <Badge variant="default">Stone + Teal</Badge>
      </div>

      <div className="mt-3 flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))]">
            {title}
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-[hsl(var(--muted-foreground))]">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <ThemeToggle />
          <Button variant="secondary">Area de trabalho</Button>
          <Button variant="primary">Acao primaria</Button>
        </div>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        <Card className="bg-[hsl(var(--secondary))] shadow-none">
          <CardContent className="px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
              Foundation
            </p>
            <p className="mt-2 text-sm leading-6 text-[hsl(var(--secondary-foreground))]">
              Layout base generico para sistemas administrativos e operacionais.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-none">
          <CardContent className="px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
              Visual
            </p>
            <p className="mt-2 text-sm leading-6 text-[hsl(var(--card-foreground))]">
              Superficies limpas, densidade media e tokens semanticos.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-none">
          <CardContent className="px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
              Compatibilidade
            </p>
            <p className="mt-2 text-sm leading-6 text-[hsl(var(--card-foreground))]">
              Base preparada para CRUD, tabelas, formularios e paineis.
            </p>
          </CardContent>
        </Card>
      </div>
    </header>
  );
}
