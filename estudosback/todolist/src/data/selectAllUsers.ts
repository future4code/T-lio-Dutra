import { connection } from "../connection";
import { User } from "../types";

export const selectAlUsers = async (): Promise<User[] | undefined> => {
    const result = await connection(`lista_usuarios_projeto16`)
    .select ("id", "apelido")
    return result
}