import { connection } from "./connection";

export const getAllPokemons = async(page: number): Promise<any> => {
    const resultPages = await connection ("PokedexGo")
    .limit(12)
    .offset(page)
    return resultPages
}