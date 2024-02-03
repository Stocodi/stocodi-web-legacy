import { cookies, cookieOptions } from "../config/cookies";
import { COOKIE_ACCESS, COOKIE_NICKNAME, COOKIE_REFRESH } from "../config/env";
import { ISignInResponseBody, ISignInRequestBody, ISignUpRequestBody, ISignUpResponseBody } from "../interface/auth.interface";

import { api } from "../config/api";

export const authService = {
    signIn: async (body: ISignInRequestBody) => {
        const data = await api.Post<ISignInRequestBody, ISignInResponseBody>("/auth/login", body);
        console.log(data);
        cookies.set(COOKIE_NICKNAME, data.response.member_nickname, cookieOptions);
        cookies.set(COOKIE_ACCESS, data.response.access_token, cookieOptions);
        cookies.set(COOKIE_REFRESH, data.response.refresh_token, cookieOptions);
        return data;
    },

    signOut: async (token?: string) => {
        const data = await api.Get<string>("/auth/logout", token);
        cookies.remove(COOKIE_NICKNAME, cookieOptions);
        cookies.remove(COOKIE_ACCESS, cookieOptions);
        cookies.remove(COOKIE_REFRESH, cookieOptions);
        return data;
    },

    signUp: async (body: ISignUpRequestBody) => {
        return api.Post<ISignUpRequestBody, ISignUpResponseBody>(`/auth/members`, body);
    },

    verifyEmail: async (email: string) => {
        return api.Get<boolean>(`/auth/email?email=${email}`);
    },

    verifyNickName: async (nickname: string) => {
        return api.Get<boolean>(`/auth/nicknames?nickname=${nickname}`);
    },
};
