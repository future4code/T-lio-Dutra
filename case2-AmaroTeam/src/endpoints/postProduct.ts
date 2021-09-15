import { Request, Response } from "express"
import { insertProducts } from "../data/insertProduct"
import { Product } from "../types"

export const postProduct = async(req: Request, res: Response): Promise<any> => {
    try {
        let { name, tag, description } = req.body
        if (!name || !tag ){
            res.status(400).send({message: "Name and tag are required."})
            return
        }

        const newProduct: Product = {name, tag, description}

        await insertProducts(newProduct)
        res.status(201).send({message: "Product created successfully."})
        
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}