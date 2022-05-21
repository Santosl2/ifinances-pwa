/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { GlobalStyle } from "@/../styles/globalStyle";
import { Header } from "@/components";
import "../../styles/globals.scss";

interface AppProps {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
