//) Exercícios de interpretação de código

/* 1:
a. false
b. false
c. true
d. true

   2:
a. undefined
b. null
c. 11
d. 0
e. 19
f. 6
*/

//) Exercícios de escrita de código
//1: 
// const idade=prompt("Qual a sua idade?")
// console.log (Number(idade))

// const idadeamg=prompt("Qual a idade de seu melhor amigo?")
// console.log (Number(idadeamg))

// document.write("Sua idade é maior do que a de seu melhor amigo?:" + idade>idadeamg);

// document.write(idade - idadeamg);

//2:
// const npar=prompt("Digite um número par")
// console.log (Number(npar))

// console.log (npar % 2)

// o resto da divisão sempre é 0
// caso seja inserido um número ímpar o resto sera 1

//3:
// let listaDeTarefas = []
// console.log (listaDeTarefas)

// const tar1=prompt("Digite uma tarefa")
// const tar2=prompt("Digite outra tarefa")
// const tar3=prompt("Digite outra tarefa")
// listaDeTarefas.push(tar1)
// listaDeTarefas.push(tar2)
// listaDeTarefas.push(tar3)
// console.log(listaDeTarefas)

// const tarf=prompt("Digite o índice da tarefa concluída: 0, 1 ou 2.")
// listaDeTarefas.splice(tarf)
// console.log(listaDeTarefas)

//4:
const nome=prompt("Insira seu nome: ")
const email=prompt("Insira seu email: ")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome} !`)