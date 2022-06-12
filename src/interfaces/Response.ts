import { FinanceTypes } from "./Finance";
import { UserData } from "./User";

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

export type DefaultResponse = {
  message?: string;
  success: boolean;
};

export type LoginResponse = DefaultResponse & {
  user: Omit<UserData, "refreshToken" | "accessToken">;
} & Pick<UserData, "refreshToken" | "accessToken">;
