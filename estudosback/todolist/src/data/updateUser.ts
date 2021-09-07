import { connection } from "../connection";

export const updateUser = async(
    id: string, 
    nome?: string,
    apelido?: string,
    email?: string
    ):Promise<any> => {
        if(nome){
            await connection('lista_usuarios_projeto16')
            .update({nome})
            .where({id})
        }
        if(apelido){
            await connection('lista_usuarios_projeto16')
            .update({apelido})
            .where({id})
        }
        if(email){
            await connection('lista_usuarios_projeto16')
            .update({email})
            .where({id})
        }
    }