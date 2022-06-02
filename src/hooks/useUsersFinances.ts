import { useQuery, UseQueryResult } from "react-query";

import { FinanceTypes } from "@/interfaces/Finance";
import { UserFinancesResponse } from "@/interfaces/Response";
import { getUsersFinances } from "@/services/users";

export function useUsersFinances(type: FinanceTypes) {
  return useQuery(["finances"], () => getUsersFinances(type), {
    staleTime: 1000 * 20, // 20s
  }) as UseQueryResult<UserFinancesResponse[], unknown>;
}
