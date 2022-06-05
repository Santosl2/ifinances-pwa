import { useSelector } from "react-redux";

import { UserData, UserSelector } from "@/interfaces/User";

export function useSelectorUser(): UserData {
  const userData = useSelector<UserSelector>((state) => state.user) as UserData;
  return userData;
}
