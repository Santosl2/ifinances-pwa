import { useSelector } from "react-redux";

type User = {
  user: {
    name: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  };
};

export function useSelectorUser(): User {
  const userData = useSelector<User>((state) => state.user) as User;
  return userData;
}
