import { createWrapper, HYDRATE } from "next-redux-wrapper";

import { configureStore } from "@reduxjs/toolkit";

import { combinedReducer } from "./reducers";

const masterReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      counter: {
        count: state.counter.count + action.payload.counter.count,
      },
      users: {
        users: [...action.payload.users.users, ...state.users.users],
      },
    };
    return nextState;
  }
  return combinedReducer(state, action);
};

const makeStore = configureStore({
  reducer: masterReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const wrapper = createWrapper(() => makeStore, { debug: true });
