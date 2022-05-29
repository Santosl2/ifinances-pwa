/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { queryClient } from "@/services/queryClient";
import store from "@/store";
import { GlobalStyle } from "@styles/globalStyle";

import { Provider } from "react-redux";

interface AppProps {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppProps) {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const {
  //     [LOGIN_COOKIE_NAME]: cookieUser,
  //     [LOGIN_COOKIE_ACCESS_TOKEN]: accessToken,
  //     [LOGIN_COOKIE_REFRESH_TOKEN]: refreshToken,
  //   } = parseCookies();

  //   if (cookieUser && accessToken && refreshToken) {
  //     const parse = JSON.parse(cookieUser);
  //     const userData = {
  //       ...parse,
  //       refreshToken,
  //       accessToken,
  //     };
  //     console.log(userData);
  //     // dispatch(changeUser(userData));
  //   }
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyle />
        <ToastContainer />
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
