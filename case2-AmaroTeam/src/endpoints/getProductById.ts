import { Request, Response } from "express"
import { searchById } from "../data/searchById"


export const getProductById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        const product = await searchById(id)
        if (!product) {
            return res.status(404).send("Product not found.")
        }
        res.status(200).send(product)
    } catch (error: any) {
        res.send({ error: error.message || error.sqlMessage })
    }
}