import { connection } from "../connections";
import { Product } from "../types";

export const searchById = async(id: string): Promise<Product[]| undefined> => {
    const result = await connection("Products")
    .select("*")
    .where({id})
    return result
}