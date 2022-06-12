/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */
import * as React from "react";

import { renderWithStoreAndClient } from "@/tests/renderWithStoreAndClient";
import { render, screen } from "@testing-library/react";

import { Table } from "./Table";
import { TableProps } from "./Table.types";

let mockedTableData: TableProps;

describe("Table test", () => {
  beforeEach(() => {
    mockedTableData = {
      columns: [
        {
          Header: "Teste 1",
          accessor: "t1",
        },
        {
          Header: "Teste 2",
          accessor: "t2",
        },
      ],
      data: [
        {
          t1: "Teste 3",
          t2: "Teste 4",
        },
      ],
    };
  });

  it("should render table", async () => {
    renderWithStoreAndClient(
      <Table columns={mockedTableData.columns} data={mockedTableData.data} />
    );

    expect(screen.getByText("Teste 1")).toBeInTheDocument();
    expect(screen.getByText("Teste 2")).toBeInTheDocument();

    expect(screen.getByText(mockedTableData.data[0].t1)).toBeInTheDocument();
    expect(screen.getByText(mockedTableData.data[0].t2)).toBeInTheDocument();
  });
});
