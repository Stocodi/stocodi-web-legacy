import { API_BASE_URL, COOKIE_ACCESS, COOKIE_NICKNAME, COOKIE_REFRESH } from "./env";
import { Cookies } from "react-cookie";
import { IUserSignup } from "../store/user-signup-slice";

export interface ILoginResponseBody {
    response: {
        member_id: number;
        member_nickname: string;
        access_token: string;
        refresh_token: string;
    };
}

export interface ISignupRequestBody extends Omit<IUserSignup, "interest_categories"> {
    interest_categories: string[];
}

export const cookies = new Cookies();
export const cookieOptions = {
    path: "/",
    domain: ".localhost",
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

/**
 * 토큰 재발급 요청 함수
 */
export async function ReissueToken() {
    const response = await fetch(`/auth/reissue-token`, {
        method: "POST",
    });
    // Refresh Token 없음
    if (response.status === 444) {
        alert("다시 로그인해주세요");
        window.location.href = "/auth/signin";
    }
}

/**
 * 로그인 요청 후, 쿠키 설정
 * @param email 로그인 아이디
 * @param password 로그인 패스워드
 */
export async function handleLogin(email: string, password: string) {
    const request = async () => {
        const response = await fetch(API_BASE_URL + "/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        if (!response.ok) throw new Error("아이디 혹은 비밀번호가 일치하지 않습니다");
        const data = (await response.json()) as ILoginResponseBody;

        cookies.set(COOKIE_NICKNAME, data.response.member_nickname, cookieOptions);
        cookies.set(COOKIE_ACCESS, data.response.access_token, cookieOptions);
        cookies.set(COOKIE_REFRESH, data.response.refresh_token, cookieOptions);
    };
    await request();
}

/**
 * 로그아웃 요청 후 쿠키 삭제
 */
export async function handleLogout() {
    const request = async () => {
        const response = await fetch(API_BASE_URL + "/auth/logout", {
            method: "GET",
        });
        if (!response.ok) throw new Error("로그아웃에 실패하였습니다");

        cookies.remove(COOKIE_NICKNAME, cookieOptions);
        cookies.remove(COOKIE_ACCESS, cookieOptions);
        cookies.remove(COOKIE_REFRESH, cookieOptions);
    };
    await request();
}

export async function handleSignup(body: ISignupRequestBody) {
    const request = async () => {
        const response = await fetch(API_BASE_URL + "/auth/members", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) throw new Error("회원가입에 실패하였습니다");
    };
    await request();
}
