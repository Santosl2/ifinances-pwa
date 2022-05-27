/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */
import * as React from "react";

import { render, screen } from "@testing-library/react";

import { Table } from "./Table";

const mockedTableData = {
  headers: ["Title", "Price", "Category"],
  values: ["Desenvolvimento de site", "R$ 12,000.00", "Venda"],
};
describe("Table test", () => {
  it("should render table", async () => {
    render(
      <Table
        headers={mockedTableData.headers}
        values={mockedTableData.values}
      />
    );

    expect(screen.getByText(mockedTableData.headers[0])).toBeInTheDocument();
    expect(screen.getByText(mockedTableData.headers[1])).toBeInTheDocument();
    expect(screen.getByText(mockedTableData.headers[2])).toBeInTheDocument();

    expect(screen.getByText(mockedTableData.values[0])).toBeInTheDocument();
    expect(screen.getByText(mockedTableData.values[1])).toBeInTheDocument();
    expect(screen.getByText(mockedTableData.values[2])).toBeInTheDocument();
  });
});
