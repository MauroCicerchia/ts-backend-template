class HttpException extends Error {
    statusCode?: number;
    body: object;

    constructor(message?: string) {
        super(message);
        delete this.stack;
        this.statusCode = 500;
        this.body = {
            message: message,
        };
    }
}

export default HttpException;
