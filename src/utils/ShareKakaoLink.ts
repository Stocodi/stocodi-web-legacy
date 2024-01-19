/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { KAKAO_SDK } from "../api/env";

declare global {
    interface Window {
        Kakao: any;
    }
}

export const shareKakaoLink = (title: string, description: string, imageUrl: string, link: string): void => {
    // const script = document.createElement("script");
    // script.setAttribute("src", "https://developers.kakao.com/sdk/js/kakao.js");
    // document.head.appendChild(script);

    if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
            kakao.init(KAKAO_SDK);
        }

        kakao.Share.sendDefault({
            objectType: "feed",
            content: {
                title: title,
                description,
                imageUrl,
                link: {
                    mobileWebUrl: link,
                    webUrl: link,
                },
            },
            buttons: [
                {
                    title: "title",
                    link: {
                        mobileWebUrl: link,
                        webUrl: link,
                    },
                },
            ],
        });
    }
};
