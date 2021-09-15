import { connection } from "../connections";
import { Product } from "../types";

export const searchAll = async(): Promise<Product[]| undefined> => {
    const result = await connection("Products")
    .select("*")
    return result
}