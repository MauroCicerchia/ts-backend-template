import { ProductId } from "../types";

class Product {
    constructor(
		public readonly id: ProductId,
		public readonly name: string,
		public readonly price: number,
		public readonly stock: number,
    ) {}
}

export default Product;
