import { ObjectId } from "mongoose";
import MongoRepository from "../../generic/infrastructure/mongoRepository";
import IProductRepository from "../domain/IProductRepository";
import productModel, { ProductDocument } from "./productModel";

class ProductRepository extends MongoRepository<ProductDocument, ObjectId> implements IProductRepository {
    constructor() {
        super(productModel);
    }
}

export default ProductRepository;
