import { Request, Response } from "express"
import moment from "moment"
import { insertTask } from "../data/insertTask"
import { Tarefa } from "../types"

export const createTask = async (req: Request, res: Response): Promise<any> => {
    try {
        let { titulo, descricao, prazo, id_criador } = req.body

        if (!titulo || !descricao || !prazo || !id_criador) {
            res.status(400).send({
                message: "Os parametros são obrigatorios"
            })

            return
        }
        
        const dateDiff: number = moment(prazo, "DD/MM/YYYY").unix() - moment().unix()

        if(dateDiff <= 0){
            res.status(400).send({
                message: "Insira um prazo correto"
            })
            return
        }

        const id = Date.now().toString()
        
        prazo = moment(prazo, "DD/MM/YYYY").format("YYYY-MM-DD")

        const novaTarefa: Tarefa = {id, titulo, descricao, prazo, id_criador}

        await insertTask(novaTarefa)
        res.status(201).send({message: "Tarefa criada com sucesso.", id})
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}