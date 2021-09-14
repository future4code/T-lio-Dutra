import { connection } from "./connection";

export const selectByType = async(type1: string, page: number): Promise<any> => {
    const result = await connection("PokedexGo")
    .limit(12)
    .offset(page)
    .where({type1})
    return result
}