import { IService } from "../../types/types";
import Product from "../domain/product";
import productRepository from "../domain/productRepository";
import { ProductId } from "../types";

class ProductsService implements IService {
    getAll() {
        return productRepository.getAll();
    }

    getById(id: ProductId) {
        return productRepository.getById(id);
    }

    create(product: Product) {
        return productRepository.create(product);
    }

    update(product: Product) {
        return productRepository.update(product);
    }

    delete(id: ProductId) {
        return productRepository.delete(id);
    }
}

export default ProductsService;
