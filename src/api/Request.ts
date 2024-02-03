import { API_BASE_URL } from "./env";

export async function GetRequest<ResponseBody>(url: string, token?: string): Promise<ResponseBody> {
    const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {};
    const repsonse = await fetch(API_BASE_URL + url, {
        method: "GET",
        headers: headers,
    });
    if (!repsonse.ok) throw new Error(`GET Request Failed ${url}`);
    return repsonse.json() as Promise<ResponseBody>;
}

export async function PostRequest<RequestBody, ResponseBody>(url: string, body: RequestBody, token?: string): Promise<ResponseBody> {
    const headers: HeadersInit = token
        ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
        : { "Content-Type": "application/json" };
    const response = await fetch(API_BASE_URL + url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(`POST Request Failed ${url}`);
    return response.json() as Promise<ResponseBody>;
}

export async function PutRequest<RequestBody, ResponseBody>(url: string, body: RequestBody, token?: string): Promise<ResponseBody> {
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
