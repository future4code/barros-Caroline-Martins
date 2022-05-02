//EXERCICIO DE INTERPRETAÇÃO

//1.
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? Vaia testa se o numero dado pelo usuario é divissivel por 2

// b) Para que tipos de números ele imprime no console "Passou no teste"? para numeros PARES pois resto é 0

// c) Para que tipos de números a mensagem é "Não passou no teste"? para numeros impares pois resto não vai ser igual a 0

//2.
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima? para passar o valor da fruta escolhida

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? O preço da fruta Maçã é R$ 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, 
// qual seria a mensagem impressa no console se retirássemos o `break` 
// que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? O valor da Pêra seria 5.00
// vai passar reto pois não foi dado final para a condição.
//TEMOS UM DETALHE SE NÃO FOR ESCRITO EXATAMENTE COMO COM LETRAS MAIUSCULAS E ACENTOS O SEU VALOR VAI SER 5.00


//3.
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo? variavel que pedi um numero para usuario

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//se for maior que 10 vai imprmir a mensagem "esse numero passou no teste", se for -10 não vai imprimir nada
//não foi atribuido um else para ele so feito uma outra variavel

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. 
//acredito que somente se for dado numero negativo


//EXERCICIO CODIGO DE ESCRITA


//1.
let idade = Number(prompt("Qual sua idade?"))

    if(idade>=18){
        console.log("Parabéns você já pode dirigir")
    } else {
        console.log("Infelizmente não possui idade ainda")
    }


//2.
let turno=prompt("Qual turno você estuda?M(matutino), V(vespetino) ou N(noturno)")

    if (turno == "M"){
        console.log("Bom Dia!")
    } else if (turno == "V"){
        console.log("Boa Tarde")
    }else{
        console.log("Boa Noite")
    }

//3.
// let turno=prompt("Qual turno você estuda?M(matutino), V(vespetino) ou N(noturno)")

//     switch(turno){
//         case 'M':
//             console.log("Bom dia!")
//             break
//             case 'V':
//                 console.log("Boa Tarde!")
//             break
//             default:
//                 console.log("Boa Noite!")

//     }

// //4.
// let filme = prompt("Qual genero do filme?")
// let preco = Number(prompt("Qual valor do ingresso?"))

//     if(filme === "fantasia" && preco <=15){
//         console.log("Bom filme!")
//     } else{
//         console.log("Escolha outro filme ;(")
//     }


//DESAFIO
//1.
let lanche = prompt("Qual lanche vocês vão escolher?")
let filme = prompt("Qual genero do filme?")
let preco = Number(prompt("Qual valor do ingresso?"))

    if(filme === "fantasia" && preco <=15){
        console.log(`Bom filme! 
        Aproveite o seu lanche ${lanche}`)
    } else{
        console.log("Escolha outro filme ;(")
    }


//2.
// let nomeCompleto = prompt("Nome completo torcedor")
// let tipoJogo = prompt("Qual tipo de jogo?IN intenacional, DO domestico")
// let etapaJogo = prompt("Etapa?SF semi final, DT desição 3º colocado,FI final")
// let categoria = prompt("Categoria 1,2,3 e 4")
// let ingresso = prompt("Quantidade de ingressos?")

// function jogo(jogo){
//     if(tipoJogo === "IN"){
//         return("Jogo Internacional")
//     }else if(tipoJogo === "DO"){
//         console.log("Jogo Domestico")
//     }
//     if(etapaJogo === "SF"){
//         console.log("Semi final")
//     }else if(etapaJogo === "DT"){
//         console.log("Decição terceira posição.")
//     }
//     if(etapaJogo === "FI"){
//         console.log("Final")
//     }
//     if(categoria === 1){
//         console.log
//     }



// }
// jogo()
// console.log(`---- Dados da compra -----
//             Nome completo: ${nomeCompleto}
//             tipo de jogo: ${tipoJogo}
//             etapa do jogo: ${etapaJogo}
//             categoria: ${categoria}
//             ingresso:`)