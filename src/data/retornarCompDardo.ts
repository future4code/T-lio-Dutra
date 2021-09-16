import { connection } from "../connections"

export const retornarCompDardo = async(): Promise<any> => {
    const result = await connection.raw(`
        SELECT competicao, atleta_id, valor1, valor2, valor3 FROM CompeticaoDardo
        ORDER BY valor1, valor2, valor3 DESC
    `)
    return result[0]
}