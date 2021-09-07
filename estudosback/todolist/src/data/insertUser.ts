import { connection } from "../connection";
import { User } from "../types";

export const insertUser = async (newUser: User):Promise<any> => {
    await connection(`lista_usuarios_projeto16`)
    .insert (newUser)
}  