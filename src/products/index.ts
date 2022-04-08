/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Request, Response } from "express";
import ProductsController from "./infrastructure/products.controller";
import ProductsService from "./application/products.service";
import ProductRepository from "./infrastructure/productRepository";

const endpointHandler = require("endpoint-handler");

const router = express.Router();
const { route } = endpointHandler(router);

const productRepository = () => new ProductRepository();
const service = () => new ProductsService(productRepository());
const controller = () => new ProductsController(service());

route.get("/", (req: Request, res: Response) => controller().getAll(req, res));
route.get("/:id", (req: Request, res: Response) => controller().getById(req, res));
route.post("/", (req: Request, res: Response) => controller().create(req, res));
route.put("/:id", (req: Request, res: Response) => controller().update(req, res));
route.delete("/:id", (req: Request, res: Response) => controller().delete(req, res));

export default router;
