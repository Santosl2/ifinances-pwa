import { UserFinancesResponse } from "@/interfaces/Response";

export interface SummaryProps {
  data: UserFinancesResponse | undefined;
  isLoading: boolean;
}
