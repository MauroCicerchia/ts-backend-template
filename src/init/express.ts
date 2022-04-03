import { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import products from "../products";

export default function initExpress(app: Application) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors({ origin: true }));

    app.get("/healthz", (req, res) => {
        res.status(200).send("OK");
    });
    app.use("/products", products);
}
