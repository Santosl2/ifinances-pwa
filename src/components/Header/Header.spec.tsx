/* eslint-disable testing-library/no-node-access */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */
import * as React from "react";

import { renderWithStore } from "@/tests/readerWithStore";
import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("Header Test", () => {
  it("should render Header", () => {
    renderWithStore(<Header />);

    expect(screen.getByText("Nova transação")).toBeInTheDocument();
    expect(screen.getByAltText("iFinances Logo")).toBeInTheDocument();
  });

  it("should be match snapshot", () => {
    const { container } = renderWithStore(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
