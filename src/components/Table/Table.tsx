/* eslint-disable react/no-array-index-key */
import { Container, TableBody, TableHead, TableWrapper } from "./Table.styles";
import { TableProps } from "./Table.types";

export function Table({ headers, values }: TableProps): JSX.Element {
  return (
    <Container>
      <TableWrapper>
        <TableHead>
          <tr>
            {headers?.map((h, index) => (
              <th key={index}>{h}</th>
            ))}
          </tr>
        </TableHead>

        <TableBody>
          <tr>
            {values?.map((v, index) => (
              <td key={index}>{v}</td>
            ))}
          </tr>
        </TableBody>
      </TableWrapper>
    </Container>
  );
}
