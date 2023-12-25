export interface INavMenu {
    key: number;
    to: string;
    text: string;
}

export const NavMenu: INavMenu[] = [
    {
        key: 1,
        to: "/experiment",
        text: "투자실험",
    },
    {
        key: 2,
        to: "/lectures",
        text: "강의",
    },
    {
        key: 3,
        to: "/column",
        text: "칼럼",
    },
    {
        key: 4,
        to: "/community",
        text: "커뮤니티",
    },
    {
        key: 5,
        to: "/mypage/portfolio",
        text: "마이페이지",
    },
];
