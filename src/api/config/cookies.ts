import { Cookies } from "react-cookie";

import { COOKIE_ACCESS, COOKIE_DOMAIN, COOKIE_NICKNAME, COOKIE_PATH, COOKIE_REFRESH } from "./env";

export const cookies = new Cookies();
export const cookieOptions = {
    path: COOKIE_PATH,
    domain: COOKIE_DOMAIN,
};

export function GetNickName(): string | undefined {
    return cookies.get(COOKIE_NICKNAME) as string;
}

export function GetAccessToken(): string | undefined {
    return cookies.get(COOKIE_ACCESS) as string;
}

export function GetRefreshToken(): string | undefined {
    return cookies.get(COOKIE_REFRESH) as string;
}
