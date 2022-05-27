/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */
import * as React from "react";

import { render, screen } from "@testing-library/react";

import { Summary } from "./Summary";

describe("Summary test", () => {
  it("should render summary", async () => {
    render(<Summary />);

    expect(screen.getByText("Entradas")).toBeInTheDocument();
    expect(screen.getByText("Saídas")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
  });
});
