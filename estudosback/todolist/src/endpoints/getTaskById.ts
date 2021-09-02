import { Request, Response } from "express"
import { selecionarTarefaPorId } from "../data/selectTaskById"

export const getTaskById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        const tarefa = await selecionarTarefaPorId(id)
        if(!tarefa){return res.status(404).send(`Tarefa não encontrada`)}
        res.status(200).send(tarefa)
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}