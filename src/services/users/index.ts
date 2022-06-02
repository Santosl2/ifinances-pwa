import { FinanceTypes } from "@/interfaces/Finance";
import { UserFinancesResponse } from "@/interfaces/Response";

import { api } from "../api";

export async function getUsersFinances(
  type: FinanceTypes
): Promise<UserFinancesResponse[]> {
  const { data } = await api.get(`/finances/${type}`);

  return data;
}
