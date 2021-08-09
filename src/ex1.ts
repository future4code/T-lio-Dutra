// Exercício 1
// a) 
// const minhaString: string = 9
// ocorre um erro, o tipo definido é string, e o valor dado é number.

//b)
// const meuNumero: number = 10
// podemos fazer com que a variável aceite numbers e strings colocando o pipe │ logo após o number : number │ string.

//c) 
enum CORES {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type pessoas = {
    nome: string,
    idade: number,
    corFavorita: CORES
}

const pessoa1: pessoas = {
    nome: "Alice",
    idade: 18,
    corFavorita: CORES.VIOLETA
}

const pessoa2: pessoas = {
    nome: "João",
    idade: 24,
    corFavorita: CORES.AZUL
}

const pessoa3: pessoas = {
    nome: "Luna",
    idade: 25,
    corFavorita: CORES.AMARELO
}

const pessoa4: pessoas = {
    nome: "Esmeralda",
    idade: 20,
    corFavorita: CORES.VERDE
}