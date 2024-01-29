export interface INavMenu {
    key: number;
    to: string;
    text: string;
}

export const NavMenu: INavMenu[] = [
    {
        key: 0,
        to: "/",
        text: "강좌",
    },
    /*
    {
        key: 1,
        to: "/experiment",
        text: "투자실험",
    },
    {
        key: 2,
        to: "/column",
        text: "칼럼",
    },
    {
        key: 3,
        to: "/community",
        text: "커뮤니티",
    },
    {
        key: 4,
        to: "/mypage/portfolio",
        text: "마이페이지",
    },
    */

    {
        key: 5,
        to: "/test",
        text: "금융역량테스트",
    },
];
