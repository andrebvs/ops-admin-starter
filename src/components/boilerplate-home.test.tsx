import React from "react";
import { render, screen } from "@testing-library/react";
import { BoilerplateHome } from "@/components/boilerplate-home";

describe("BoilerplateHome", () => {
  it("renders the base shell and feature home content", () => {
    render(<BoilerplateHome />);

    expect(
      screen.getByRole("heading", {
        name: /workspace inicial/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /base pronta para futuros sistemas administrativos e operacionais/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("navigation", {
        name: /navegacao principal/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/layout principal reutilizavel/i),
    ).toBeInTheDocument();

    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});
