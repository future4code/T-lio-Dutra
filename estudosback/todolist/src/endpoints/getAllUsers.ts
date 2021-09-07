import { Request, Response } from "express"
import { selectAlUsers } from "../data/selectAllUsers"
import { User } from "../types"

export const getAllUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        const users: User[] | undefined = await selectAlUsers()
        if(!users){return res.status(404).send([])}
        const listaUsers: {users: User[]} = {users}
        res.status(200).send(listaUsers)
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}