import {Request, Response} from "express"
import { users } from "../data"
import { User } from "../types"

export const getUserByName = (
    req: Request,
    res: Response
): void => {
    let codeError: number = 400;
    try {
        const name: string = req.query.name as string
        const user: User | undefined = users.find((user) => user.name === name) 
        if(!user) {
            codeError = 404
            throw new Error("User not found")
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(codeError).send({message: error.message})
    }
}

// Exercício 3
// a) Query Params
// b) Linhas 13-16