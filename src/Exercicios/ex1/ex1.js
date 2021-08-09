// Exercício 1
// a) com o comando process.argv[]
// b) e c)
const colors = require("colors")
const idade = Number(process.argv[3])
const nome = (process.argv[2])
console.log(`Olá, ${nome}! Você tem ${idade} anos.`.green)
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`.magenta)