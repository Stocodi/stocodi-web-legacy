import { API_BASE_URL } from "../constants/API";
import { Cookies } from "react-cookie";

export interface ILoginResponse {
    response: {
        member_id: number;
        member_nickname: string;
        access_token: string;
        refresh_token: string;
    };
}

export const cookies = new Cookies();

export function GetAccessToken(): unknown {
    return cookies.get("access_token");
}

export async function GetRefreshToken() {
    const response = await fetch(`/auth/reissue-token`, {
        method: "POST",
    });

    // Refresh Token 없음
    if (response.status === 444) {
        alert("다시 로그인해주세요");
        window.location.href = "/auth/signin";
    }
}

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
        const data = (await response.json()) as ILoginResponse;

        const options = { path: "/", domain: ".localhost" };
        cookies.set("stocodi-nickname", data.response.member_nickname, options);
        cookies.set("stocodi-access", data.response.access_token, options);
        cookies.set("stocodi-refresh", data.response.refresh_token, options);
    };
    await request();
}
