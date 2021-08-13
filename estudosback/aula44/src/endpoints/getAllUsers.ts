import { Request, Response } from "express"
import { users } from "../data"


export const getAllUsers = (
    req: Request,
    res: Response
): void => {
    res.send(users)
} 

// Exercício 1
// a) o método utilizado foi o GET
// b) a entidade que esta sendo manipulada são os Users.