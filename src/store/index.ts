import { createWrapper, HYDRATE } from "next-redux-wrapper";

import { configureStore } from "@reduxjs/toolkit";

import { combinedReducer } from "./reducers";
import { UserStateProps } from "./users/interfaces/User";

type Payload = {
  type: string;
  payload: {
    user: UserStateProps;
  };
};

const masterReducer = (state: any, action: Payload) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      user: {
        ...action.payload.user,
      },
    };

    return nextState;
  }
  return combinedReducer(state, action);
};

const makeStore = configureStore({
  reducer: masterReducer,
});

export const wrapper = createWrapper(() => makeStore, { debug: false });
