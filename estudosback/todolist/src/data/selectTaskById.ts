import { connection } from "../connection";

// export const selectTaskById = async (id: string): Promise<any> => {
//     const result = await connection(`lista_tarefas_projeto16`)
//     .select ("id", "titulo", "descricao", "prazo", "status", "id_criador")
//     .join(`lista_usuarios_projeto16`)
//     .where({id})
//     return result
    
// }

export const selecionarTarefaPorId = async(id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT *
        FROM lista_tarefas_projeto16
        WHERE lista_tarefas_projeto16.id = "${id}";
    `)
    return result[0][0]
}
