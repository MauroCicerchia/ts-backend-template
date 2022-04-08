import express, { Application, Request, Response } from "express";
import initExpress from "./init/express";
import initMongo from "./init/mongo";
import config from "./environment/config";

const app: Application = express();

initExpress(app);

initMongo().then(() =>
    app.listen(config.port, () => {
        console.log(`Server is running on PORT ${config.port}`);
    }),
);
