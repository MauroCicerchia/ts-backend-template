import { ProductId } from "../types";
import type Product from "./product";

interface IProductRepository {
    getAll(): Promise<Product[]>;
    getById(id: ProductId): Promise<Product>;
    create(product: Product): Promise<Product>;
    update(product: Product): Promise<Product>;
    delete(id: ProductId): Promise<void>;
}

export default IProductRepository;
