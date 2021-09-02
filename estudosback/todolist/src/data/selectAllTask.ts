import { connection } from "../connection";
import { Tarefa } from "../types";

export const selectAllTask = async (): Promise<Tarefa[] | undefined> => {
    const result = await connection(`lista_tarefas_projeto16`)
    .select ("id")
    return result
}