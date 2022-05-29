import { UserCredential, User as UserFirebaseType } from "firebase/auth";

export type User = UserCredential & {
  user: UserFirebaseType & {
    accessToken: string;
  };
};
