//EXERCICIO DE INTERPREÇÃO
//1.
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console? função faz os numeros serem multiplicados por 5,
//no chamamento vai imprimir 10 e 50 pois é 5*2 e 5*10

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função
// `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

//2.
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade: a função vai receber um texto (string)
//vai colocar todas as letras em minusculo e após procurar se tem uma palavras "cenoura"

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`
//      ii.  `CENOURA é bom pra vista`
//      iii. `Cenouras crescem na terra`
// Nem uma das alternativas por conta do includes vai retorna true ou false não pedi para imprimir a frase do usuario

//EXERCICIO DE ESCRITA
//1.
//A.
// function sobreMim(){
// ("Eu sou Carol, tenho 28 anos, moro em Santa Catarina e sou estudante.")
// }
// console.log(sobreMim)

//B.
// function informacao(nome,idade,endereco,profissao){
//     return `Eu sou, ${nome} tenho ${idade} anos, moro em ${endereco} e sou ${profissao} .`
// }
// console.log(informacao("Caroline", 28, "Santa Catarina", "estudante"))

//2.
// //A.
// function soma(numero1,numero2){
//     return numero1 + numero2

// }
//  console.log(soma(10,10))

// //B.
// function maiorIgual(n1,n2){
//     return n1 >= n2

// }
// console.log(maiorIgual(10,10))

// //C.
// function par(numero){
    
//     return numero % 2 === 0
// }
// console.log(par(8))
// console.log(par(5))

//D.
// let texto = prompt("Digite uma mensagem")

// function receba(mensagem){
//     const maiusculo = mensagem.length
//     const tamanho = mensagem.toUpperCase()
//     return maiusculo + " " + tamanho
// }
//  let envia = receba(texto)
//  console.log(envia)

//3.
 let num1 = Number(prompt("Digite um numero"))
 let num2 = Number(prompt("Digite outro numero"))

 function matematica(soma){
    soma = num1 + num2
    return soma
 }
console.log(matematica(num1 + num2))

function subtracao(subtracao1){
    subtracao1 = num1 - num2
    return subtracao1
}
console.log(subtracao(num1 - num2))

function multiplicacao(multiplo){
    multiplo = num1 * num2  
    return multiplo
}
console.log(multiplicacao(num1 * num2))

function divisao(divisor){
    divisor = num1 / num2
    return divisor
}
console.log(divisao(num1 / num2))