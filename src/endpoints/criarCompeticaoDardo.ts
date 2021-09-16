import { Request, Response } from "express"
import { inserirCompeticaoDardo } from "../data/inserirCompeticaoDardo"
import { CompDardo } from "../types"

export const criarCompeticaoDardo = async(req: Request, res: Response): Promise<any> => {
    try {
        const {id, atleta_id, competicao, valor1, valor2, valor3, unidade} = req.body
        if(!id || !atleta_id || !competicao || !valor1 || !valor2 || !valor3 || !unidade){
            return res.status(422).send({message: "Parametros inválidos."})
        }

        const CompeticaoDardo: CompDardo =  {id, atleta_id, competicao, valor1, valor2, valor3, unidade}
        await inserirCompeticaoDardo(CompeticaoDardo)
        res.status(201).send({message: "Competicao criada."})
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}