import MongoRepository from "../../generic/infrastructure/mongoRepository";
import IProductRepository from "../domain/IProductRepository";
import { ProductId } from "../types";
import type Product from "../domain/product";

class ProductRepository extends MongoRepository<Product, ProductId> implements IProductRepository {}

export default new ProductRepository();
