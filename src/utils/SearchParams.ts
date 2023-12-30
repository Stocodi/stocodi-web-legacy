export const GetSearchParams = (searchParams: URLSearchParams, key: string) => {
    return decodeURI(searchParams.toString().replace(`${key}=`, ""));
};
