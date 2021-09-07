import { Request, Response } from "express"
import { insertUser } from "../data/insertUser"
import { User } from "../types"


export const createUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const {nome, apelido, email} = req.body
        if(!nome || !apelido || !email ){
            return res.status(400).send(`Preencha os parametros corretamente`) 
        }

        const id = Date.now().toString()

        const newUser: User = {id, nome, apelido, email}
        await insertUser(newUser)
        res.status(201).send(`Usuario criado com sucesso`) 
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}