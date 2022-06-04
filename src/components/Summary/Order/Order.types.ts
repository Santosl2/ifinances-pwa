/* eslint-disable no-shadow */
export enum OrderIcons {
  total = "total.svg",
  income = "income.svg",
  outcome = "outcome.svg",
}

export interface OrderProps {
  title: string;
  amount: number;
  icon: OrderIcons;
  isLoading?: boolean;
}
