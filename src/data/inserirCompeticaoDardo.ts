import { connection } from "../connections";
import { CompDardo } from "../types";

export const inserirCompeticaoDardo = async(novaCompeticao: CompDardo): Promise<any> => {
    await connection("CompeticaoDardo")
    .insert(novaCompeticao)
    
}