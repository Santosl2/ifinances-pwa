import { GlobalStyle } from "@/styles/globalStyle";
import { addDecorator } from "@storybook/react";

import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import {
  queryClientTest,
  testStore,
} from "@/testsUtils/renderWithStoreAndClient";

const store = testStore({ modal: { isOpen: true } });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <>
    <Provider store={store}>
      <QueryClientProvider client={queryClientTest}>
        <GlobalStyle />
        {story()}
      </QueryClientProvider>
    </Provider>
  </>
));
