// function imprimeOlaMundo() {
//     console.log("olá mundo!")
// }

// function area(altura, largura) {
//     const area = altura * largura
//     console.log(area) 
// }

// // calculaArea(2, 5)

// function olaPessoal(nome) {
//     console.log(`Olá $(nome)`)
//     // console.log("Olá", nome) //quando usa vírgula, coloca um espaço entre as palavras
//     // console.log("Olá" + nome) //concatenando as strings, não coloca espaço
// }

// olaPessoal(Índio)

// function somaDoisNumeros(num1, num2){
//     const soma =  num1 + num2
//     return soma
// }

// const resultado = somaDoisNumeros(2, 3)
// const resultado2 = somaDoisNumeros(resultado, 2)
// console.log(resultado2)

// function imprimeArray(array){
//     for (let i = 0; i < array.lenght; i++){
//         console.log(array[i])
//     }
//     return array.lenght
// }

// const array1 = ["a", "b", "c"]
// const array2 = [1, 2, 3]

// const tamanho2 = imprimeArray(array2)

// const olaPessoaExpressao = function (nome) {
//     console.log(`Olá ${nome}`)
// }

// olaPessoaExpressao("Silvio")

const SomaDoisNumeros = (num1, num2) => {
    return num1 + num2
}

const resultado = SomaDoisNumeros(4, 7)
const resultado = SomaDoisNumeros(100, 256)
console.log(resultado)