console.log("exercicio 1")

// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. 
// Tente atribuir um número a esta variável. O que acontece?
//Resposta:
// Gera um erro pois ela espera somente uma string.

// let minhaString: string = 30

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
// Como fazer para que essa variável também aceite strings? 
// Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
//Resposta:
// usando o type aliases
// que ficaria assim:
let meuNumero: number | string = "caroline"
let meuNumero2: number | string = 28


//c)

type Person={
    nome: string,
    idade: number,
    corFavorita: corFavorita,
}
// primeira parte:
// const pessoa1: Person= {
//     nome: "Caroline",
//     idade: 28,
//     corFavorita: "Azul",
// }

// const pessoa2: Person= {
//     nome: "Ane Cristine",
//     idade: 10,
//     corFavorita: "Roxa",
// }

// const pessoa3: Person={
//     nome: "Lorenzo",
//     idade: 3,
//     corFavorita: "Verde"
// }

// refaturando:

enum corFavorita{
    vermelho= "vermelho",
    laranja="laranja",
    amarelo= "amarelo",
    verde= "verde",
    azul="azul",
    azulEscuro= "azul escuro",
    roxo= "roxo"
}

const pessoa1: Person= {
    nome: "Caroline",
    idade: 28,
    corFavorita: corFavorita.azul,
}

const pessoa2: Person= {
    nome: "Ane Cristine",
    idade: 10,
    corFavorita: corFavorita.roxo,
}

const pessoa3: Person={
    nome: "Lorenzo",
    idade: 3,
    corFavorita: corFavorita.verde
}

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)