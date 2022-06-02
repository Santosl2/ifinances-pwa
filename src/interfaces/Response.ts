import { FinanceTypes } from "./Finance";

export type UserFinancesResponse = {
  amount: number;
  type: FinanceTypes;
  userId: string;
  date: string;
};
