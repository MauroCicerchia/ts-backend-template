import { Document, Schema, model } from "mongoose";
import Product from "../domain/product";

export type ProductDocument = Product & Document;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
});

export default model<ProductDocument>("Product", productSchema);
