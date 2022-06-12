import { CreateTransactionModalFormData } from "@/interfaces/Forms";
import { DefaultResponse, UserFinancesResponse } from "@/interfaces/Response";

import { api } from "../api";

export async function getUsersFinances(): Promise<UserFinancesResponse[]> {
  const { data } = await api.get("/finances");

  return data;
}

export async function createUserFinances(
  data: CreateTransactionModalFormData
): Promise<DefaultResponse> {
  const response = await api.post("/finances", {
    data,
  });

  return response.data;
}
