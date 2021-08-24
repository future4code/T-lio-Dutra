import {Request, Response} from "express"
import { connection } from "../connection"

export default async function createCharacter(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const{name, gender, description} = req.body
        console.log(req.headers["content-type"])

        await connection("character")
            .insert({name, gender, description})

        res.status(200).end()
    } catch (error) {
        res.status(500).send("Unexpected server error.")
    } 
    // characters.push({
    //     id: Date.now(),
    //     name,
    //     gender,
    //     description
    // })
}