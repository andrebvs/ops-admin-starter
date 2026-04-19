import React from "react";
import { getDetailSections } from "@/features/demo/application/get-demo-content";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

export function DemoDetailPage() {
  const sections = getDetailSections();

  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_320px]">
      <div className="space-y-5">
        <Card>
          <CardHeader>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="success">Ativo</Badge>
              <Badge variant="muted">Referencia interna</Badge>
            </div>
            <CardTitle className="mt-3 text-3xl">
              Registro de demonstracao
            </CardTitle>
            <CardDescription className="mt-2 max-w-3xl">
              Cabecalho neutro para validar titulo, metadados e acoes em paginas de
              detalhe.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button variant="primary">Acao primaria</Button>
            <Button variant="outline">Acao secundaria</Button>
          </CardContent>
        </Card>

        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.items.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-2 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-4 md:grid-cols-[180px_minmax(0,1fr)]"
                >
                  <p className="text-sm font-medium text-[hsl(var(--foreground))]">
                    {label}
                  </p>
                  <p className="text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                    {value}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-5">
        <Card>
          <CardHeader>
            <CardTitle>Meta-informacoes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">
                Responsavel
              </p>
              <p className="mt-2 text-sm text-[hsl(var(--foreground))]">
                Equipe interna
              </p>
            </div>
            <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">
                Ultima revisao
              </p>
              <p className="mt-2 text-sm text-[hsl(var(--foreground))]">
                Hoje, 10:24
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Observacoes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-6 text-[hsl(var(--muted-foreground))]">
              Este bloco lateral demonstra como acomodar contexto auxiliar sem perder
              a leitura do conteudo principal.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
