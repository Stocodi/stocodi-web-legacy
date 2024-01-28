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
