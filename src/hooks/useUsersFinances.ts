import { useQuery, UseQueryResult } from "react-query";

import { UserFinancesResponse } from "@/interfaces/Response";
import { getUsersFinances } from "@/services/users";

export function useUsersFinances() {
  return useQuery(["finances"], () => getUsersFinances(), {
    staleTime: 1000 * 20, // 20s
  }) as UseQueryResult<UserFinancesResponse, unknown>;
}
