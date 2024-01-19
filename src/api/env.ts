export const API_BASE_URL = (import.meta.env.VITE_PRODUCTION_API_BASE_URL as string) || (import.meta.env.VITE_API_BASE_URL as string);

export const COOKIE_NICKNAME = (import.meta.env.VITE_PRODUCTION_COOKIE_NICKNAME as string) || (import.meta.env.VITE_COOKIE_NICKNAME as string);
export const COOKIE_ACCESS = (import.meta.env.VITE_PRODUCTION_COOKIE_ACCESS as string) || (import.meta.env.VITE_COOKIE_ACCESS as string);
export const COOKIE_REFRESH = (import.meta.env.VITE_PRODUCTION_COOKIE_REFRESH as string) || (import.meta.env.VITE_COOKIE_REFRESH as string);

export const COOKIE_PATH = (import.meta.env.VITE_PRODUCTION_COOKIE_PATH as string) || (import.meta.env.VITE_COOKIE_PATH as string);
export const COOKIE_DOMAIN = (import.meta.env.VITE_PRODUCTION_COOKIE_DOMAIN as string) || (import.meta.env.VITE_COOKIE_DOMAIN as string);

export const KAKAO_SDK = import.meta.env.VITE_KAKAO_API_KEY as string;
