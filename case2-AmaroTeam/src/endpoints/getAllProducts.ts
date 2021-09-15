import { Request, Response } from "express"
import { searchAll } from "../data/searchAll"
import { Product } from "../types"

export const getAllProducts = async(req: Request, res: Response): Promise<any> => {
    try {
        const products: Product[] | undefined = await searchAll()
        if(!products){
            return res.status(404).send([])
        }
        const listProducts: {products: Product[]} = {products}
        res.status(200).send(listProducts)
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}