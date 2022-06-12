import { useMutation } from "react-query";

import { CreateTransactionModalFormData } from "@/interfaces/Forms";
import { queryClient } from "@/services/queryClient";
import { createUserFinances } from "@/services/users";

export function useMutationCreateFinance() {
  return useMutation(
    async (data: CreateTransactionModalFormData) => createUserFinances(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("finances");
      },
    }
  );
}
