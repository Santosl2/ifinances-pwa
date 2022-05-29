import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./users/UserReducers";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
