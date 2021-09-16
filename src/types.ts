export type Atleta = {
    id: number,
    esporte: Esporte,
    nome: string
}

export type CompCorrida = {
    id: number,
    atleta_id: number,
    competicao: string,
    valor: number,
    unidade: string
}

export type CompDardo = {
    id: number,
    atleta_id: number,
    competicao: string,
    valor1: number,
    valor2: number,
    valor3: number,
    unidade: string
}

export enum Esporte {
    CORRIDA = "100m",
    DARDO = "Dardo"
}