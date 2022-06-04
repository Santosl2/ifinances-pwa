import { FinanceResponseData } from "@/interfaces/Response";

export interface TableProps {
  data: FinanceResponseData[];
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
