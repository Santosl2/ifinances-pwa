import { LOGIN_COOKIE_NAME } from "@/constants";
import { cookieInsert } from "@/utils/Cookie";
import { PayloadAction } from "@reduxjs/toolkit";

import { UserStateProps } from "../interfaces/User";

export const reducers = {
  changeUser(state: any, { payload }: PayloadAction<UserStateProps>) {
    const { name, email, refreshToken, accessToken } = payload;

    if (process.browser) {
      cookieInsert(
        LOGIN_COOKIE_NAME,
        JSON.stringify({
          name,
          email,
          refreshToken,
          accessToken,
        })
      );
    }

    return {
      ...state,
      name,
      email,
      refreshToken,
      accessToken,
    };
  },
};
