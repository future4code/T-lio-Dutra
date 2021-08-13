import { Request, Response } from "express"
import { users } from "../data"
import { User } from "../types"

export const createNewUser = (
    req: Request,
    res: Response
): void => {
    let codeError: number = 400;
    try {
        const { id, name, email, type, age } = req.body

        if(!id || !name || !email || !type || !age) {
            codeError = 422
            throw new Error("Please check the fields!")
        }

        const newUser: User = {
            id,
            name,
            email,
            type,
            age
        }

        users.push(newUser)

        res.status(201).send({message: "User created!"})

    } catch (error) {
        res.status(codeError).send({ message: error.message })
    }
}

// Exercício 4
// a) Não muda nada, o método PUT tambem pode ser usado para criar novos dados caso o mesmo não exista
// b) Não, pois ja existe o método POST para criar novos dados e evitar confusão no código.