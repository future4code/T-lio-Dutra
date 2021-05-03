// Exercícios de interpretação de código:
//1)a: 10, 50  b: Nada, por nao ter nenhuma variavel.
//2)a: Darvas, Caio. b: Amanda e Caio
//3) Não entendi muito, mas acho que o que a função quer fazer é multiplicar um array e pelo, e ver se a divisao do resultado dividido por 2 é 0.

// Exercícios de exrita de código:
//4)a:
// function me() {
//     console.log(`Eu sou Túlio, tenho 22 anos, moro em Belo Horizonte e sou estudante.`)
// }
//b:
function dados(nome, idade, local, estuda){
    nome=prompt("Qual o seu nome?")
    idade=prompt(Number("Qual a sua idade?"))
    local=prompt("Qual cidade você mora?")
   estuda=prompt(Boolean("Você é estudante? [true] ou [false]"))

   if (estuda===true){
       estuda="sou estudante"
   }
   else (estuda===false){
    estuda="não sou estudante"
   }
   console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${local} e ${estuda}.`)
}
