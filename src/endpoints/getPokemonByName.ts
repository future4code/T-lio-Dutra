import { Request, Response } from "express"
import { selectByName } from "../data/selectByName"

export const getPokemonByName = async(req: Request, res: Response): Promise<any> => {
    try {
        const {name} = req.params
            if(!name){
                return res.status(422).send({error: "Insert a name."})
            }

        const result = await selectByName(name)
        
        if(!result.length){
            return res.status(404).send({error: "Pokemon not found."})
        }

        res.status(200).send(result)

    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}