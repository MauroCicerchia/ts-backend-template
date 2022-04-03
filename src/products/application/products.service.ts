import { IService } from "../../types/types";

class ProductsService implements IService {
    getAll() {
        return Promise.resolve([]);
    }
}

export default ProductsService;
