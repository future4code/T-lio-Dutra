import { connection } from "./connection";

export const selectByGeneration = async(generation: string, page: number): Promise<any> => {
    const result = await connection("PokedexGo")
    .limit(12)
    .offset(page)
    .where({generation})
    return result
}