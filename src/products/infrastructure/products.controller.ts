import { Request, Response } from "express";
import ProductsService from "../application/products.service";

class ProductsController {
    constructor(private service: ProductsService) {}

    getAll(req: Request, res: Response) {
        return this.service.getAll();
    }
}

export default ProductsController;
