import { countries } from "../data"
import { Request, Response } from "express"

export const deleteCountryById = (
    req: Request,
    res: Response
): void => {

    try {
        if (req.headers.authorization !== "tokenabc123") {
            res.statusCode = 401
            throw new Error("Token invalido.")
        }

        const index: number = countries.findIndex(
            country => country.id === Number(req.params.id)
        )

        if(index === -1){
            res.statusCode = 404
            throw new Error("Nao encontrado.")
        }

        countries.splice(index, 1)

        res.status(204).end()
    } catch (error) {
        if (res.statusCode == 200) {
            res.status(500).end()
        } else {
            res.statusMessage = error.message
            res.end()
        }
    }


}