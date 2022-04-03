/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Request, Response } from "express";
import ProductsController from "./infrastructure/products.controller";
import ProductsService from "./application/products.service";

const endpointHandler = require("endpoint-handler");

const router = express.Router();
const { route } = endpointHandler(router);

const service = () => new ProductsService();
const controller = () => new ProductsController(service());

route.get("/", (req: Request, res: Response) => controller().getAll(req, res));

export default router;
