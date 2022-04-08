import { ProductDocument } from "../infrastructure/productModel";
import { ProductId } from "../types";
import type Product from "./product";

interface IProductRepository {
    getAll(): Promise<Product[]>;
    getById(id: ProductId): Promise<ProductDocument>;
    create(product: Product): Promise<ProductDocument>;
    update(id: ProductId, product: Product): Promise<ProductDocument>;
    delete(id: ProductId): Promise<void>;
}

export default IProductRepository;
