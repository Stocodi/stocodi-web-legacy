export const GetResult = (score: number) => {
    if (0 <= score && score < 50) {
        return ResultLow[Math.floor(Math.random() * ResultLow.length)];
    } else if (50 <= score && score < 80) {
        return ResultMid[Math.floor(Math.random() * ResultMid.length)];
    } else if (80 <= score && score <= 100) {
        return ResultHigh[Math.floor(Math.random() * ResultHigh.length)];
    }
};

export const GetResultCommentIndex = (score: number) => {
    if (score === 100) return 4;
    return ((score / 20 + 1).toFixed(0) as unknown as number) - 1;
};

export const ResultComment = {
    comment_basic: [
        "경제에 대한 기초적인 이해가 필요한 단계입니다. 이 문제에서는 물가지수와 기준금리의 관계에 대한 오해가 있습니다. 물가지수는 국가의 통화량과 물가 상승률을 나타내는 지표로, 중앙은행의 기준금리는 이를 조절하는데 영향을 미칩니다.",
        "경제에 대한 기초적인 이해가 있으나, 몇몇 개념에 대한 혼동이 있을 수 있습니다. 예를 들어, 금리가 돈의 가치에 어떻게 영향을 미치는지에 대한 개념을 좀 더 명확히 이해할 필요가 있습니다.",
        "경제에 대한 중간 수준의 이해를 가지고 있습니다. 일부 개념은 잘 이해하고 있지만, 미흡한 부분이 있을 수 있습니다. 특히 환율과 해외여행에 대한 관계를 좀 더 심화된 관점에서 이해할 필요가 있습니다.",
        "경제에 대한 기본 개념을 잘 이해하고 있습니다. 추가적인 학습과 실무 경험을 통해 더욱 향상될 수 있습니다. 인플레이션과 빈부격차에 대한 개념을 더 깊이 파고들면 좋을 것입니다.",
        "경제에 대한 높은 수준의 이해를 보여주고 있습니다. 몇몇 개념에 대한 세부적인 이해도가 높을 것으로 예상됩니다. 물가조절 정책과 중앙은행의 역할 등에 대한 더 깊은 이해를 기대할 수 있습니다.",
    ],
    comment_bank: [
        "은행상품에 대한 기초적인 이해가 부족합니다. 예금자 보호법과 은행상품의 특징에 대한 기본적인 공부가 필요합니다.",
        "은행상품에 대한 일부 기본 개념을 이해하고 있지만, 혼동이 있을 수 있습니다. 예를 들어, 시간이 지날수록 받는 이자와 관련된 문제에서 조금 더 명확한 이해가 필요합니다.",
        "은행상품에 대한 기본적인 이해가 있습니다. 예금자 보호법과 은행상품 간의 차이를 명확히 이해하는 것이 중요합니다.",
        "은행상품에 대한 중간 수준의 이해를 가지고 있습니다. 보다 심화된 내용에 대한 학습이 필요할 수 있습니다. 은행상품을 효과적으로 활용하는 방법에 대한 추가적인 공부가 필요합니다.",
        "은행상품에 대한 높은 수준의 이해를 보여주고 있습니다. 몇몇 어려운 부분도 잘 이해하고 있을 것으로 예상됩니다. 전문가 수준의 은행상품 활용 능력을 갖추고 있습니다. 향후 금융 계획 수립과 관리에 높은 수준의 자신감이 기대됩니다.",
    ],
    comment_credit: [
        "카드와 신용에 대한 기초적인 이해가 필요한 단계입니다. 신용카드와 체크카드의 차이 등을 명확히 이해하는 것이 중요합니다.",
        "카드와 신용에 대한 일부 기본 개념을 이해하고 있지만, 혼동이 있을 수 있습니다. 신용점수와 카드의 관계에 대한 이해를 더 깊이 파고들면 좋을 것입니다.",
        "카드와 신용에 대한 기본적인 이해가 있습니다. 몇몇 부분에서는 미숙할 수 있습니다. 제1금융권과 제2금융권에 대한 차이 등을 명확히 이해하는 것이 중요합니다.",
        "카드와 신용에 대한 중간 수준의 이해를 가지고 있습니다. 보다 심화된 내용에 대한 학습이 필요할 수 있습니다. 카드 사용 시의 금융 전략에 대한 이해가 높아질 것으로 기대됩니다.",
        "카드와 신용에 대한 높은 수준의 이해를 보여주고 있습니다. 몇몇 어려운 개념도 이해하고 있을 것으로 예상됩니다. 카드와 신용을 효과적으로 관리하는 방법에 대한 전문 지식을 보유하고 있습니다. 전문가 수준의 카드와 신용 관리 능력을 갖추고 있습니다. 향후 금융 전략 수립과 관리에 뛰어난 능력이 기대됩니다.",
    ],
    comment_tax: [
        "세금에 대한 기초적인 이해가 필요한 단계입니다. 은행 예금에 대한 과세 방법과 연말정산에 대한 이해가 필요합니다.",
        "세금에 대한 일부 기본 개념을 이해하고 있지만, 혼동이 있을 수 있습니다. 은행 예금과 소득에 대한 세금 부과에 대한 이해를 높이는 것이 중요합니다.",
        "세금에 대한 기본적인 이해가 있습니다. 그러나 몇몇 부분에서는 미흡할 수 있습니다. 세액공제와 연말정산에 대한 내용을 더 자세히 이해할 필요가 있습니다.",
        "세금에 대한 중간 수준의 이해를 가지고 있습니다. 세액공제와 소득공제에 대한 내용을 더 심화된 관점에서 이해하는 것이 중요합니다.",
        "세금에 대한 높은 수준의 이해를 보여주고 있습니다. 몇몇 어려운 부분도 잘 이해하고 있을 것으로 예상됩니다. 연말정산과 세액공제에 대한 전문 지식을 가지고 있습니다. 전문가 수준의 세금 전략 수립과 관리 능력을 보유하고 있습니다. 향후 금융 전략 수립과 관리에 뛰어난 능력이 기대됩니다.",
    ],
    comment_insurance: [
        "보험에 대한 기초적인 이해가 필요한 단계입니다. 주보험과 특약, 실손의료보험에 대한 기본적인 지식이 부족합니다.",
        "보험에 대한 일부 기본 개념을 이해하고 있지만, 혼동이 있을 수 있습니다. 주보험과 특약에 대한 차이를 명확히 이해하는 것이 중요합니다.",
        "보험에 대한 기본적인 이해가 있습니다. 그러나 몇몇 부분에서는 미흡할 수 있습니다. 보험금 지급과 관련된 내용을 더 자세히 이해할 필요가 있습니다.",
        "보험에 대한 중간 수준의 이해를 가지고 있습니다. 실손의료보험에 대한 내용을 더 깊이 파고들면 좋을 것입니다.",
        "보험에 대한 높은 수준의 이해를 보여주고 있습니다. 몇몇 어려운 부분도 잘 이해하고 있을 것으로 예상됩니다. 다양한 보험 상품에 대한 심화된 지식을 보유하고 있습니다. 전문가 수준의 보험 전략 수립과 관리 능력을 갖추고 있습니다. 향후 금융 전략 수립과 관리에 뛰어난 능력이 기대됩니다.",
    ],
    comment_investment: [
        "투자에 대한 기초적인 이해가 필요한 단계입니다. 주식과 채권, ETF, 레버리지 상품에 대한 기본적인 지식이 부족합니다.",
        "투자에 대한 일부 기본 개념을 이해하고 있지만, 혼동이 있을 수 있습니다. 주식과 채권에 대한 차이를 명확히 이해하는 것이 중요합니다.",
        "투자에 대한 중간 수준의 이해를 가지고 있습니다. 주식과 채권의 위험과 수익에 대한 내용을 더 깊이 파고들면 좋을 것입니다.",
        "투자에 대한 높은 수준의 이해를 보여주고 있습니다. 몇몇 어려운 부분도 잘 이해하고 있을 것으로 예상됩니다. 다양한 투자 전략에 대한 전문 지식을 가지고 있습니다.",
        "투자에 대한 탁월한 지식을 갖고 있습니다. 전문가 수준의 투자 전략 수립과 관리 능력을 갖추고 있습니다. 향후 금융 전략 수립과 관리에 뛰어난 능력이 기대됩니다.",
    ],
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
        title: "가격이 잘못 매겨진 기회를 찾아라. 그게 바로 투자다.",
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
