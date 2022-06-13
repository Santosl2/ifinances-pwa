import { useQuery, UseQueryResult } from "react-query";

import { UserFinancesResponse } from "@/interfaces/Response";
import { getUsersFinances } from "@/services/users";

export function useUsersFinances() {
  return useQuery(["finances"], () => getUsersFinances(), {
    staleTime: 1000 * 60 * 60, // 1hora
    cacheTime: 1000 * 60 * 60,
  }) as UseQueryResult<UserFinancesResponse, unknown>;
}
