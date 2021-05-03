/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem-vindo(a) ao jogo de BlackJack!")

let jogo = confirm("Iniciar um novo jogo?")

if (jogo) {
   let carta1Us = comprarCarta()
   let carta2Us = comprarCarta()
   let carta1Pc = comprarCarta()
   let carta2Pc = comprarCarta()

   let pontUs = carta1Us.valor + carta2Us.valor
   let pontPc = carta1Pc.valor + carta2Pc.valor

   console.log(`Usuário - cartas: ${carta1Us.texto} ${carta2Us.texto} - ${pontUs}`)
   console.log(`Bot - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontPc}`)

   if (pontUs > pontPc) {
      console.log("Parabéns, você ganhou!")
   } else if (pontPc > pontUs) {
      console.log("Você perdeu.")
   } else if (pontUs === pontPc) {
      console.log("Deu empate!")
   }

} else {
   console.log("O jogo acabou.")
}
