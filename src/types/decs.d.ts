declare module "Express" {
    interface Request {
        user?: unknown;
    }
}

// Extend Class Error to have statusCode
declare module "Error" {
    interface Error {
        statusCode?: number;
    }
}
