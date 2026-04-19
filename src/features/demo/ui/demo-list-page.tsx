import React from "react";
import { getListRows } from "@/features/demo/application/get-demo-content";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
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

export function DemoListPage() {
  const rows = getListRows();

  return (
    <div className="space-y-5">
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
          <CardDescription>
            Exemplo visual de busca e filtros sem logica de negocio acoplada.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_220px_220px_auto]">
          <Input placeholder="Buscar por nome, identificador ou responsavel" />
          <Select defaultValue="all">
            <option value="all">Todas as categorias</option>
            <option value="administrativo">Administrativo</option>
            <option value="operacional">Operacional</option>
            <option value="documental">Documental</option>
          </Select>
          <Select defaultValue="all">
            <option value="all">Todos os status</option>
            <option value="active">Ativo</option>
            <option value="review">Em analise</option>
            <option value="draft">Rascunho</option>
          </Select>
          <div className="flex gap-3">
            <Button variant="primary" className="w-full lg:w-auto">
              Aplicar
            </Button>
            <Button variant="outline" className="w-full lg:w-auto">
              Limpar
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <CardTitle>Resultados</CardTitle>
              <CardDescription>
                Tabela de demonstracao com densidade media e boa escaneabilidade.
              </CardDescription>
            </div>
            <Badge variant="muted">5 itens</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Identificador</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Responsavel</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Atualizacao</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.owner}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(row.status)}>
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-[hsl(var(--muted-foreground))]">
                    {row.updatedAt}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex flex-col gap-3 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Exibindo 1-5 de 24 itens
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Anterior
              </Button>
              <Button variant="outline" size="sm">
                Proxima
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
