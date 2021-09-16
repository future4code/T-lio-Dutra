import { Request, Response } from "express"
import { retornarCompCorrida } from "../data/retornarCompCorrida"

export const rankingCorrida = async(req: Request, res: Response): Promise<any> => {
    try {
        const result = await retornarCompCorrida()
        if(!result.length){
            return res.status(404).send({message: "Competicao não encontrada."})
        }
        res.status(200).send(result)
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}