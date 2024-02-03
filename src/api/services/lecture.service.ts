import {
    IGetAllLectureResponse,
    IGetLectureByIdResponse,
    IUploadLectureRequestBody,
    ISearchLectureResponseBody,
    IViewLectureResponseBody,
    IGetAllLectureCommentsResponseBody,
    IWriteLectureCommentRequestBody,
} from "../interface/lecture.interface";

import { api } from "../config/api";

export const lectureService = {
    getAllLectures: async () => {
        return api.Get<IGetAllLectureResponse>("/lectures");
    },

    getLectureById: async (id: number) => {
        return api.Get<IGetLectureByIdResponse>(`/lectures/${id}`);
    },

    uploadLecture: async (body: IUploadLectureRequestBody, token: string) => {
        return api.Post<typeof body, number>("/lectures", body, token);
    },

    deleteLecture: async (id: number) => {
        return api.Delete<string>(`/lectures/${id}`);
    },

    searchLecture: async (key: string) => {
        return api.Get<ISearchLectureResponseBody>(`/lectures?key=${key}`);
    },

    viewLecture: async (id: number) => {
        return api.Put<Record<string, never>, IViewLectureResponseBody>(`/lectures/views/${id}`, {});
    },

    toggleLikeLecture: async (id: number, token?: string) => {
        return api.Put<Record<string, never>, boolean>(`/likes/${id}`, {}, token);
    },

    checkLikeLecture: async (id: number) => {
        return api.Get<boolean>(`/likes/${id}`);
    },

    getAllLectureComments: async (id: number) => {
        return api.Get<IGetAllLectureCommentsResponseBody>(`/comments/lectures/${id}`);
    },

    writeLectureComment: async (body: IWriteLectureCommentRequestBody, token?: string) => {
        return api.Post(`/comments`, body, token);
    },
};
