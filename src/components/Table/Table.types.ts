import { Column } from "react-table";

export interface TableProps {
  data: {
    [key: string]: string | number;
  }[];
  columns: Array<Column<any>>;
}

export interface CellProps {
  cell: {
    value: string;
  };
}

export const category: {
  [key: string]: string;
} = {
  income: "Entrada",
  outcome: "Saída",
};
