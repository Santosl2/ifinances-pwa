import { FinanceTypes } from "./Finance";

type FinanceResponseData = {
  amount: number;
  type: FinanceTypes;
  userId: string;
  date: string;
};

export type UserFinancesResponse = {
  data: FinanceResponseData[];
  total: {
    income: number;
    outcome: number;
    final: number;
  };
};
