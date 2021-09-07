import { Request, Response } from "express"
import { selectAllTask } from "../data/selectAllTask"
import { Tarefa } from "../types";

export const getAllTask = async (req: Request, res: Response): Promise<any> => {
    try {
        const tarefa: Tarefa[] | undefined = await selectAllTask()
        if(!tarefa){return res.status(404).send([])}
        const listaTask: {tarefa: Tarefa[]} = {tarefa}
        res.status(200).send(listaTask)
        // res.status(200).send({users: users})
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}