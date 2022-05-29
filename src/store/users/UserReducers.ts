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
      return { ...state, payload };
    },
  },
});

export const { changeUser } = UserSlice.actions;

export default UserSlice.reducer;
