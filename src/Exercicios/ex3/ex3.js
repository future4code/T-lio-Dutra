// Exercício 3
const colors = require("colors")
const tarefas = [
    "estudar",
    "ler"
]

const tarefa = process.argv[2]
tarefas.push(tarefa)
console.log(`A tarefa ${tarefa} foi adicionada com sucesso!`.magenta)