import HttpException from "./httpException";

class EntityNotFound extends HttpException {
    constructor(message?: string) {
        super(message);
        this.name = "EntityNotFound";
        this.statusCode = 404;
    }
}

export default EntityNotFound;
