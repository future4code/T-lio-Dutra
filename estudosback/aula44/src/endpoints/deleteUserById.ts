import { Request, Response } from "express"
import { users } from "../data"

export const deleteUserById = (
    req: Request,
    res: Response
): void => {
    try {
        const index: number = users.findIndex(
            user => user.id === Number(req.params.id)
        )
        if (index === -1) {
            res.statusCode = 404
            throw new Error("User not found.")
        }
        users.splice(index, 1)

        res.status(204).send({ message: "User deleted!" })
    } catch (error) {
        res.statusMessage = error.message
        res.end()
    }
}