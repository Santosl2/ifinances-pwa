import { LOGIN_COOKIE_NAME } from "@/constants";
import { UserData } from "@/interfaces/User";
import { api } from "@/services/api";
import { cookieInsert } from "@/utils/Cookie";
import { PayloadAction } from "@reduxjs/toolkit";

export const reducers = {
  changeUser(state: any, { payload }: PayloadAction<UserData>) {
    if (process.browser) {
      cookieInsert(
        LOGIN_COOKIE_NAME,
        JSON.stringify({
          ...payload,
        })
      );
    }

    api.defaults.headers.common.Authorization = `Bearer ${payload.accessToken}`;

    return {
      ...state,
      ...payload,
    };
  },
};
