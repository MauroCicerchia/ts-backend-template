import BaseRepository from "../../generic/infrastructure/baseRepository";
import { ProductId } from "../types";
import type Product from "./product";

class ProductRepository extends BaseRepository<Product, ProductId> {}

export default new ProductRepository();
