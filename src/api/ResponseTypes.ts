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
        title: string;
        description: string;
        tags: string[];
        views: number;
        likes: number;
    };
}

export interface ILectureCommentResponse {
    comment_id: number;
    member_id: number;
    lecture_id: number;
    created_at: string;
    author: string;
    content: string;
}

export interface IGetAllLectureCommentsResponse {
    response: ILectureCommentResponse[];
}
