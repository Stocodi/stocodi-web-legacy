import { GetAccessToken } from "../../api/config/cookies";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    if (!GetAccessToken()) return <></>;
    else return <>{children}</>;
};
