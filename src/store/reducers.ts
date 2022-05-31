import { combineReducers } from "@reduxjs/toolkit";

import user from "./users/UserReducers";

export const combinedReducer = combineReducers({
  user,
});
