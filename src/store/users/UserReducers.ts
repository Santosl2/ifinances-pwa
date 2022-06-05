import { UserData } from "@/interfaces/User";
import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers";

const initialState: UserData = {
  id: "",
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
