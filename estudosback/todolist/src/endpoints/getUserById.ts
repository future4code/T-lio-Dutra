import { Request, Response } from "express"
import { selectById } from "../data/selectById"
import { User } from "../types"

export const getUserById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        const users = await selectById(id)
        if(!users.length){return res.status(404).send(`Usuario não encontrado`)}
        res.status(200).send(users)
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}