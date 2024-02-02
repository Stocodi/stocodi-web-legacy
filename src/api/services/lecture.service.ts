import { inject, injectable } from "tsyringe";
import Api from "../config/api";

import {
    IGetAllLectureResponse,
    IGetLectureByIdResponse,
    IPostLectureRequestBody,
    ISearchLectureResponseBody,
    IViewLectureResponseBody,
} from "../interface/lecture.interface";

@injectable()
export default class LectureService {
    constructor(
        @inject("Api")
        private readonly api: Api,
    ) {}

    public async getAllLectures() {
        return this.api.Get<IGetAllLectureResponse>("/lectures");
    }

    public async getLectureById(id: number) {
        return this.api.Get<IGetLectureByIdResponse>(`/lectures/${id}`);
    }

    public async postLecture(body: IPostLectureRequestBody, token: string) {
        return this.api.Post<typeof body, number>("/lectures", body, token);
    }

    public async deleteLecture(id: number) {
        return this.api.Delete<string>(`/lectures/${id}`);
    }

    public async searchLecture(key: string) {
        return this.api.Get<ISearchLectureResponseBody>(`/lectures?key=${key}`);
    }

    public async viewLecture(id: number) {
        return this.api.Put<Record<string, never>, IViewLectureResponseBody>(`/lectures/views/${id}`, {});
    }
}
