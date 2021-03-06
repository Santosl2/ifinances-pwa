import { useMutation } from "react-query";

import {
  CreateTransactionModalFormData,
  SignInFormData,
  SignUpFormData,
} from "@/interfaces/Forms";
import { queryClient } from "@/services/queryClient";
import {
  createDeleteFinance,
  createUser,
  createUserFinances,
  loginUser,
} from "@/services/users";

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

export function useMutationDeleteFinance() {
  return useMutation(async (id: string) => createDeleteFinance(id), {
    onSuccess: () => {
      queryClient?.invalidateQueries("finances");
    },
  });
}

export function useMutationLoginUser() {
  return useMutation(async (user: SignInFormData) => loginUser(user));
}

export function useMutationRegisterUser() {
  return useMutation(async (user: SignUpFormData) => createUser(user));
}
