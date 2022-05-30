import {
  LOGIN_COOKIE_ACCESS_TOKEN,
  LOGIN_COOKIE_NAME,
  LOGIN_COOKIE_REFRESH_TOKEN,
} from "@/constants";
import { cookieInsert } from "@/utils/Cookie";
import { PayloadAction } from "@reduxjs/toolkit";

import { UserStateProps } from "../interfaces/User";

export const reducers = {
  changeUser(state: any, { payload }: PayloadAction<UserStateProps>) {
    const { name, email, refreshToken, accessToken } = payload;

    cookieInsert(
      LOGIN_COOKIE_NAME,
      JSON.stringify({
        name,
        email,
      })
    );

    cookieInsert(LOGIN_COOKIE_REFRESH_TOKEN, refreshToken);
    cookieInsert(LOGIN_COOKIE_ACCESS_TOKEN, accessToken);

    return {
      ...state,
      name,
      email,
      refreshToken,
      accessToken,
    };
  },
};
