import { connection } from "../connections";
import { Product } from "../types";

export const insertProducts = async(newProduct: Product): Promise<any> => {
    await connection("Products")
    .insert(newProduct)
}