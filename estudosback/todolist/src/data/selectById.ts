import { connection } from "../connection";
import { User } from "../types";

export const selectById = async (id: string): Promise<any> => {
    const result = await connection(`lista_tarefas_projeto16`)
    .select ("*")
    .where({id})
    return result
}