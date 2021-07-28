import { Request, Response } from "express"
import connection from "../connection"
import orderUsers from "../data/orderUsers"


export const getUserByNameOrType = async (req: Request, res: Response): Promise<void> => {
    try {
        const sort: string = req.query.sort === "name" ? "name" : "type" ? "type" : "email"
        const order: string = req.query.order = "DESC"? "DESC" : "ASC"

        const userByType = await orderUsers(sort, order)
        
        res.status(200).send(userByType[0])

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}
