import { Request, Response } from "express"
import { user } from "../types"
import { connection } from "../data/connection"

export async function getUsersByType(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const type = req.params.type
        const result = await connection("aula49_exercicio")
            .select()
            .where(`%${type}%`)

        res.status(200).send(result)
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}