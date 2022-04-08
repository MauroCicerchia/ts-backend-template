import { IService } from "../../types/types";
import IProductRepository from "../domain/IProductRepository";
import Product from "../domain/product";

class ProductsService implements IService {
    constructor(private productRepository: IProductRepository) {}

    getAll() {
        return this.productRepository.getAll();
    }

    getById(id: string) {
        return this.productRepository.getById(id);
    }

    create(product: Product) {
        return this.productRepository.create(product);
    }

    update(id: string, product: Product) {
        return this.productRepository.update(id, product);
    }

    delete(id: string) {
        return this.productRepository.delete(id);
    }
}

export default ProductsService;
