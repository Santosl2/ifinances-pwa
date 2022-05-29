import {
  LOGIN_COOKIE_ACCESS_TOKEN,
  LOGIN_COOKIE_NAME,
  LOGIN_COOKIE_REFRESH_TOKEN,
} from "@/constants";
import { cookieInsert } from "@/utils/Cookie";
import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "@user",
  initialState: {
    name: "",
    email: "",
    refreshToken: "",
    accessToken: "",
  },

  reducers: {
    changeUser(state, { payload }) {
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
  },
});

export const { changeUser } = UserSlice.actions;

export default UserSlice.reducer;
