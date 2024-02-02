export interface IGetAllLectureResponse {
    response: [
        {
            id: number;
            video_link: string;
            author: string;
            title: string;
            description: string;
            tags: string[];
            views: number;
            likes: number;
        },
    ];
}

export interface IGetLectureByIdResponse {
    response: {
        id: number;
        video_link: string;
        author: string;
        title: string;
        description: string;
        tags: string[];
        views: number;
        likes: number;
    };
}

export interface IPostLectureRequestBody {
    video_link: string;
    title: string;
    author: string;
    description: string;
    tags: string[];
}

export type ISearchLectureResponseBody = IGetLectureByIdResponse;

export interface IViewLectureResponseBody {
    response: number;
}