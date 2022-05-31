import { combineReducers } from "@reduxjs/toolkit";

import UserReducers from "./users/UserReducers";

export const combinedReducer = combineReducers({
  UserReducers,
});
