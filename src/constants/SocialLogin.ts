export interface ISocialLoginProvider {
    icon: string;
    text: string;
}

export const SocialLoginProviders: ISocialLoginProvider[] = [
    {
        icon: "./icons/social/icon-google.png",
        text: "구글 계정으로 시작",
    },
    {
        icon: "./icons/social/icon-naver.png",
        text: "네이버 계정으로 시작",
    },
    {
        icon: "./icons/social/icon-kakao.png",
        text: "카카오 계정으로 시작",
    },
];

/*
export const NAVER_URL =
    "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=" +
    import.meta.env.VITE_NAVER_CLIENT_ID +
    "&state=" +
    process.env.REACT_APP_NAVER_STATE +
    "&redirect_uri=" +
    process.env.REACT_APP_NAVER_REDIRECT_URI;

export const KAKAO_URL =
    "https://kauth.kakao.com/oauth/authorize?client_id=" +
    process.env.REACT_APP_REST_API_KEY +
    "&redirect_uri=" +
    process.env.REACT_APP_REDIRECT_URI +
    "&response_type=code";
*/
