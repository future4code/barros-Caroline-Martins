// Exercicio 1
// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b)
// primeiro o console vai imprimir 10\\
// no segundo vai imprimir 10 e 5 pois o B recebeu um novo valor\\

//Exercicio 2

// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)
//creio que o console ira imprimir 10 10 10\\
// c recebera o valor de a que é igual a 10
// b recebera o valor de c que agora é 10
// a recebe o valor de b que ficou 10

//Exercicio 3

let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let valorDiaria = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${valorDiaria/horasTrabalhadas} por hora`)

// vai abrir um prompt pergunta as horas e o valor do dia trabalhado
//console vai dividir o valor de horas trabalhadas no dia pelo valor da diaria
// descobrir o valor que ele ganha por hora

// Exercicio 1 (escrita de codigo)

// ==== exercicio de escrita de codigo

let nomeUsuario
let idadeUsuario

console.log(typeof nomeUsuario)
console.log(typeof idadeUsuario)

// //comando me retornou um indefinido creio que por não ter dado um valor a variavel
 
nomeUsuario = prompt("Qual seu nome? ")
idadeUsuario = prompt("Qual idade? ") 
console.log(typeof nomeUsuario)
console.log(typeof idadeUsuario)

// // variavel recebeu valor e typeof retornou seu tipo string ambas pois prompt so roda em aspas

console.log("Ola!", nomeUsuario,"você tem", idadeUsuario,"anos.")

//Exercicio 2 (escrita de codigo)

let tempo = "Você gosta de chuva?"

let cafe = "Gostaria de um café?"

let corFavorita = "Você preferi a cor vermelho?"

let respostaTempo = prompt(tempo)
let respostaCafe = prompt (cafe)
let respostaCorFavorita = prompt (corFavorita)


console.log(tempo, respostaTempo)
console.log(cafe, respostaCafe)
console.log(corFavorita, respostaCorFavorita)


//Exercicio 3 (escrita de codigo)

let a = 10
let b = 25

let c = a
a = b
b = c

console.log(a, b)

//criei uma nova variavel c dando o valor de a
//a ficou com valor de b
// b pegou o valor de c

