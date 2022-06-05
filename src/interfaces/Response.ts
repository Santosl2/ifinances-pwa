import { FinanceTypes } from "./Finance";

export type FinanceResponseData = {
  title: string;
  amount: number;
  type: FinanceTypes;
  category: string;
  date: number;
};

export type UserFinancesResponse = {
  data: FinanceResponseData[];
  total: {
    income: number;
    outcome: number;
    final: number;
  };
};
