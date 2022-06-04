/* eslint-disable testing-library/no-node-access */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */
import * as React from "react";

import { UserFinancesResponse } from "@/interfaces/Response";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import { Summary } from "./Summary";

let data: UserFinancesResponse;

describe("Summary test", () => {
  beforeEach(() => {
    data = {
      data: [],
      total: {
        income: 0,
        outcome: 0,
        final: 0,
      },
    };
  });

  it("should render summary", async () => {
    render(<Summary data={data} isLoading={false} />);

    expect(screen.getByText("Entradas")).toBeInTheDocument();
    expect(screen.getByText("Saídas")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
  });

  it("should br match snapshot", async () => {
    const { container } = render(<Summary data={data} isLoading={false} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
