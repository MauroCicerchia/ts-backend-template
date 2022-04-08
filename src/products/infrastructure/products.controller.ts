import { Request, Response } from "express";
import _ from "lodash";
import ProductsService from "../application/products.service";
import Product from "../domain/product";

class ProductsController {
    constructor(private service: ProductsService) {}

    getAll(req: Request, res: Response) {
        return this.service.getAll();
    }

    getById(req: Request, res: Response) {
        return this.service.getById(req.params.id);
    }

    create(req: Request, res: Response) {
        this.validateProduct(req.body);

        return this.service.create(req.body);
    }

    update(req: Request, res: Response) {
        return this.service.update(req.params.id, req.body);
    }

    delete(req: Request, res: Response) {
        return this.service.delete(req.params.id);
    }

    private validateProduct(product: any) {
        _(["name", "price", "stock"]).forEach((key: string) => {
            if (product[key] === undefined || product[key] === null) {
                throw new Error(`Missing ${key}`);
            }
        });
    }
}

export default ProductsController;
