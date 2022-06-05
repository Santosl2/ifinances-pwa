import axios from "axios";
import { parseCookies } from "nookies";

import { LOGIN_COOKIE_NAME } from "@/constants";
import { UserData } from "@/interfaces/User";

export const api = axios.create({
  baseURL: "/api",
});

const cookies = parseCookies();
const userCookie = cookies[LOGIN_COOKIE_NAME];

if (userCookie) {
  const userTokenData = JSON.parse(userCookie) as UserData;

  api.defaults.headers.common.Authorization = `Bearer ${userTokenData.accessToken}`;
}
