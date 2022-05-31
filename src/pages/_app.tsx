/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { queryClient } from "@/services/queryClient";
import { wrapper } from "@/store";
import { GlobalStyle } from "@styles/globalStyle";

interface AppProps {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);
