import { useMutation } from "react-query";

import {
  CreateTransactionModalFormData,
  SignInFormData,
} from "@/interfaces/Forms";
import { queryClient } from "@/services/queryClient";
import { createUserFinances, loginUser } from "@/services/users";

export function useMutationCreateFinance() {
  return useMutation(
    async (data: CreateTransactionModalFormData) => createUserFinances(data),
    {
      onSuccess: () => {
        queryClient?.invalidateQueries("finances");
      },
    }
  );
}

export function useMutationLoginUser() {
  return useMutation(async (user: SignInFormData) => loginUser(user));
}
