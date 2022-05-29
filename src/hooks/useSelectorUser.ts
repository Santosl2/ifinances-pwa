import { useSelector } from "react-redux";

type User = {
  user: {
    name: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  };
};

export function useSelectorUser(): string {
  const userData = useSelector<User>((state) => state.user.name);
  return userData as string;
}
