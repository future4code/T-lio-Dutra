import { Request, Response } from "express"
import { countries } from "../data"
import { country } from "../types"

export const getRandomCountry = (
    req: Request,
    res: Response
): void => {
    const index = Math.floor(Math.random() * 196)
    const result: country | undefined = countries.find(
        country => country.id === index
    )

    if (result) {
        res.send(result)
    } else {
        res.status(404).end()
    }
}