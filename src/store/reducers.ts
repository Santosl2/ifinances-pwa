import { combineReducers } from "@reduxjs/toolkit";

import modal from "./modal/ModalReducers";
import user from "./users/UserReducers";

export const combinedReducer = combineReducers({
  user,
  modal,
});
