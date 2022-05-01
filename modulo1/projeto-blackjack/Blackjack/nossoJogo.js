console.log("Boas Vindas ao jogo Black Jack!")

let confirma = confirm("Quer iniciar uma nova jogada?")
if(confirma === true){

let carta1 = comprarCarta()
let carta2 = comprarCarta()
let cartaUsuario = (carta1.valor + carta2.valor)

let carta3 = comprarCarta()
let carta4 = comprarCarta()
let cartaComputador = (carta3.valor + carta4.valor)
 
console.log(`Cartas usuario: ${carta1.texto} ${carta2.texto}. pontuação: ${cartaUsuario}`)
console.log(`Cartas computador: ${carta3.texto} ${carta4.texto}. pontuação: ${cartaComputador}`)
   
    if (cartaUsuario > cartaComputador){
    console.log("O Usuário ganhou!")
    } else if(cartaUsuario < cartaComputador){
        console.log("O computador venceu!")
        if(cartaUsuario === cartaComputador){
            console.log("Empate!")
        }
    }} else {
        console.log("Fim de jogo")
    }


//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
