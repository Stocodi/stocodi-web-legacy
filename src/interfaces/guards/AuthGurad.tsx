import { GetAccessToken } from "../../api/Authentication";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    if (!GetAccessToken()) return <></>;
    else return <>{children}</>;
};
