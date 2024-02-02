import { API_BASE_URL } from "../env";
import { ApiError } from "./error";

export default class Api {
    public async Get<ResponseBody>(url: string, token?: string): Promise<ResponseBody> {
        const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await fetch(API_BASE_URL + url, {
            method: "GET",
            headers: headers,
        });
        if (!response.ok) throw new ApiError(response.status);
        return response.json() as Promise<ResponseBody>;
    }

    public async Post<RequestBody, ResponseBody>(url: string, body: RequestBody, token?: string): Promise<ResponseBody> {
        const headers: HeadersInit = token
            ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
            : { "Content-Type": "application/json" };
        const response = await fetch(API_BASE_URL + url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
        });
        if (!response.ok) throw new ApiError(response.status);
        return response.json() as Promise<ResponseBody>;
    }

    public async Put<RequestBody, ResponseBody>(url: string, body: RequestBody, token?: string): Promise<ResponseBody> {
        const headers: HeadersInit = token
            ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
            : { "Content-Type": "application/json" };
        const response = await fetch(API_BASE_URL + url, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(body),
        });
        if (!response.ok) throw new Error(`PUT Request Failed ${url}`);
        return response.json() as Promise<ResponseBody>;
    }

    public async Delete<ResponseBody>(url: string, token?: string): Promise<ResponseBody> {
        const headers: HeadersInit = token
            ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
            : { "Content-Type": "application/json" };
        const response = await fetch(API_BASE_URL + url, {
            method: "DELETE",
            headers: headers,
        });
        if (!response.ok) throw new ApiError(response.status);
        return response.json() as Promise<ResponseBody>;
    }
}
