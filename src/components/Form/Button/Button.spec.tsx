/* eslint-disable testing-library/no-node-access */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */
import * as React from "react";

import { render, screen } from "@testing-library/react";
import "jest-styled-components";

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

  it("should match Snapshot", () => {
    const { container } = render(<Button bgColor="red">Teste</Button>);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule("background", "red");
  });
});
