import { Request, Response } from "express"
import { users } from "../data"
import { User } from "../types"

export const updateUser = (
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

        const updatedUser: User = {
            id,
            name,
            email,
            type,
            age
        }

        users.push(updatedUser)

        res.status(201).send({message: "User updated!"})

    } catch (error) {
        res.status(codeError).send({ message: error.message })
    }
}