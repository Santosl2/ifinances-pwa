import { NextPageContext } from "next/types";
import { destroyCookie, parseCookies, setCookie } from "nookies";

import { LOGIN_COOKIE_NAME } from "@/constants";
import { UserData } from "@/interfaces/User";

export function cookieInsert(name: string, value: string) {
  setCookie(null, name, value, {
    maxAge: 3600, // 1h,
    path: "/",
  });
}

export function cookieDestroy(name: string) {
  destroyCookie(null, name);
}

export function cookieGet(name: string, req?: NextPageContext) {
  const { [name]: cookie } = parseCookies(req ?? null);

  return cookie ?? undefined;
}

export function getUserCookie(req?: any): UserData {
  const { [LOGIN_COOKIE_NAME]: cookie } = req.cookies;
  try {
    const parsedCookie = JSON.parse(cookie) as UserData;

    return parsedCookie;
  } catch {
    return {} as UserData;
  }
}
