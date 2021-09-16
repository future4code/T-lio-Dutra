import { connection } from "../connections";
import { CompCorrida } from "../types";

export const inserirCompeticaoCorrida = async(novaCompeticao: CompCorrida): Promise<any> => {
    await connection("CompeticaoCorrida")
    .insert(novaCompeticao)
    
}