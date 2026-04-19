import React from "react";
import type { HomeContent } from "@/features/home/domain/home-content";
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
import { Textarea } from "@/shared/ui/textarea";

type BoilerplateHomeProps = {
  content: HomeContent;
};

export function BoilerplateHome({ content }: BoilerplateHomeProps) {
  return (
    <div className="space-y-5">
      <Card>
        <CardHeader className="px-7 py-7">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="default">{content.eyebrow}</Badge>
            <Badge variant="success">Estrutura pronta</Badge>
          </div>
          <CardTitle className="mt-4 max-w-3xl text-4xl">
            {content.title}
          </CardTitle>
          <CardDescription className="mt-4 max-w-3xl text-base leading-7">
            {content.description}
          </CardDescription>
        </CardHeader>
      </Card>

      <section aria-label="Checklist da base" className="grid gap-4 xl:grid-cols-2">
        {content.checklist.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)]">
        <Card>
          <CardHeader>
            <CardTitle>Padrao de formulario</CardTitle>
            <CardDescription>
              Campos claros, estados contidos e espacamento consistente para fluxos
              de cadastro e operacao.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="foundation-name"
                className="text-sm font-medium text-[hsl(var(--foreground))]"
              >
                Nome do registro
              </label>
              <Input id="foundation-name" placeholder="Ex.: Processo interno" />
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Use labels curtas e helper text objetivo.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="foundation-type"
                  className="text-sm font-medium text-[hsl(var(--foreground))]"
                >
                  Tipo
                </label>
                <Select id="foundation-type" defaultValue="operacional">
                  <option value="operacional">Operacional</option>
                  <option value="administrativo">Administrativo</option>
                  <option value="documental">Documental</option>
                </Select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="foundation-status"
                  className="text-sm font-medium text-[hsl(var(--foreground))]"
                >
                  Status
                </label>
                <Input id="foundation-status" value="Ativo" readOnly />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="foundation-notes"
                className="text-sm font-medium text-[hsl(var(--foreground))]"
              >
                Observacoes
              </label>
              <Textarea
                id="foundation-notes"
                placeholder="Espaco para anotacoes internas e contexto operacional."
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Salvar rascunho</Button>
              <Button variant="outline">Cancelar</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Padrao de tabela</CardTitle>
            <CardDescription>
              Escaneabilidade alta, hover sutil e estados visuais discretos para
              dados administrativos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Atualizacao</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Registro base</TableCell>
                  <TableCell>Administrativo</TableCell>
                  <TableCell>
                    <Badge variant="success">Ativo</Badge>
                  </TableCell>
                  <TableCell className="text-right text-[hsl(var(--muted-foreground))]">
                    Hoje
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fila operacional</TableCell>
                  <TableCell>Operacional</TableCell>
                  <TableCell>
                    <Badge variant="muted">Em analise</Badge>
                  </TableCell>
                  <TableCell className="text-right text-[hsl(var(--muted-foreground))]">
                    12 min
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Indice documental</TableCell>
                  <TableCell>Documental</TableCell>
                  <TableCell>
                    <Badge variant="outline">Rascunho</Badge>
                  </TableCell>
                  <TableCell className="text-right text-[hsl(var(--muted-foreground))]">
                    Ontem
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
