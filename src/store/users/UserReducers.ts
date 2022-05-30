import { createSlice } from "@reduxjs/toolkit";

import { UserStateProps } from "./interfaces/User";
import { reducers } from "./reducers";

const initialState: UserStateProps = {
  accessToken: "",
  email: "",
  name: "",
  refreshToken: "",
};

export const UserSlice = createSlice({
  name: "@user",
  initialState,
  reducers,
});

export const { changeUser } = UserSlice.actions;

export default UserSlice.reducer;
