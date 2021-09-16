import { connection } from "../connections"
import { Atleta } from "../types"

export const inserirAtletas = async(novoAtleta: Atleta): Promise<any> => {
    await connection("Atletas")
    .insert(novoAtleta)
}