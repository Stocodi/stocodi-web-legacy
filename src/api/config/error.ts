export class ApiError extends Error {
    public status: number;

    constructor(status: number) {
        super("HTTP Request Failed");
        this.status = status;
    }
}
