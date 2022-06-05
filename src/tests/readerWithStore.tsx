/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { ReactNode } from "react";
import { Provider } from "react-redux";

import { RootState } from "@/store";
import { combinedReducer } from "@/store/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";

const testStore = (state: Partial<RootState>) => {
  return configureStore({
    reducer: combinedReducer,
    preloadedState: state,
  });
};

export const renderWithStore = (component: any, initialState: any = {}) => {
  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={testStore(initialState)}>{children}</Provider>;
  }
  return render(component, { wrapper: Wrapper });
};
