import {
  CreateTransactionModalFormData,
  SignInFormData,
} from "@/interfaces/Forms";
import {
  DefaultResponse,
  LoginResponse,
  UserFinancesResponse,
} from "@/interfaces/Response";

import { api } from "../api";

export async function loginUser(user: SignInFormData): Promise<LoginResponse> {
  const response = await api.post("/users/login", {
    user,
  });

  return response.data;
}

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

export async function createDeleteFinance(
  id: string
): Promise<DefaultResponse> {
  const response = await api.delete("/finances", {
    data: { id },
  });

  return response.data;
}
