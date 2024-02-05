import { useState, useEffect, useCallback } from "react";

import { API_BASE_URL } from "../api/config/env";

export enum STATUS {
    IDLE,
    SUCCESS,
    PENDING,
    ERROR,
}

/**
 * @param url BASE_URL 을 제외한 엔드포인트
 * @param token Access Token
 * @returns {status, data, error}
 */
export const useGetRequest = <ResponseBody,>(url: string, token?: string) => {
    const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
    const [data, setData] = useState<ResponseBody | null>(null);
    const [error, setError] = useState<string | unknown>(null);

    const request = useCallback(async () => {
        const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {};
        try {
            setStatus(STATUS.PENDING);
            const response = await fetch(API_BASE_URL + url, {
                method: "GET",
                headers: headers,
            });
            if (!response.ok) throw new Error(response.statusText);
            const data = (await response.json()) as ResponseBody;
            setStatus(STATUS.SUCCESS);
            setData(data);
        } catch (err) {
            setStatus(STATUS.ERROR);
            setData(null);
            setError(err);
        }
    }, [url, token]);

    useEffect(() => {
        request();
    }, [request]);

    return { status, data, error };
};

/**
 * @param url BASE_URL 을 제외한 엔드포인트
 * @param body Request Body
 * @param token Access Token
 * @returns {status, data, error}
 */
export const usePostRequest = <ResponseBody, RequestBody>(url: string, body: RequestBody, token?: string) => {
    const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
    const [data, setData] = useState<ResponseBody | null>(null);

    const [error, setError] = useState<string | unknown>(null);

    const request = useCallback(async () => {
        const headers: HeadersInit = token
            ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
            : { "Content-Type": "application/json" };
        try {
            setStatus(STATUS.PENDING);
            const response = await fetch(API_BASE_URL + url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            });
            if (!response.ok) throw new Error(response.statusText);
            const data = (await response.json()) as ResponseBody;
            setStatus(STATUS.SUCCESS);
            setData(data);
        } catch (err) {
            setStatus(STATUS.ERROR);
            setData(null);
            setError(err);
        }
    }, [url, token, body]);

    useEffect(() => {
        request();
    }, [request]);

    return { status, data, error };
};
