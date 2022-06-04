import { UserFinancesResponse } from "@/interfaces/Response";

import { api } from "../api";

export async function getUsersFinances(): Promise<UserFinancesResponse[]> {
  const { data } = await api.get("/finances");

  return data;
}
