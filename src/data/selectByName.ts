import { connection } from "./connection";

export const selectByName = async(name: string): Promise<any> => {
    const result = await connection("PokedexGo")
    .where({name})
    return result
}