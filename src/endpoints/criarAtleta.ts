import { Request, Response } from "express"
import { inserirAtletas } from "../data/inserirAtletas"
import { Atleta } from "../types"

export const criarAtleta = async(req: Request, res: Response): Promise<any> => {
    try {
        const {id, esporte, nome} = req.body

        if(!id || !esporte || !nome){
            return res.status(422).send({message: "Parametros inválidos."})
        }
        if(esporte !== "100m" && esporte !== "Dardo"){
            return res.status(422).send({message: "Insira um esporte válido."})
        }

        const atleta: Atleta = {id, esporte, nome}
        
        await inserirAtletas(atleta)
        res.status(201).send({message: "Atleta cadastrado."})
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}