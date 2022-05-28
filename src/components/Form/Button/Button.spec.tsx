/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */
import * as React from "react";

import { render, screen } from "@testing-library/react";

import { Button } from ".";

describe("Button Test", () => {
  it("should render Button", () => {
    render(<Button>Teste</Button>);

    expect(screen.getByText("Teste")).toBeInTheDocument();
  });

  it("should render loading when button is login", () => {
    render(<Button isLoading>Teste</Button>);

    expect(screen.queryByText("Teste")).not.toBeInTheDocument();
  });

  it("should render button with correct color", () => {
    render(<Button bgColor="red">Teste</Button>);

    expect(screen.getByText("Teste")).toHaveStyle({
      background: "red",
    });
  });
});
