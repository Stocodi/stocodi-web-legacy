export class ApiError extends Error {
    private readonly status: string;
    private readonly response: unknown;

    constructor(message: string, status: string, response: unknown) {
        super(message);
        this.status = status;
        this.response = response;
    }
}
