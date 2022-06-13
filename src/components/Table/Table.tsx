/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-sparse-arrays */
/* eslint-disable react/no-array-index-key */
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { useSortBy, useTable } from "react-table";

import { Container, TableBody, TableHead, TableWrapper } from "./Table.styles";
import { TableProps } from "./Table.types";

const dashboardVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export function Table({ columns, data }: TableProps): JSX.Element {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={dashboardVariants}
      transition={{ duration: 0.7 }}
    >
      <TableWrapper {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaSortDown size={16} />
                      ) : (
                        <FaSortUp size={16} />
                      )
                    ) : (
                      <FaSort size={16} />
                    )}
                  </span>
                </th>
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
