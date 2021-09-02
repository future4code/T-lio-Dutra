import { connection } from "../connection";
import { Request, Response } from "express"
import { Tarefa } from "../types";

export const insertTask = async (newTask: Tarefa): Promise<any> => {
    await connection(`lista_tarefas_projeto16`)
    .insert(newTask)
}