import React from "react";
import {
  getActivityFeed,
  getDashboardStats,
  getRecentItems,
} from "@/features/demo/application/get-demo-content";
import { Badge } from "@/shared/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";

function getStatusVariant(status: string) {
  if (status === "Ativo") return "success";
  if (status === "Em analise") return "muted";
  return "outline";
}

export function DemoDashboardPage() {
  const stats = getDashboardStats();
  const recentItems = getRecentItems();
  const activityFeed = getActivityFeed();

  return (
    <div className="space-y-5">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-3xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                {stat.note}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(0,0.95fr)]">
        <Card>
          <CardHeader>
            <CardTitle>Itens recentes</CardTitle>
            <CardDescription>
              Exemplo de tabela curta embutida em dashboard administrativo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Area</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Atualizacao</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentItems.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.area}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(item.status)}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-[hsl(var(--muted-foreground))]">
                      {item.updatedAt}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status e atividade</CardTitle>
            <CardDescription>
              Bloco lateral para observacao de eventos recentes e sinais de estado.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-[hsl(var(--accent-border))] bg-[hsl(var(--accent-subtle))] p-4">
              <p className="text-sm font-medium text-[hsl(var(--foreground))]">
                Ambiente de demonstracao estavel
              </p>
              <p className="mt-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                Shell, tokens visuais e componentes base estao consistentes entre
                as paginas.
              </p>
            </div>

            <div className="space-y-3">
              {activityFeed.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-[hsl(var(--foreground))]">
                      {item.title}
                    </p>
                    <span className="text-xs text-[hsl(var(--muted-foreground))]">
                      {item.time}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
