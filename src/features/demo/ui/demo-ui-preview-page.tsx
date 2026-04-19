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

export function DemoUiPreviewPage() {
  return (
    <div className="space-y-5">
      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Botoes e badges</CardTitle>
            <CardDescription>
              Estados principais de acoes e marcadores visuais.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primario</Button>
              <Button variant="secondary">Secundario</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="muted">Muted</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Campos base</CardTitle>
            <CardDescription>
              Inputs, selects e textarea seguindo a mesma fundacao visual.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Campo de texto" />
            <Select defaultValue="one">
              <option value="one">Opcao 1</option>
              <option value="two">Opcao 2</option>
            </Select>
            <Textarea placeholder="Campo multilinha" />
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Notas de uso</CardTitle>
          <CardDescription>
            Esta pagina resume rapidamente os componentes base para avaliacao visual.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-3">
          {[
            "Usar tokens semanticos em vez de cores hardcoded.",
            "Preservar estados de foco e contraste em novas composicoes.",
            "Preferir componentes compartilhados para formularios e tabelas.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-4 text-sm leading-6 text-[hsl(var(--muted-foreground))]"
            >
              {item}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
