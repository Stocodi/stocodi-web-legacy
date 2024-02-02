import { inject, injectable } from "tsyringe";
import Api from "../config/api";

import { ISignInResponseBody, ISignInRequestBody, ISignUpRequestBody, ISignUpResponseBody } from "../interface/auth.interface";

@injectable()
export default class AuthService {
    constructor(
        @inject("Api")
        private readonly api: Api,
    ) {}

    public async signIn(body: ISignInRequestBody) {
        return this.api.Post<ISignInRequestBody, ISignInResponseBody>("/auth/login", body);
    }

    public async signOut(token?: string) {
        return this.api.Get<string>("/auth/logout", token);
    }

    public async signUp(body: ISignUpRequestBody) {
        return this.api.Post<ISignUpRequestBody, ISignUpResponseBody>(`/auth/members`, body);
    }

    public async verifyEmail(email: string) {
        return this.api.Get<boolean>(`/auth/email?email=${email}`);
    }

    public async verifyNickname(nickname: string) {
        return this.api.Get<boolean>(`/auth/nicknames?nickname=${nickname}`);
    }
}
