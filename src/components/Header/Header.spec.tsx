/* eslint-disable testing-library/no-node-access */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */
import * as React from "react";

import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("Header Test", () => {
  it("should render Header", () => {
    render(<Header />);

    expect(screen.getByText("Nova transação")).toBeInTheDocument();
    expect(screen.getByAltText("iFinances Logo")).toBeInTheDocument();
  });

  it("should be match snapshot", () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
