import { destroyCookie, parseCookies, setCookie } from "nookies";

export function cookieInsert(name: string, value: string) {
  setCookie(null, name, value, {
    maxAge: 3600, // 1h,
    path: "/",
  });
}

export function cookieDestroy(name: string) {
  destroyCookie(null, name);
}

export function cookieGet(name: string) {
  const { [name]: cookie } = parseCookies();

  return cookie ?? undefined;
}
