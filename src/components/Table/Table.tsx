/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-sparse-arrays */
/* eslint-disable react/no-array-index-key */
import { useMemo } from "react";
import { useTable } from "react-table";

import { dateFormat, moneyFormat } from "@/utils/Format";

import { Container, TableBody, TableHead, TableWrapper } from "./Table.styles";
import { CellProps, TableProps } from "./Table.types";

export function Table({ data }: TableProps): JSX.Element {
  const formatedData = useMemo(() => {
    return data.map((res) => {
      return {
        title: res.title,
        amount: moneyFormat(res.amount, res.type),
        category: res.category,
        type: res.type,
        date: dateFormat(res.date),
      };
    });
  }, [data]);

  const columns = useMemo(
    () => [
      {
        Header: "Titulo",
        accessor: "title",
      },
      {
        Header: "Preço",
        accessor: "amount",
        Cell: ({ cell: { value } }: CellProps) => (
          <span className={value.startsWith("-") ? "outcome" : "income"}>
            {value}
          </span>
        ),
      },
      {
        Header: "Categoria",
        accessor: "category",
      },
      {
        Header: "Data",
        accessor: "date",
      },
    ],
    []
  );

  const values = useMemo(() => [...Object.values(formatedData)], [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: values });

  return (
    <Container>
      <TableWrapper {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </TableHead>

        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </TableBody>
      </TableWrapper>
    </Container>
  );
}
