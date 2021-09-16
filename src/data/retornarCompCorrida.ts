import { connection } from "../connections"

export const retornarCompCorrida = async(): Promise<any> => {
    const result = await connection.raw(`
        SELECT competicao, atleta_id, valor FROM CompeticaoCorrida
        ORDER BY valor ASC
    `)
    return result[0]
}