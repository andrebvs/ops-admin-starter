import React from "react";
import Link from "next/link";
import type { ShellNavigationSection } from "@/features/shell/domain/navigation";
import { Badge } from "@/shared/ui/badge";
import { cn } from "@/shared/ui/lib/cn";

type AppSidebarProps = {
  navigation: ShellNavigationSection[];
};

export function AppSidebar({ navigation }: AppSidebarProps) {
  return (
    <aside className="flex h-full flex-col rounded-[1.75rem] border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-5 py-6 text-[hsl(var(--card-foreground))] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_32px_rgba(15,23,42,0.05)]">
      <div className="border-b border-[hsl(var(--border))] pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[hsl(var(--muted-foreground))]">
          App Shell
        </p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))]">
            Estrutura neutra
          </h2>
          <Badge variant="muted">Base</Badge>
        </div>
        <p className="mt-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
          Sidebar e header reutilizaveis para futuras features.
        </p>
      </div>

      <div className="mt-5 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
          Navegacao
        </p>
        <p className="mt-2 text-sm leading-6 text-[hsl(var(--secondary-foreground))]">
          Base pronta para dashboards, CRUDs, tabelas e fluxos operacionais.
        </p>
      </div>

      <nav aria-label="Navegacao principal" className="mt-6 flex-1 space-y-6">
        {navigation.map((section) => (
          <section key={section.title} aria-label={section.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--muted-foreground))]">
              {section.title}
            </p>
            <ul className="mt-3 space-y-2">
              {section.items.map((item, index) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group block rounded-2xl border px-4 py-3 transition-colors outline-none",
                      "border-[hsl(var(--border))] bg-[hsl(var(--card))]",
                      "hover:border-[hsl(var(--accent-border))] hover:bg-[hsl(var(--accent-subtle))]",
                      "focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--card))]",
                      index === 0 &&
                        "border-[hsl(var(--accent-border))] bg-[hsl(var(--accent-subtle))]",
                    )}
                  >
                    <span className="block text-sm font-medium text-[hsl(var(--foreground))]">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                      {item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>

      <div className="mt-6 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-4">
        <p className="text-sm font-medium text-[hsl(var(--foreground))]">
          Estrutura neutra
        </p>
        <p className="mt-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
          Tokens semanticos, contraste controlado e superficies previsiveis.
        </p>
      </div>
    </aside>
  );
}
