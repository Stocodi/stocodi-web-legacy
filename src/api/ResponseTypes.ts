export interface IGetAllLectureResponse {
    response: [
        {
            id: number;
            video_link: string;
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
        title: string;
        description: string;
        tags: string[];
        views: number;
        likes: number;
    };
}
