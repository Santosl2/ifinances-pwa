/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import { RootState } from "@/store";
import { combinedReducer } from "@/store/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";

const queryClientTest = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const testStore = (state: Partial<RootState>) => {
  return configureStore({
    reducer: combinedReducer,
    preloadedState: state,
  });
};

// todo change to renderCustom

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
      </Provider>
    );
  }
  return render(component, { wrapper: Wrapper });
};
