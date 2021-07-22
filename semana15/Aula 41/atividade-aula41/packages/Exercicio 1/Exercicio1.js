// process.argv[0]
// process.argv[1]
// // o primeiro e segundo são fixos
// process.argv[2]
// // a partir do terceiro podemos atribuir valores

const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// console.log(`Olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7}`)