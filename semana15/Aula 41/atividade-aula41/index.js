//1)
// process.argv[0]
// process.argv[1]
// // o primeiro e segundo são fixos
// process.argv[2]
// // a partir do terceiro podemos atribuir valores

// const nome = process.argv[2]
// const idade = Number(process.argv[3])

// // console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// console.log(`Olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7}`)

//2)
// const operaçao = process.argv[2]
// const n1 = Number(process.argv[3])
// const n2 = Number(process.argv[4])


// switch (operaçao) {
//     case "soma":
//         console.log(n1 + n2)
//         break;
//     case "subt":
//         console.log(n1 - n2)
//         break;
//     case "div":
//         console.log(n1 / n2)
//         break;
//     case "mult":
//         console.log(n1 * n2)
//         break;
//     default:
//         break;
// }


//3)

// const listaDeTarefas = [
//     "Lavar a louça"
// ]

// let tarefa = process.argv[2]

// listaDeTarefas.push(process.argv[2])

// console.log(listaDeTarefas)