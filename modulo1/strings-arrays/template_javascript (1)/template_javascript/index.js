// EXERCICIO INTERPRETAÇÃO
//A.
// let array
// console.log('a. ', array)
//B.
// array = null
// console.log('b. ', array)
// //C.
// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
 //D.
// let i = 0
// console.log('d. ', array[i])
//E.
// array[i+1] = 19
// console.log('e. ', array)
//F.
// const valor = array[i+6]
// console.log('f. ', valor)

//Respostas
//A.
//É um undefined, pois não foi atribuido valor a ela
//B.
//É uma array NULL ela não tem valor
//C.
//Vai me passar a quantidade de itens na array ficaria c. 11 pois tem 11 itens
//D.
//a variavel i vai tem o valor do item 0 que é 3
//E.
//item i + 1 seria o 4 (pois o i recebeu valor do item 0) agora esse item esta recebendo valor 19
//F.
//Variavel F esta recebendo valor do item 6 que é 9

//Exercicio 2
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// o toUpperCase vai retornar todas as letras em maiusculo e o replaceAll vai trocar os A por I
// ficaria : SUBI NUM ONIBUS EM MIRROCOS

//EXERCICIO DE CODIGO
//1
let nomeUsuario = (prompt("Qual seu nome?"))
let emailUsuario = (prompt("Qual seu email?"))

console.log ("O email " +emailUsuario+ " foi cadastrado com sucesso. Seja bem vindo(a)" +nomeUsuario)

//2.

let comida = ["pizza", "pure", "churrasco", "massa", "sorvete"]
console.log (comida)

console.log(`Essas são minhas comidas favoritas ${comida}`)


let comidaUsuario = prompt("Qual sua comida preferida?")

comida.splice(1,1,comidaUsuario)
console.log (comida)


//3.
let atividades = []

atividades[0] = prompt("O que você precisa realizar durante o dia?")
atividades[1] = prompt("O que você precisa realizar durante o dia?")
atividades[2] = prompt("O que você precisa realizar durante o dia")

console.log ("minhas atividades " +atividades)

let atividadesFeitas = Number(prompt("Qual atividade você ja realizou 0,1 ou 2"))

atividades.splice(atividadesFeitas, 1)
console.log(`Você ainda tem ${atividades.length} suas atividades são ${atividades}`)

//DESAFIO

let frase = ("Digite uma frase")

let array =frase.split(" ")
console.log(array)

//DESAFIO

let array1 = ["banana", "morango","abacaxi", "laranja", "ameixa"]
let indice =array1.indexOf("abacaxi")
console.log (`O indice do abacaxi ${indice} tamanho do array ${array1.length}`)
