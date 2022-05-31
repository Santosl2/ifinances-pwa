import { useSelector } from "react-redux";

type UserData = {
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
};

type User = {
  user: UserData;
};

export function useSelectorUser(): UserData {
  const userData = useSelector<User>((state) => state.user) as UserData;
  return userData;
}
