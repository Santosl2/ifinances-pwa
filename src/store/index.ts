import { createWrapper, HYDRATE } from "next-redux-wrapper";

import { ModalProps } from "@/interfaces/Modal";
import { UserData } from "@/interfaces/User";
import { configureStore } from "@reduxjs/toolkit";

import { combinedReducer } from "./reducers";

type Payload = {
  type: string;
  payload: {
    user: UserData;
    modal: ModalProps;
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

export type AppDispatch = typeof makeStore.dispatch;
export type RootState = ReturnType<typeof makeStore.getState>;

export const wrapper = createWrapper(() => makeStore, { debug: false });
