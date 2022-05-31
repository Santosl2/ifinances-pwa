/* eslint-disable no-return-await */
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { parseCookies } from "nookies";

import { LOGIN_COOKIE_NAME } from "@/constants";
import { wrapper } from "@/store";

export function GuestSSR<P>(fn: GetServerSideProps<P>) {
  return wrapper.getServerSideProps((store) => {
    return async (
      ctx: GetServerSidePropsContext
    ): Promise<GetServerSidePropsResult<P>> => {
      const cookies = parseCookies(ctx);
      const userCookie = cookies[LOGIN_COOKIE_NAME];

      if (userCookie) {
        return {
          redirect: {
            destination: "/dashboard",
            permanent: false,
          },
        };
      }

      return await fn(ctx);
    };
  });
}
