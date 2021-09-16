import { Request, Response } from "express"
import { inserirCompeticaoCorrida } from "../data/inserirCompeticaoCorrida"
import { CompCorrida } from "../types"

export const criarCompeticaoCorrida = async(req: Request, res: Response): Promise<any> => {
    try {
        const {id, atleta_id, competicao, valor, unidade} = req.body
        if(!id || !atleta_id || !competicao || ! valor || !unidade){
            return res.status(422).send({message: "Parametros inválidos."})
        }

        const Competicao100m: CompCorrida =  {id, atleta_id, competicao, valor, unidade}
        await inserirCompeticaoCorrida(Competicao100m)
        res.status(201).send({message: "Competicao criada."})
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}