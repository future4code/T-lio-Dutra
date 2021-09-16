import { Request, Response } from "express"
import { retornarCompDardo } from "../data/retornarCompDardo"

export const rankingDardo = async(req: Request, res: Response): Promise<any> => {
    try {
        const result = await retornarCompDardo()
        if(!result.length){
            return res.status(404).send({message: "Competicao não encontrada."})
        }
        res.status(200).send(result)
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}