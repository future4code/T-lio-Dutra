export type User = {
    id: string,
    nome: string,
    apelido: string,
    email: string
}

export type Tarefa = {
    id: string,
    titulo: string,
    descricao: string,
    prazo: string,
    id_criador: string,
}