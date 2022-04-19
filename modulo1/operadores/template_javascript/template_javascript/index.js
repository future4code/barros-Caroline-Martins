//EXERCICIO DE Interpretação

//1.
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)

//a. false
//b. false
//c. true
//d. boleano


//2.
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)
// o erro é que ele vai entender que é uma string, vai dar o comando com o prompt mas a soma não vai sair
// teria trocado de const para let pois pode variar
//3.
//teria que converter a string em number
// let primeiroNumero = Number (prompt ('Digite um numero!') )
// let segundoNumero = Number (prompt('Digite outro numero!') )
// let soma = primeiroNumero + segundoNumero
// console.log(soma)


//EXERCICIO ESCRITA DE CODIGO
//1.
// let idade = Number (prompt ('Qual sua idade?') )
// let idadeAmigo = Number (prompt ('Qual a idade do seu melhor amigo?') )

// console.log ("A idade do seu amigo é maior que a sua?", idade >= idadeAmigo)

//2.
// let numeroUsuario = Number (prompt ('Insira um numero PAR') )
// console.log (numeroUsuario % 2 )
// Não vai existir RESTO DE DIVISÃO de 2 com numeros Pares sempre acaba em 0
// Se inserir numeros impares Ira me retornar o RESTO DE DIVISÃO

//3.
// let idadeUsuario = Number (prompt ('Qual sua idade?') )

// console.log (idadeUsuario * 12)

// console.log (idadeUsuario * 365)

// console.log (idadeUsuario * 8760)

//4.
// let primeiroNumero = Number(prompt ('Digite um numero') )
// let segundoNumero = Number(prompt ('Digite outro numero') )
// console.log("O primeiro numero é maior que o segundo?", primeiroNumero > segundoNumero)

// console.log('O primeiro numero é igual ao segundo?', primeiroNumero == segundoNumero)

// console.log('O primeiro numero é divisivel pelo segundo numero?', (primeiroNumero % segundoNumero) === 0)

// console.log('O segundo numero é divisivel pelo primeiro numero?', (segundoNumero % primeiroNumero) === 0)


