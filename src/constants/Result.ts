export const GetResult = (score: number) => {
    if (0 <= score && score < 50) {
        return ResultLow[Math.floor(Math.random() * ResultLow.length)];
    } else if (50 <= score && score < 80) {
        return ResultMid[Math.floor(Math.random() * ResultMid.length)];
    } else if (80 <= score && score < 100) {
        return ResultHigh[Math.floor(Math.random() * ResultHigh.length)];
    }
};

export const ResultLow = [
    {
        img: "/img/test-1.png",
        title: "아니요 뚱인데요",
        author: "뚱이",
    },
    {
        img: "/img/test-2.png",
        title: "상상력만 발휘하면 뭐든 할 수 있다구",
        author: "스폰지밥",
    },
    {
        img: "/img/test-3.png",
        title: "노는 게 제일 좋아, 친구들 모여라",
        author: "뽀로로",
    },
    {
        img: "/img/test-4.png",
        title: "왜 사람들은 보이는 것 너머에 또 보아야 할 것이 있다는 걸 알지 못하지?",
        author: "슈렉",
    },
    {
        img: "/img/test-5.png",
        title: "사랑은 많이 양보하는 거야. 그래야 너가 사랑하는 사람을 행복하게 만들 수 있거든",
        author: "곰돌이 푸",
    },
];

export const ResultMid = [
    {
        img: "/img/test-6.png",
        title: "불가능한 경우를 제외하고 남은 것은 아무리 이상하고 믿기지 않더라도 사실이기 마련이야",
        author: "셜록",
    },
    {
        img: "/img/test-7.png",
        title: "넌 대단한 마법사야, 난 책과 지혜고요",
        author: "헤르미온느",
    },
    {
        img: "/img/test-8.png",
        title: "영웅은 태어나지 않아, 다만 만들어질 뿐이지",
        author: "아이언맨",
    },
];

export const ResultHigh = [
    {
        img: "/img/test-9.png",
        title: "가격이 잘못 매겨진 기회를 찾아라. 그게 바로 투자다. 어떤 기회가 가격이 잘못 매겨진 것인지 충분히 알아야 한다. 그게 가치투자다",
        author: "찰리멍거",
    },
    {
        img: "/img/test-10.png",
        title: "포트폴리오를 분산시키세요. 한 번에 모든 것을 거는 것은 위험합니다",
        author: "레이 달리오",
    },
    {
        img: "/img/test-11.png",
        title: "공부 없이 투자하는 것은 카드를 보지 않고 포커를 치는 것과 같다",
        author: "피터 린치",
    },
    {
        img: "/img/test-12.png",
        title: "잭팟을 터트렸다고 말하는 사람들을 부러워해선 안된다",
        author: "워렌버핏",
    },
    {
        img: "/img/test-13.png",
        title: "영리한 투자자의 고전적 정의는 모두가 팔고 있는 약세장에 매수해서 모두가 사고 있는 강세장에서 매도하는 사람이다",
        author: "벤자민 그레이엄",
    },
];
