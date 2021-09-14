import { Request, Response } from "express"
import { selectByType } from "../data/selectByType"

export const getPokemonsByType = async (req: Request, res: Response): Promise<any> => {
    try {
        const page: number = Number(req.query.page) || 1

        const offset: number = (page - 1) * 12

        const { type } = req.query
        if (typeof type !== "string") {
            return res.status(422).send({ error: "Has to be a string." })
        }

        const listPages = await selectByType(type, offset)
        if (!listPages.length) {
            return res.status(404).send({ error: "Page not found." })
        }

        res.status(200).send(listPages)

    } catch (error: any) {
        res.send({ error: error.message || error.sqlMessage })
    }
}