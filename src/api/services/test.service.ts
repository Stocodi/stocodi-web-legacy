import { api } from "../config/api";

export const testService = {
    startTest: async () => {
        return api.Post(`/statistics/start`, {});
    },

    endTest: async () => {
        return api.Post(`/statistics/end`, {});
    },
};
