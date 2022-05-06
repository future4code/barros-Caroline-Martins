//EXERCICIO DE INTERPRETAÇÃO

//1.
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//primeira linha diz que valor é  0
//segunda linha i fica 0
//quando vai lendo e repetindo vai recebendo valor +1
//achava que iria parar quando ficasse maior de 5 MAS deu total de 10 entendi depois o porque mas não sei explicar

//2.
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero < 0) {
// 		console.log(numero)
// 	}
// }

//) O que vai ser impresso no console? só sera impresso numeros da lista maiores que 18

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista,
//  o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso? só trocar o 18 por 0 vai imprmimir todos

//3.
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
//Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ? vai imprimir 4 linhas com a quantidade de asteriscos


//EXERCICIO DE ESCRITA DE CODIGO

//1.



// let pet = Number(prompt("Quantos pet você tem?"))
// let nomes = []
// if(pet == 0){
//     console.log("Que pena! Você pode adotar um pet.")
// }   else {
//         for(let pet1 = 0; pet1 < pet;pet1++){
    
//         let nomes1 = prompt("Qual o nome deles?")
//          nomes.push(nomes1)
       

//    }
// }
// console.log(nomes)

 

//2.
 //A.
// let numeros = [80, 30, 130, 40, 60]

// for(let num of numeros){
//   if (num > 0){
//       console.log(num)
//   }
// }

//B.

// let numeros = [80, 30, 130, 40, 60]

// for (let num of numeros){
//     numeros = num / 10
//     console.log(numeros)
// }


//C.
// 
// let numeros = [80, 15, 130, 23, 60]
// let num = []
// for(let numeros1 of numeros){
//     if(numeros1 % 2 === 0){
//         num.push(numeros1)
//     }
// }
// console.log(num)
    
//D.
// let string = [0, "oi",]
