export interface ISignInRequestBody {
    email: string;
    password: string;
}

export interface ISignInResponseBody {
    member_id: number;
    member_nickname: string;
    access_token: string;
    refresh_token: string;
}

export interface ISignUpRequestBody {
    email: string;
    password: string;
    name: string;
    nickname: string;
    birth_date: string;
    interest_categories: string[];
    gender: "MALE" | "FEMALE" | null;
}

export interface ISignUpResponseBody {
    member_id: number;
}
