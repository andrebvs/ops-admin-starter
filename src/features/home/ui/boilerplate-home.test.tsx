import React from "react";
import { render, screen } from "@testing-library/react";
import { getHomeContent } from "@/features/home/application/get-home-content";
import { BoilerplateHome } from "@/features/home/ui/boilerplate-home";
import { getShellNavigation } from "@/features/shell/application/get-shell-navigation";
import { AppShell } from "@/features/shell/ui/app-shell";

describe("BoilerplateHome", () => {
  it("renders the feature-based workspace inside the generic shell", () => {
    render(
      <AppShell
        headerTitle="Workspace inicial"
        headerSubtitle="Estrutura base pronta para futuras features."
        navigation={getShellNavigation()}
      >
        <BoilerplateHome content={getHomeContent()} />
      </AppShell>,
    );

    expect(
      screen.getByRole("heading", {
        name: /workspace inicial/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("navigation", {
        name: /navegacao principal/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /base pronta para futuros sistemas administrativos e operacionais/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/arquitetura por features preparada/i),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/nome do registro/i)).toBeInTheDocument();

    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});
