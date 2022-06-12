/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NextNProgress from "nextjs-progressbar";

import { CreateTransactionModal } from "@/components";
import { queryClient } from "@/services/queryClient";
import { wrapper } from "@/store";
import { GlobalStyle } from "@styles/globalStyle";

import { ReactQueryDevtools } from "react-query/devtools";

interface AppProps {
  Component: any;
  pageProps: any;
}

// if (process.env.NODE_ENV === "development") {
//   makeServer();
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <GlobalStyle />
      <ReactQueryDevtools />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <CreateTransactionModal />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);
