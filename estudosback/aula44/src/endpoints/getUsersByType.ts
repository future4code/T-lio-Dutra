import {Request, Response} from "express"
import { users } from "../data"
import { User } from "../types"

export const getUsersByType = (
    req: Request,
    res: Response
): void => {
    let result: User[] = users;
    try {
        if (!req.query.type) {
            throw new Error("Invalid Params.")
        }
        if (req.query.type) {
            result = result.filter((User) =>
                User.type.includes(req.query.type as string) 
            );
        }
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message)
    } 
}

// Exercício 2
// a) os parametros foram passados atraves de Query Parameters, por ser uma busca por um tipo em comum em todos os users.
// b) Criando um ENUM com os types validos.