import { Request, Response } from "express"
import { users } from "../data"

export const getUserById = (
    req: Request,
    res: Response
): void => {
    let codeError: number = 400;
    try {
        const id: number = Number(req.params.id)
        if (isNaN(id)) {
            codeError = 422
            throw new Error ("Invalid value for id, please use numbers.")
        }
        const user = users.find((user) => {
            return user.id === id
        })
        if (!user) {
            codeError = 404
            throw new Error ("User not found")
        }
        res.status(200).send(user)

    } catch (error) {
        res.status(codeError).send({ message: error.message })
    }
}