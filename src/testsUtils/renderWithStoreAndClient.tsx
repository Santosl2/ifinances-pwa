/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { RootState } from "@/store";
import { combinedReducer } from "@/store/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";

export const queryClientTest = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const testStore = (state: Partial<RootState>) => {
  return configureStore({
    reducer: combinedReducer,
    preloadedState: state,
  });
};

export const renderWithStoreAndClient = (
  component: any,
  initialState: any = {}
) => {
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <Provider store={testStore(initialState)}>
        <QueryClientProvider client={queryClientTest}>
          {children}
        </QueryClientProvider>
        <ToastContainer />
      </Provider>
    );
  }
  return render(component, { wrapper: Wrapper });
};
