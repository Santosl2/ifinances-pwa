import { Column } from "react-table";

export interface TableProps {
  data: any;
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
