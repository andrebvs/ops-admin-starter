import React from "react";
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
import { Textarea } from "@/shared/ui/textarea";

export function DemoFormPage() {
  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_320px]">
      <Card>
        <CardHeader>
          <CardTitle>Formulario base</CardTitle>
          <CardDescription>
            Estrutura neutra para cadastros, manutencoes e fluxos internos.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="demo-name" className="text-sm font-medium">
                Nome
              </label>
              <Input id="demo-name" placeholder="Ex.: Cadastro interno" />
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Campo de texto principal para identificacao.
              </p>
            </div>
            <div className="space-y-2">
              <label htmlFor="demo-code" className="text-sm font-medium">
                Codigo interno
              </label>
              <Input id="demo-code" placeholder="REF-2026-001" />
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Exemplo de campo auxiliar curto.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="demo-type" className="text-sm font-medium">
                Tipo
              </label>
              <Select id="demo-type" defaultValue="administrativo">
                <option value="administrativo">Administrativo</option>
                <option value="operacional">Operacional</option>
                <option value="documental">Documental</option>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="demo-priority" className="text-sm font-medium">
                Prioridade
              </label>
              <Select id="demo-priority" defaultValue="normal">
                <option value="normal">Normal</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="demo-description" className="text-sm font-medium">
              Descricao
            </label>
            <Textarea
              id="demo-description"
              placeholder="Use este espaco para registrar contexto adicional de forma objetiva."
            />
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Textos auxiliares devem ser curtos e claros.
            </p>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-4">
            <p className="text-sm font-medium text-[hsl(var(--foreground))]">
              Estado visual
            </p>
            <p className="mt-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
              Campos, labels e acoes devem permanecer consistentes mesmo quando o
              formulario crescer.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Salvar</Button>
            <Button variant="secondary">Salvar e continuar</Button>
            <Button variant="outline">Cancelar</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-5">
        <Card>
          <CardHeader>
            <CardTitle>Orientacoes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Badge variant="default">Helper text</Badge>
            <p className="text-sm leading-6 text-[hsl(var(--muted-foreground))]">
              A fundacao visual prioriza leitura, estados previsiveis e baixo ruido.
            </p>
            <Badge variant="success">Acoes claras</Badge>
            <p className="text-sm leading-6 text-[hsl(var(--muted-foreground))]">
              A acao principal deve ser facil de identificar sem depender de excesso
              de cor.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Checklist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Labels proximas dos campos",
              "Espacamento regular entre grupos",
              "Estados de foco visiveis",
              "Acoes primaria e secundaria separadas",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-2 text-sm text-[hsl(var(--foreground))]"
              >
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
