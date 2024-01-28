export const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
/**
 * 이메일 형식 검사
 */
export const verifyEmail = (email: string): boolean => {
    if (!emailRegExp.exec(email)) return false;
    return true;
};

export const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
/**
 * 영문 숫자 특수기호 조합 8~15 자리
 */
export const verifyPassword = (password: string): boolean => {
    if (!pwRegExp.exec(password)) return false;
    return true;
};

export const phoneRegExp = /^[0-9]{3}[0-9]{4}[0-9]{4}$/;

export const verifyPhone = (phone: string): boolean => {
    if (!phoneRegExp.exec(phone)) return false;
    return true;
};

export const birthRegExp = /^[0-9]{4}[0-1][0-9][0-3][1-9]/;

export const verifyBirth = (birth: string): boolean => {
    if (!birthRegExp.exec(birth)) return false;
    return true;
};
