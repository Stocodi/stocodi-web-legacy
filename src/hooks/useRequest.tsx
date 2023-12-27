import { useState, useEffect, useCallback } from "react";
import { API_BASE_URL } from "../api/env";

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
export const useGetRequest = <ResponseData,>(url: string, token?: string) => {
    const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
    const [data, setData] = useState<ResponseData | null>(null);
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
            setStatus(STATUS.SUCCESS);
            setData(response.json() as ResponseData);
        } catch (err) {
            setStatus(STATUS.ERROR);
            setData(null);
            setError(err);
        }
    }, [url, token]);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
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
export const usePostRequest = <ResponseData, RequestBody>(url: string, body: RequestBody, token?: string) => {
    const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
    const [data, setData] = useState<ResponseData | null>(null);
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
            setStatus(STATUS.SUCCESS);
            setData(response.json() as ResponseData);
        } catch (err) {
            setStatus(STATUS.ERROR);
            setData(null);
            setError(err);
        }
    }, [url, token, body]);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        request();
    }, [request]);

    return { status, data, error };
};
