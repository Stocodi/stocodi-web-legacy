import { api } from "../config/api";

import {
    IGetAllLectureResponse,
    IGetLectureByIdResponse,
    IUploadLectureRequestBody,
    ISearchLectureResponseBody,
    IViewLectureResponseBody,
} from "../interface/lecture.interface";

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

    toggleLikeLecture: async (id: number) => {
        return api.Put<Record<string, never>, boolean>(`/lectures/likes/${id}`, {});
    },

    checkLikeLecture: async (id: number) => {
        return api.Get<boolean>(`/lectures/likes/${id}`);
    },
};
