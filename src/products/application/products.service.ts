import { IService } from "../../types/types";
import IProductRepository from "../domain/IProductRepository";
import Product from "../domain/product";
import { ProductId } from "../types";

class ProductsService implements IService {
    constructor(private productRepository: IProductRepository) {}

    getAll() {
        return this.productRepository.getAll();
    }

    getById(id: ProductId) {
        return this.productRepository.getById(id);
    }

    create(product: Product) {
        return this.productRepository.create(product);
    }

    update(product: Product) {
        return this.productRepository.update(product);
    }

    delete(id: ProductId) {
        return this.productRepository.delete(id);
    }
}

export default ProductsService;
